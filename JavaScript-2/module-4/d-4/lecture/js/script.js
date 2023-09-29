// getting a form from the html and setting an eventlistener on the "submit" event.
const formGet = document.querySelector("#form-get");
formGet.addEventListener("submit", (e) => {
	e.preventDefault(); //stops the form from "posting" and runs js instead.
	getUsers();
});
// ^^
const formPost = document.querySelector("#form-post");
formPost.addEventListener("submit", (e) => {
	e.preventDefault();
	postUser();
});
// ^^
const formPatch = document.querySelector("#form-patch");
formPatch.addEventListener("submit", (e) => {
	e.preventDefault();
	patchUser();
});

// Patch request
async function patchUser() {
	const id = document.querySelector("#input-id-patch").value;
	const name = document.querySelector("#input-name-patch").value;
	const content = document.querySelector("#input-content-patch").value;
	console.log(name, content);
	const res = await fetch("https://crud-examples.onrender.com/" + id, {
		method: "PATCH",
		headers: {
			"Content-Type": "Application/json",
		},
		body: JSON.stringify({
			name: name,
			content: content,
		}),
	});
	const data = await res.json();
	console.log(data);
}
//Post request
async function postUser() {
	const name = document.querySelector("#input-name").value;
	const content = document.querySelector("#input-content").value;
	console.log(name, content);
	const res = await fetch("https://crud-examples.onrender.com/", {
		method: "POST",
		headers: {
			"Content-Type": "Application/json",
		},
		body: JSON.stringify({
			name: name,
			content: content,
		}),
	});
	const data = await res.json();
	console.log(data);
}
//get request
async function getUsers() {
	const res = await fetch("https://crud-examples.onrender.com/");
	const data = await res.json();
	console.log(data);
	renderUsers(data);
}
// show users after get request
function renderUsers(data) {
	document.querySelector(".container").innerHTML = "";
	data.forEach((user) => {
		document.querySelector(".container").innerHTML += `
        <div>
            
            <p>${user.name}</p>

            <p>${user.content}</p>
            <a href="https://crud-examples.onrender.com/${user.id}">Comment</a>
        </div>
        `;
	});
}
//delete user, no html made for this function
async function deleteUser() {
	const id = document.querySelector("input-id-delete").value;
	const res = await fetch("https://crud-examples.onrender.com/" + id, {
		method: "DELETE",
		headers: {
			"Content-Type": "Application/json",
		},
	});
	const data = await res.json();
	console.log(data);
}
