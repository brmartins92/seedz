import { PrismaService } from 'src/database/PrismaService';
interface IChoiceProduct {
    name: string;
    quant: number;
}
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getProducts(): Promise<import(".prisma/client").ChoiceProduct[]>;
    createProduct(data: IChoiceProduct): Promise<import(".prisma/client").ChoiceProduct>;
}
export {};
