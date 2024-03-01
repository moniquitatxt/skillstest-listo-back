import { Model } from 'mongoose';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.schema';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('Company') private readonly companyModel: Model<Company>,
  ) {}

  async getAllCompanies(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async getOneCompany(id: string): Promise<Company | null> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid company ID');
    }
    const company = await this.companyModel.findOne({ _id: id }).exec();

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    return company;
  }

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const { email, fiscal_id } = createCompanyDto;
    const existingCompany = await this.companyModel
      .findOne({ $or: [{ email }, { fiscal_id }] })
      .exec();
    if (existingCompany) {
      throw new ConflictException(
        'Correo electrónico o identificador fiscal ya está en uso',
      );
    }

    const createdCompany = new this.companyModel(createCompanyDto);
    return createdCompany.save();
  }

  async updateCompany(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company | null> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid company ID');
    }

    const existingCompany = await this.companyModel
      .findByIdAndUpdate(id, updateCompanyDto, { new: true })
      .exec();
    if (!existingCompany) {
      throw new NotFoundException('Company not found');
    }
    return existingCompany;
  }

  async deleteCompany(id: string): Promise<Company | null> {
    const deletedCompany = await this.companyModel.findByIdAndDelete(id).exec();
    if (!deletedCompany) {
      throw new NotFoundException('Company not found');
    }
    return deletedCompany;
  }

  async addEmployeeToCompany(
    companyId: string,
    employeeId: string,
  ): Promise<Company> {
    const company = await this.companyModel.findById(companyId).exec();
    if (!company) {
      throw new NotFoundException('Compañía no encontrada');
    }

    company.employees.push(employeeId);
    await company.save();

    return company;
  }
}
