"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Card(title, content, style) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardContent = document.createElement("p");
    cardTitle.textContent = title;
    cardContent.textContent = content;
    card.classList.add("card", style);
    card.append(cardTitle, cardContent);
    return card;
}
exports.default = Card;
