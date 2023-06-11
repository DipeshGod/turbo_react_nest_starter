import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyService } from './comapany.service';

@Controller('/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async createCompany(@Body() body: any) {
    console.log(body);
    return this.companyService.createCompany(body);
  }
}
