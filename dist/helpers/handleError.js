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
exports.handleError = exports.errorLogger = void 0;
const errorLogger_1 = require("./errorLogger");
function errorLogger(err) {
    return __awaiter(this, void 0, void 0, function* () {
        errorLogger_1.logger.info("An error has occured");
    });
}
exports.errorLogger = errorLogger;
function handleError(err, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        yield errorLogger(err);
        res.status(err.statusCode || 500).json({
            success: false,
            type: "Error" + " " + err.statusCode,
            title: "Error thrown!",
            message: err.message,
            // stack: err.stack,
        });
    });
}
exports.handleError = handleError;
//# sourceMappingURL=handleError.js.map