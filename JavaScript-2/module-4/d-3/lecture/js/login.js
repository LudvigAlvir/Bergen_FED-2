const button = document.querySelector("button");

button.addEventListener("click", login);

const user = {
	email: "ludvigtest232@noroff.no",
	password: "my-password",
};
const url = "https://api.noroff.dev/api/v1/social/auth/login";
async function login() {
	const res = await fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
	const data = await res.json();
	console.log(data);
	localStorage.setItem("token", data.accessToken); //sets it so we can send
	//get requests later.
}
