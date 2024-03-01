import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EmployeeService } from '../employee.service';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { CreateEmployeeInput } from '../inputs/create-employee.input';
import { UpdateEmployeeInput } from '../inputs/update-employee.input';
import { EmployeeDto } from '../dto/employee.dto';

@Resolver()
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [EmployeeDto])
  async employees() {
    return this.employeeService.getAllEmployees();
  }

  @Query(() => EmployeeDto)
  async employee(@Args('_id', { type: () => ID }) _id: string) {
    return this.employeeService.getOneEmployee(_id);
  }

  @Mutation(() => EmployeeDto)
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

  @Mutation(() => EmployeeDto)
  async deleteEmployee(@Args('_id') _id: string) {
    return this.employeeService.deleteEmployee(_id);
  }
}
