"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4010;
app.get('/', (_req, res) => {
    res.status(200).send({
        status: 200,
        success: true,
        message: "This is the root path for products"
    });
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("INFO: App listening on " + port);
});
//# sourceMappingURL=index.js.map