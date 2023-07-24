import { Request, Response, NextFunction } from "express";
import Service from "../services/productService";

class ProductController {
  constructor() {
    // Initialization logic
    // For example, initializing a database connection or other dependencies
  }

  public async getProducts(req: Request, res: Response, next: NextFunction) {
    await Service.getProducts(req, res, next);
  }

  public async createProduct(req: Request, res: Response, next: NextFunction) {
    await Service.createProduct(req, res, next);
  }
}

export default new ProductController();
