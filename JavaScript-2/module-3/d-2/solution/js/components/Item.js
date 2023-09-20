// create list item

export default function Item(text) {
	const item = document.createElement("p");
	item.classList.add("item");
	item.textContent = text;
	return item;
}
