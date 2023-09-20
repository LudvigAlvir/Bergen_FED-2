import Header from "./components/Header.js";
import Button from "./components/Button.js";
import Item from "./components/Item.js";
import Input from "./components/Input.js";

function render() {
	const root = document.querySelector("body");
	root.innerHTML = "";
	root.append(Header());
	const main = document.createElement("main");
	main.classList.add("main");
	const input = Input();
	main.append(input);
	main.append(
		Button("Add", () => {
			if (localStorage.getItem("list")) {
				const items = localStorage.getItem("list");
				const list = JSON.parse(items);
				list.push(input.value);
				localStorage.setItem("list", JSON.stringify(list));
				render();
			} else {
				localStorage.setItem("list", JSON.stringify([input.value]));
				render();
			}
		})
	);
	if (localStorage.getItem("list")) {
		const items = localStorage.getItem("list");
		const list = JSON.parse(items);
		const ul = document.createElement("ul");
		ul.classList.add("list");
		list.forEach((item, i) => {
			ul.append(
				Item(item),
				Button("Remove", () => {
					const list = JSON.parse(localStorage.getItem("list"));
					const newList = list.filter((item, index) => index !== i);
					console.log(i, list, newList);
					localStorage.setItem("list", JSON.stringify(newList));

					render();
				})
			);
		});
		main.append(ul);
	}
	root.append(main);
}

render();
