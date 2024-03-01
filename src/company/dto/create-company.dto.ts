import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsOptional, IsEmail } from 'class-validator';

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
}
