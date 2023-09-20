export default function Nav() {
	const nav = document.createElement("nav");
	nav.classList.add("nav");
	const navLink = document.createElement("a");
	navLink.classList.add("nav__link");
	navLink.innerText = "About";
	nav.append(navLink);
	return nav;
}
