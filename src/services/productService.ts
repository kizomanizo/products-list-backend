import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import response from "../helpers/apiHelper";

const prisma = new PrismaClient();

class ProductService {
  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const newProduct = await prisma.product.create({
        data: {
          uuid: crypto.randomUUID(),
          name: req.body.name,
          cost: req.body.cost,
          price: req.body.cost * 1.3,
          isActive: false,
          createdBy: "Kizito S.M",
        },
      });
      return response.api(req, res, 201, newProduct);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await prisma.product.findMany();
      return response.api(req, res, 200, products);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

export default new ProductService();
