import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';

import { CompanyService } from 'src/company/company.service';
import { CreateCompanyDto } from 'src/company/dto/create-company.dto';
import { CompanyDto } from 'src/company/dto/get-company.dto';
import { UpdateCompanyDto } from 'src/company/dto/update-company.dto';
import { CreateCompanyInput } from 'src/company/inputs/create-company.input';
import { UpdateCompanyInput } from 'src/company/inputs/update-company.input';

@Resolver()
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => [CompanyDto])
  async companies() {
    return this.companyService.getAllCompanies();
  }

  @Query(() => CreateCompanyDto)
  async company(@Args('_id', { type: () => ID }) _id: string) {
    return this.companyService.getOneCompany(_id);
  }

  @Mutation(() => CreateCompanyDto)
  async createCompany(@Args('input') input: CreateCompanyInput) {
    return this.companyService.createCompany(input);
  }

  @Mutation(() => UpdateCompanyDto)
  async updateCompany(
    @Args('_id', { type: () => ID }) _id: string,
    @Args('input') input: UpdateCompanyInput,
  ) {
    return this.companyService.updateCompany(_id, input);
  }

  @Mutation(() => CreateCompanyDto)
  async deleteCompany(@Args('_id') _id: string) {
    return this.companyService.deleteCompany(_id);
  }
}
