import { CreateProductDto } from "../dtos/create-products.dto";
import { ProductRepository } from "../repositories/products.repository";

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async createProduct(createUserDto: CreateProductDto) {
    return await this.productRepository.create(createUserDto);
  }
  async getProducts() {
    return await this.productRepository.findAll();
  }
  async getProductById(id: number) {
    return await this.productRepository.findById(id);
  }
}
