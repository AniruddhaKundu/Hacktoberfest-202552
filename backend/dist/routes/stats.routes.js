"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stats_controller_1 = require("../controllers/stats.controller");
const router = express_1.default.Router();
router.get("/api/stats", stats_controller_1.getStats);
exports.default = router;
//# sourceMappingURL=stats.routes.js.map