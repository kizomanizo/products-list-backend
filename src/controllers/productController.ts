import { Request, Response } from "express";

class ProductController {
  constructor() {
    // Initialization logic
    // For example, initializing a database connection or other dependencies
  }

  public async all(req: Request, res: Response, next: any) {
    try {
      // tslint:disable-next-line:no-console
      console.log(req.path + " reached");
      res.status(200).send({
        status: 200,
        success: true,
        message: "This is the root path for products",
      });
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: any) {
    try {
      const productName = req.body.name;
      const productPrice = req.body.price;
      const productQuantity = req.body.quantity;
      const adderName = req.query.user;
      res.status(201).json({
        success: true,
        type: "List",
        title: "List Products",
        message: `${productName + " has been added by " + adderName + "."}`,
      });
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(req);
      next(error);
    }
  }
}

export default new ProductController();
