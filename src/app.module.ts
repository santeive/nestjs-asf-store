import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { UserController } from './controllers/user/user.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { ProductsService } from './services/products/products.service';

@Module({
  imports: [],
  // Controllers
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UserController,
    CustomerController,
    BrandController,
  ],
  // Services
  providers: [AppService, ProductsService],
})
export class AppModule {}
