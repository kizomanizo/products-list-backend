"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ProductController {
    // Constructor to initialize any dependencies or setup
    constructor() {
        // Add any necessary initialization logic here
        // For example, initializing a database connection or other dependencies
    }
    all(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // tslint:disable-next-line:no-console
                console.log(req.path + " reached");
                res.status(200).send({
                    status: 200,
                    success: true,
                    message: "This is the root path for products",
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productName = req.body.name;
                const productPrice = req.body.price;
                const productQuantity = req.body.quantity;
                const adderName = req.query.name;
                res.status(201).json({
                    success: true,
                    type: "List",
                    title: "List Products",
                    message: `${productName + " has been added by " + adderName + "."}`,
                });
            }
            catch (error) {
                // tslint:disable-next-line:no-console
                console.log(req);
                next(error);
            }
        });
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map