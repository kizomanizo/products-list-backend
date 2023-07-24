import { Router } from "express";
import { IRouter } from "../ts/interfaces/router.interfaces"; // Import the interface
import ProductController from "../controllers/productController"; // Import the controller

class ProductRouter implements IRouter {
  public router: Router;

  constructor() {
    // Initializing the router
    this.router = Router();

    // Defining routes
    this.router.route("/").get(ProductController.getProducts);
    this.router.post("/", ProductController.createProduct);
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default new ProductRouter();
