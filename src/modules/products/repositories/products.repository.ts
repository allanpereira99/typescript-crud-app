import { CreateProductDto, Product } from "../dtos/create-products.dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class ProductRepository {
  async create(product: CreateProductDto): Promise<Product> {
    const newProduct = await prisma.product.create({ data: { ...product } });
    return newProduct;
  }
  async findAll(): Promise<Product[]> {
    const product = await prisma.product.findMany();
    return product;
  }
  async findById(id: number): Promise<Product | null> {
    return (await prisma.product.findUnique({ where: { id: id } })) || null;
  }
}
