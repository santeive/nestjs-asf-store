import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';


@Controller('brands')
export class BrandController {
  /*
  Class controller for the brand endpoint
  */
  @Get('')
  getBrands() {
    return `All brands`;
  }

  @Get(':brandId')
  @HttpCode(HttpStatus.ACCEPTED)
  getBrand(@Param('brandId') brandId: string) {
    return {
      message: `brand => ${brandId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create brand',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
