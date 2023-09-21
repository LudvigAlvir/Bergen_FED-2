document.querySelector("button").addEventListener("click", () => {
	if (localStorage.getItem("list")) {
		const arr = JSON.parse(localStorage.getItem("list"));
		arr.push(document.querySelector("input").value);
		localStorage.setItem("list", JSON.stringify(arr));
	} else {
		localStorage.setItem(
			"list",
			JSON.stringify([document.querySelector("input").value])
		);
	}
	render();
});

function render() {
	const container = document.querySelector(".list");
	container.innerHTML = "";

	if (localStorage.getItem("list")) {
		const arr = JSON.parse(localStorage.getItem("list"));
		arr.forEach((item, index) => {
			const p = document.createElement("p");
			p.innerText = item;
			const btn = document.createElement("button");
			btn.innerText = "Delete";
			btn.addEventListener("click", () => {
				console.log(index);
				let list = JSON.parse(localStorage.getItem("list"));
				let newList = list.filter((element, i) => {
					if (i === index) {
						return false;
					} else {
						return true;
					}
				});
				localStorage.setItem("list", JSON.stringify(newList));
				render();
			});
			container.append(p, btn);
		});
	}
}

render();
