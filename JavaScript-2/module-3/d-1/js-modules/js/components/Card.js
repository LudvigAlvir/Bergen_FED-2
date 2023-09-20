//lag funksjon og jsdocs for å lage ett kort

/**
 * Card component
 * @param {string} title
 * @param {string} content
 * @param {string} style
 * @returns
 * @example
 * const card = Card("Title", "Content", "primary")
 */

export default function Card(title, content, style) {
	const card = document.createElement("div");
	const cardTitle = document.createElement("h2");
	const cardContent = document.createElement("p");
	cardTitle.textContent = title;
	cardContent.textContent = content;
	card.classList.add("card", style);
	card.appendChild(cardTitle);
	card.appendChild(cardContent);
	return card;
}
