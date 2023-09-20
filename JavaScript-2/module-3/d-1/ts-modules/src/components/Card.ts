type Style = "primary" | "secondary" | "warning";

export default function Card(title: string, content: string, style: Style) {
	const card: HTMLDivElement = document.createElement("div");
	const cardTitle: HTMLHeadingElement = document.createElement("h2");
	const cardContent: HTMLParagraphElement = document.createElement("p");
	cardTitle.textContent = title;
	cardContent.textContent = content;
	card.classList.add("card", style);
	card.append(cardTitle, cardContent);

	return card;
}
