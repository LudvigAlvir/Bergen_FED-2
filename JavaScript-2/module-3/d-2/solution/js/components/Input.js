export default function Input() {
	const input = document.createElement("input");
	input.classList.add("input");
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", "Enter something to do");
	return input;
}
