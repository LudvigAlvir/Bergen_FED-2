/**
 *
 * @param {string} text Text inside button
 * @param {string} style primary|danger|warning|secondary
 * @param {function} onClick
 * @returns
 * @example
 * const button = Button("Click", "primary", ()=>{
 * console.log("hei")
 * })
 */
export default function Button(text, style, onClick) {
	const button = document.createElement("button");
	button.classList.add("button", style);
	button.textContent = text;
	button.addEventListener("click", onClick);
	return button;
}
