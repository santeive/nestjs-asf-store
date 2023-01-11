import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Corner store';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Nuevo metodo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /slash/';
  }
}
