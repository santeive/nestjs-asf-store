import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  //ParseIntPipe
} from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    //const { limit, offset } = params; // deconstrucion
    /* return {
      message: `products: limit=> ${limit} offset=> ${offset}`,
    }; */
    return this.productsService.findAll();
  }

  // Las rutas no dinamicas van de primeras
  @Get('filter')
  getProductFilter() {
    return `Yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(+productId);
    //return `product ${productId}`;
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
    /* return {
      message: 'Accion de crear',
      payload,
    }; */
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete('id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
