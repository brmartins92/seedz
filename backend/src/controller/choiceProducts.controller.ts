import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChoiceProductDTO } from 'src/dto/choiceProduct.dto';
import { ProductService } from '../service/product.service';

@Controller()
export class ChoiceProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/choiceProducts')
  async getProducts() {
    const prod = await this.productService.getProducts();
    return prod;
  }

  @Post('/choiceProducts')
  async createProduct(@Body() data: ChoiceProductDTO) {
    return this.productService.createProduct(data);
  }
}
