// create list item

export default function Item(text) {
	const item = document.createElement("li");
	item.classList.add("item");
	item.textContent = text;
	return item;
}
