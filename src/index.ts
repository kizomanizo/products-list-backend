import express, { Request, Response } from "express";
import ProductRouter from "./routes/productRouter";
import ErrorHandler from "./helpers/errorHandler";

class AppServer {
  private app: express.Application;
  private port: number | string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddleware(): void {
    this.app.disable("x-powered-by");
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private initializeRoutes(): void {
    this.app.use("/api/v1/products", ProductRouter.getRouter());
  }

  private initializeErrorHandling(): void {
    // Catch-all error handler middleware
    const errorHandlerInstance = new ErrorHandler();

    this.app.use((err: any, req: Request, res: Response, next: any) => {
      errorHandlerInstance.handleError(err, req, res, next);
    });
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log("INFO: App listening on " + this.port);
    });
  }
}

export default AppServer;

const appServer = new AppServer();
appServer.start();
