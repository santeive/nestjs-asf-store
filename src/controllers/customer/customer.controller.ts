import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('customers')
export class CustomerController {
  /*
    Class controller for the Customers endpoint
    */
  @Get('')
  getCustomers() {
    return `All Customers`;
  }

  @Get(':customerId')
  getCustomer(@Param('customerId') customerId: string) {
    return `customer => ${customerId}`;
  }
}
