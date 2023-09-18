export default function Card(title, content, type) {
    const card = document.createElement("div");
    card.classList.add("card", type);
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;
    const cardContent = document.createElement("p");
    cardContent.textContent = content;
    card.append(cardTitle);
    card.append(cardContent);
    return card;
}
