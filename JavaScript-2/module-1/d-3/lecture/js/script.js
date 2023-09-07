/* function print(input) {
	document.querySelector("h1").innerText = input;
}

let arr = ["hei", "på", "deg"];


let stringified = JSON.stringify(arr);
console.log(JSON.parse(stringified));
console.log(stringified);
 */
function loadTheme() {
	const theme = localStorage.getItem("theme");
	document.querySelector("body").classList.add(theme);
}
loadTheme();

document.querySelector("#dark").addEventListener("click", () => {
	const body = document.querySelector("body");
	body.classList.remove(localStorage.getItem("theme"));
	localStorage.setItem("theme", "dark");
	body.classList.add("dark");
});
document.querySelector("#green").addEventListener("click", () => {
	const body = document.querySelector("body");
	body.classList.remove(localStorage.getItem("theme"));
	localStorage.setItem("theme", "green");
	body.classList.add("green");
});
document.querySelector("#blue").addEventListener("click", () => {
	const body = document.querySelector("body");
	body.classList.remove(localStorage.getItem("theme"));
	localStorage.setItem("theme", "blue");
	body.classList.add("blue");
});
//hint for å få til
/* localStorage.setItem("mode", "dark"); // Setter verdien inn i local storage
localStorage.getItem("mode"); // out: dark
localStorage.removeItem("mode"); // sletter item
localStorage.clear(); // sletter ALT i local storage */
