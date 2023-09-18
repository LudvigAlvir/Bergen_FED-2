/**
 * Example function
 * @param {string} text button text
 * @param {string} type button class
 * @param {function} onClick button click handler
 * @returns {HTMLButtonElement} button element
 * @example
 * const button = Button("Click me", "btn-primary", () => {
 * 	console.log("Button clicked");
 * });
 */
export default function Button(text, type, onClick) {
	const button = document.createElement("button");
	button.classList.add("button", type);
	button.textContent = text;
	button.addEventListener("click", onClick);
	return button;
}
