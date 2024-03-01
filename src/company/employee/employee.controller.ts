import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.schema';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateEmployeeInput } from './inputs/create-employee.input';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(
    @Body(new ValidationPipe()) createEmployeeDto: CreateEmployeeInput,
  ): Promise<Employee> {
    try {
      return this.employeeService.createEmployee(createEmployeeDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee | null> {
    try {
      return this.employeeService.updateEmployee(id, updateEmployeeDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async getAllEmployees(): Promise<Employee[]> {
    try {
      return this.employeeService.getAllEmployees();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get(':id')
  async getOneEmployee(@Param('id') id: string): Promise<Employee | null> {
    try {
      return this.employeeService.getOneEmployee(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: string): Promise<Employee | null> {
    return this.employeeService.deleteEmployee(id);
  }
}
