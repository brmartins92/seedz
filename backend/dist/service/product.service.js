"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../database/PrismaService");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProducts() {
        return this.prisma.choiceProduct.findMany();
    }
    async createProduct(data) {
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
        }
        else {
            return await this.prisma.choiceProduct.create({
                data,
            });
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map