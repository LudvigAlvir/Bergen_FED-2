import Button from "./components/Button.mjs";
import Card from "./components/Card.mjs";
function load() {
	const root = document.querySelector("#root");

	const button = Button("Click me", "btn-primary", () => {
		console.log("Button clicked");
	});
	const card = Card("Card title", "Card content", "card-primary");
	root.appendChild(card);

	root.appendChild(button);
}
load();
