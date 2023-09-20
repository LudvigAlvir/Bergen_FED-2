export default function Button(text, style, onClick) {
	const button = document.createElement("button");
	button.classList.add("button", style);
	button.textContent = text;
	button.addEventListener("click", onClick);
	return button;
}
