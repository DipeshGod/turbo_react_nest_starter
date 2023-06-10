import { Controller, Get } from '@nestjs/common';
import { CompanyService } from './comapany.service';

@Controller('/user')
export class CompanyController {
  constructor(private readonly appService: CompanyService) {}
}
