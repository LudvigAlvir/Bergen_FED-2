import Header from "./components/Header.js";
import Button from "./components/Button.js";
import Item from "./components/Item.js";
import Input from "./components/Input.js";

function render() {
	const root = document.querySelector("#root");
	root.innerHTML = "";
	root.append(Header());
	const main = document.createElement("main");
	main.classList.add("main");
	const title = document.createElement("h2");
	title.innerText = "A simple Todo List";
	main.append(title);
	const form = document.createElement("form");
	const input = Input();

	form.append(input);
	form.append(
		Button("Add", "primary", () => {
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

	main.append(form);
	if (localStorage.getItem("list")) {
		const items = localStorage.getItem("list");
		const list = JSON.parse(items);
		const container = document.createElement("div");
		container.classList.add("list");
		list.forEach((item, i) => {
			container.append(
				Item(item),
				Button("Remove", "danger", () => {
					const list = JSON.parse(localStorage.getItem("list"));
					const newList = list.filter((item, index) => index !== i);
					console.log(i, list, newList);
					localStorage.setItem("list", JSON.stringify(newList));

					render();
				}),
				document.createElement("hr")
			);
		});
		main.append(container);
	}
	root.append(main);
}

render();

const testArr = [1, 2, 3, 4, 5, 5, 12];
