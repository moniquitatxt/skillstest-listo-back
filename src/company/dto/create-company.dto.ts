import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsArray,
} from 'class-validator';
import { CompanyType } from '../company.schema';
import { CreateEmployeeDto } from '../employee/dto/create-employee.dto';
import { Type } from 'class-transformer';
import { EmployeeDto } from '../employee/dto/employee.dto';

registerEnumType(CompanyType, {
  name: 'CompanyType',
});

@ObjectType()
export class CreateCompanyDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  fiscal_id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  website?: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name_representative?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  phone_representative?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  address_representative?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email_representative?: string;

  @Field(() => CompanyType)
  @IsOptional()
  type: CompanyType;

  @Field(() => [EmployeeDto], { nullable: true })
  @IsOptional()
  @IsArray()
  @Type(() => CreateEmployeeDto)
  employees?: CreateEmployeeDto[];
}
