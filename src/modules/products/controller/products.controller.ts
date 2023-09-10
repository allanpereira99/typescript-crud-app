import { Request, Response } from "express";
import { ProductService } from "../services/products.services";

export default class ProductController {
  constructor(private readonly productService: ProductService) {}
  async createProduct(req: Request, res: Response) {
    const product = await this.productService.createProduct(req.body);
    res.json(product);
  }
  async getProducts(req: Request, res: Response) {
    const products = await this.productService.getProducts();
    res.json(products);
  }
  async getProductById(req: Request, res: Response) {
    const product = await this.productService.getProductById(
      Number(req.params.id)
    );
    res.json(product);
  }
  async patchProduct(req: Request, res: Response) {
    const product = await this.productService.updateProduct(req.body);
    res.json(product);
  }
}
