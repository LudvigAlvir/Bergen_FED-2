// create a navbar using create element

export default function Nav() {
	const nav = document.createElement("nav");
	nav.classList.add("nav");
	nav.innerHTML = `
        <a href="#" class="nav__link">Home</a>
        <a href="#" class="nav__link">About</a>
        <a href="#" class="nav__link">Contacts</a>
    `;
	return nav;
}
