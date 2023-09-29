const button = document.querySelector("button");

button.addEventListener("click", registerUser);

const user = {
	name: "ludvigtest232",
	email: "ludvigtest232@noroff.no",
	password: "my-password",
};
//registers users to the noroff social endpoints api
async function registerUser() {
	const res = await fetch(
		"https://api.noroff.dev/api/v1/social/auth/register",
		{
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}
	);
	const data = await res.json();
	console.log(data);
}
