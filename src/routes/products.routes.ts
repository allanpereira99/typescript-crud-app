import { Router } from "express";
import ProductController from "../modules/products/controller/products.controller";
import { ProductRepository } from "../modules/products/repositories/products.repository";
import { ProductService } from "../modules/products/services/products.services";

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);
const productsRouter = Router();
productsRouter
  .route("/products")
  .post((req, res) => productController.createProduct(req, res))
  .get((req, res) => productController.getProducts(req, res))
  .patch((req,res)=>productController.patchProduct(req,res));
productsRouter
  .route("/products/:id")
  .get((req, res) => productController.getProductById(req, res));

export default productsRouter;
