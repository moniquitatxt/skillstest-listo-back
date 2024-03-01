import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EmployeeService } from '../employee.service';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { CreateEmployeeInput } from '../inputs/create-employee.input';
import { UpdateEmployeeInput } from '../inputs/update-employee.input';

@Resolver()
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [CreateEmployeeDto])
  async employees() {
    return this.employeeService.getAllEmployees();
  }

  @Query(() => CreateEmployeeDto)
  async employee(@Args('_id', { type: () => ID }) _id: string) {
    return this.employeeService.getOneEmployee(_id);
  }

  @Mutation(() => CreateEmployeeDto)
  async createEmployee(@Args('input') input: CreateEmployeeInput) {
    return this.employeeService.createEmployee(input);
  }

  @Mutation(() => UpdateEmployeeDto)
  async updateEmployee(
    @Args('_id', { type: () => ID }) _id: string,
    @Args('input') input: UpdateEmployeeInput,
  ) {
    return this.employeeService.updateEmployee(_id, input);
  }

  @Mutation(() => CreateEmployeeDto)
  async deleteEmployee(@Args('_id') _id: string) {
    return this.employeeService.deleteEmployee(_id);
  }
}
