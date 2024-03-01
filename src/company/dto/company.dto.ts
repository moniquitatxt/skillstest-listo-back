import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CompanyType } from '../company.schema';
import { Type } from 'class-transformer';
import { EmployeeDto } from '../employee/dto/employee.dto';

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

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  website?: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  name_representative?: string;

  @Field({ nullable: true })
  phone_representative?: string;

  @Field({ nullable: true })
  address_representative?: string;

  @Field({ nullable: true })
  email_representative?: string;

  @Field(() => CompanyType)
  type: CompanyType;

  @Field(() => [EmployeeDto], { nullable: true })
  @Type(() => EmployeeDto)
  employees?: EmployeeDto[];
}
