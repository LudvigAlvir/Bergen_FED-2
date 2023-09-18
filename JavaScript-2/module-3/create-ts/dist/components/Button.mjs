export default function Button(text, type, onClick) {
    const button = document.createElement("button");
    button.classList.add("button", type);
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
}
