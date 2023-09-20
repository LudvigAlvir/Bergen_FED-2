/**
 * Button component
 * @param {string} text content of button
 * @param {function} onClick function that happens when you click button
 * @returns {HTMLButtonElement}
 * @example
 * const button = Button("Click me", () => {
 * console.log("trykket på knappen");
 * });
 */
export default function Button(text, onClick) {
	const button = document.createElement("button");
	button.textContent = text;
	button.addEventListener("click", onClick);
	return button;
}
