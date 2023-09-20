// create a navbar using create element

export default function Nav() {
	const nav = document.createElement("nav");
	nav.classList.add("nav");
	nav.innerHTML = `
        <a href="#" class="nav__link">About</a>
       
    `;
	return nav;
}
