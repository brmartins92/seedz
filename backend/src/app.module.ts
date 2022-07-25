import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { ChoiceProductController } from './controller/choiceProducts.controller';
import { PrismaService } from './database/PrismaService';
import { AppService } from './service/app.service';
import { ProductService } from './service/product.service';

@Module({
  imports: [],
  controllers: [AppController, ChoiceProductController],
  providers: [AppService, ProductService, PrismaService],
})
export class AppModule {}
