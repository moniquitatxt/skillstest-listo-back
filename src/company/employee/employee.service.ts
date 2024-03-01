import { Model } from 'mongoose';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CompanyService } from '../company.service';
import { Employee } from './employee.schema';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateEmployeeInput } from './inputs/create-employee.input';
import { Company } from '../company.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
    @InjectModel('Company') private readonly companyModel: Model<Company>,
    private readonly companyService: CompanyService,
  ) {}

  async getAllEmployees(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async getOneEmployee(id: string): Promise<Employee | null> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid employee ID');
    }
    const employee = await this.employeeModel.findOne({ _id: id }).exec();

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    return employee;
  }
  async getEmployeesByCompany(companyId: string): Promise<Employee[]> {
    if (!companyId.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid company ID');
    }
    const company = await this.companyModel.findById(companyId).exec();
    if (!company) {
      throw new NotFoundException('Company not found');
    }
    const employeeIds = company.employees.map((employeeId) =>
      employeeId.toString(),
    );

    const employees = await this.employeeModel
      .find({ _id: { $in: employeeIds } })
      .exec();
    if (!employees) {
      throw new NotFoundException('Employees not found for this company');
    }
    return employees;
  }

  async createEmployee(
    createEmployeeDto: CreateEmployeeInput,
  ): Promise<Employee> {
    const { email, companyId } = createEmployeeDto;

    const existingEmployee = await this.employeeModel.findOne({ email }).exec();
    if (existingEmployee) {
      throw new ConflictException(
        'Correo electrónico de empleado ya está en uso',
      );
    }

    const createdEmployee = new this.employeeModel(createEmployeeDto);
    const savedEmployee = await createdEmployee.save();

    await this.companyService.addEmployeeToCompany(
      companyId,
      savedEmployee._id,
    );

    return savedEmployee;
  }

  async updateEmployee(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee | null> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid employee ID');
    }

    const existingEmployee = await this.employeeModel
      .findByIdAndUpdate(id, updateEmployeeDto, { new: true })
      .exec();
    if (!existingEmployee) {
      throw new NotFoundException('Employee not found');
    }
    return existingEmployee;
  }

  async deleteEmployee(id: string): Promise<Employee | null> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid employee ID');
    }
    const deletedEmployee = await this.employeeModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedEmployee) {
      throw new NotFoundException('Employee not found');
    }
    await this.companyModel
      .updateMany({ employees: id }, { $pull: { employees: id } })
      .exec();

    return deletedEmployee;
  }
}
