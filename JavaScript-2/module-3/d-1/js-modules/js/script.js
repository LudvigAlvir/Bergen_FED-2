import Button from "./components/Button.js";
import Card from "./components/Card.js";
function render() {
	const root = document.querySelector("#root");
	const button = Button("Click me", () => {
		console.log("trykket på knappen");
	});
	const card1 = Card(
		"Title",
		"This is the content of the primary card",
		"primary"
	);
	const card2 = Card(
		"Title",
		"This is the content of the warning card",
		"warning"
	);
	root.appendChild(button);
	root.appendChild(card1);
	root.appendChild(card2);
}

render();
