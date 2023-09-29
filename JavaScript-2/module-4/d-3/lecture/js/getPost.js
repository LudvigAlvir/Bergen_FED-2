const button = document.querySelector("button");
button.addEventListener("click", getPosts);
const url = "https://api.noroff.dev/api/v1/social/posts";

//example get request for ca
async function getPosts() {
	const token = localStorage.getItem("token");
	const res = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`, // what we use for authentication
		},
	});
	const data = await res.json();
	console.log(data);
}
