export default function Button(
	text: string,
	type: string,
	onClick: () => void
) {
	const button = document.createElement("button");
	button.classList.add("button", type);
	button.textContent = text;
	button.addEventListener("click", onClick);
	return button;
}
