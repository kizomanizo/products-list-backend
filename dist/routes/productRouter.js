"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
class ProductRouter {
    constructor() {
        // Initializing the router
        this.router = (0, express_1.Router)();
        // Defining routes
        this.router.route("/").get(productController_1.default.all);
        this.router.post("/", productController_1.default.create);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = new ProductRouter();
//# sourceMappingURL=productRouter.js.map