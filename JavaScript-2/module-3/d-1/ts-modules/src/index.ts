import Card from "./components/Card.js";

function render() {
	const root = document.querySelector("#root");
	const card = Card("Title", "Content", "primary");
	root.appendChild(card);
}

render();
