"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_js_1 = __importDefault(require("./components/Card.js"));
function render() {
    const root = document.querySelector("#root");
    const card = (0, Card_js_1.default)("Title", "Content", "primary");
    root.appendChild(card);
}
render();
