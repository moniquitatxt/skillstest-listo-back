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
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyService } from './company.service';
import { Company } from './company.schema';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async createCompany(
    @Body(new ValidationPipe()) createCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    try {
      return this.companyService.createCompany(createCompanyDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id')
  async updateCompany(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company | null> {
    try {
      return this.companyService.updateCompany(id, updateCompanyDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async getAllCompanies(): Promise<Company[]> {
    try {
      return this.companyService.getAllCompanies();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get(':id')
  async getOneCompany(@Param('id') id: string): Promise<Company | null> {
    try {
      return this.companyService.getOneCompany(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  async deleteCompany(@Param('id') id: string): Promise<Company | null> {
    return this.companyService.deleteCompany(id);
  }
}
