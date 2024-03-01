import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { IsString, IsOptional, IsEmail, IsEnum } from 'class-validator';
import { CompanyType } from '../company.schema';

registerEnumType(CompanyType, {
  name: 'CompanyType',
});

@ObjectType()
export class UpdateCompanyDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  fiscal_id?: string;

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

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

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

  @Field(() => CompanyType, { nullable: true })
  @IsOptional()
  @IsEnum(CompanyType)
  type?: CompanyType;
}
