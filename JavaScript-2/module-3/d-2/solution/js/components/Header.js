import Nav from "./Nav.js";

export default function Header() {
	const header = document.createElement("header");
	header.classList.add("header");
	header.innerHTML = `
        <h1 class="header__title">My App</h1>
    `;
	header.append(Nav());
	return header;
}
