import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CompanyType } from '../company.schema';
import { CreateEmployeeDto } from '../employee/dto/create-employee.dto';
import { Type } from 'class-transformer';

registerEnumType(CompanyType, {
  name: 'CompanyType',
});

@ObjectType()
export class CompanyDto {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  fiscal_id: string;

  @Field()
  address?: string;

  @Field()
  phone?: string;

  @Field()
  website?: string;

  @Field()
  email: string;

  @Field()
  name_representative?: string;

  @Field()
  phone_representative?: string;

  @Field()
  address_representative?: string;

  @Field()
  email_representative?: string;

  @Field(() => CompanyType)
  type: CompanyType;

  @Field(() => [CreateEmployeeDto], { nullable: true })
  @Type(() => CreateEmployeeDto)
  employees?: CreateEmployeeDto[];
}
