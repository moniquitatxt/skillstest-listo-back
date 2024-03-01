import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './company.schema';
import { CompanyResolver } from 'src/graphql/company.resolver';
import { EmployeeSchema } from './employee/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [CompanyController],
  providers: [CompanyResolver, CompanyService],
  exports: [
    CompanyService,
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
  ],
})
export class CompanyModule {}
