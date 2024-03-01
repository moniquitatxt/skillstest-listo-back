import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './company.schema';
import { CompanyResolver } from 'src/graphql/company.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
  ],
  controllers: [CompanyController],
  providers: [CompanyResolver, CompanyService],
  exports: [
    CompanyService,
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
  ],
})
export class CompanyModule {}
