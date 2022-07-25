import { ChoiceProductDTO } from 'src/dto/choiceProduct.dto';
import { ProductService } from '../service/product.service';
export declare class ChoiceProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(): Promise<import(".prisma/client").ChoiceProduct[]>;
    createProduct(data: ChoiceProductDTO): Promise<import(".prisma/client").ChoiceProduct>;
}
