import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateEmployeeInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field()
  @IsString()
  phone: string;

  @Field(() => Int)
  @IsNotEmpty()
  age: number;

  @Field()
  @IsNotEmpty()
  companyId: string;
}
