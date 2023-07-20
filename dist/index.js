"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRouter_1 = __importDefault(require("./routes/productRouter"));
const handleError_1 = require("./helpers/handleError");
const app = (0, express_1.default)();
const port = 4010;
app.disable("x-powered-by");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api/v1/products", productRouter_1.default.getRouter());
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("INFO: App listening on " + port);
});
app.use((err, req, res, next) => {
    (0, handleError_1.handleError)(err, res, next);
});
module.exports = app;
//# sourceMappingURL=index.js.map