import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './employee.schema';
import { CompanyModule } from 'src/company/company.module';
import { EmployeeResolver } from './graphql/employee.resolver';

@Module({
  imports: [
    CompanyModule,
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeResolver, EmployeeService],
})
export class EmployeeModule {}
