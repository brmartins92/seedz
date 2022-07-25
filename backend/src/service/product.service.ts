import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

interface IChoiceProduct {
  name: string;
  quant: number;
}

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts() {
    return this.prisma.choiceProduct.findMany();
  }

  async createProduct(data: IChoiceProduct) {
    data.quant = 1;

    const existChoiceProduct = await this.prisma.choiceProduct.findFirst({
      where: {
        name: data.name,
      },
    });
    if (existChoiceProduct) {
      data.quant = data.quant + existChoiceProduct.quant;
      return await this.prisma.choiceProduct.update({
        data,
        where: {
          id: existChoiceProduct.id,
        },
      });
    } else {
      return await this.prisma.choiceProduct.create({
        data,
      });
    }
  }
}
