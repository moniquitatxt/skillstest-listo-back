import { ObjectType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsEmail } from 'class-validator';

@ObjectType()
export class UpdateCompanyDto {
  @Field({ nullable: true }) // Indica que el campo es opcional en GraphQL
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true }) // Indica que el campo es opcional en GraphQL
  @IsOptional()
  @IsString()
  fiscal_id?: string;

  @Field({ nullable: true }) // Indica que el campo es opcional en GraphQL
  @IsOptional()
  @IsString()
  address?: string;

  @Field({ nullable: true }) // Indica que el campo es opcional en GraphQL
  @IsOptional()
  @IsString()
  phone?: string;

  @Field({ nullable: true }) // Indica que el campo es opcional en GraphQL
  @IsOptional()
  @IsString()
  website?: string;

  @Field({ nullable: true }) // Indica que el campo es opcional en GraphQL
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true }) // Indica que el campo es opcional en GraphQL
  @IsOptional()
  @IsString()
  name_representative?: string;

  @Field({ nullable: true }) // Indica que el campo es opcional en GraphQL
  @IsOptional()
  @IsString()
  phone_representative?: string;

  @Field({ nullable: true }) // Indica que el campo es opcional en GraphQL
  @IsOptional()
  @IsString()
  address_representative?: string;

  @Field({ nullable: true }) // Indica que el campo es opcional en GraphQL
  @IsOptional()
  @IsEmail()
  email_representative?: string;
}
