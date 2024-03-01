import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EmployeeDto {
  @Field({ nullable: true })
  _id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  age: number;
}
