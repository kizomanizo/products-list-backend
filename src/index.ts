import Express, { Request, Response } from "express";
import ProductRouter from "./routes/productRouter";
import { handleError } from "./helpers/handleError";

const app = Express();
const port = 4010;

app.disable("x-powered-by");
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use("/api/v1/products", ProductRouter.getRouter());

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log("INFO: App listening on " + port);
});

app.use((err: Error, req: Request, res: Response, next: any) => {
  handleError(err, res, next);
});

module.exports = app;
