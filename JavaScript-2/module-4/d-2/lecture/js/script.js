const server = {
	// eksempeldata
	users: [
		{ id: 1, name: "test", content: "testcontent" },
		{ id: 2, name: "test2", content: "testcontent2" },
		{ id: 3, name: "test3", content: "testcontent3" },
	],
	// får tak i user med id=request id, eller returnerer alle users i this.users
	get: function (request) {
		if (request) {
			for (const user of this.users) {
				if (user.id == request.id) {
					return user;
				}
			}
			return {
				status: 400,
				message: "user not found",
			};
		}
		return this.users;
	},
	//legger til en ny "user" i "users"
	post: function (request) {
		this.users.push({
			id: this.users[this.users.length - 1].id + 1,
			name: request.name,
			content: request.content,
		});
		return `${request.name} added with ID: ${
			this.users[this.users.length - 1].id
		}`;
	},
	//endrer en verdi hvis den finnes
	patch: function (request) {
		for (const user of this.users) {
			if (user.id === request.id) {
				user.name = request.name;
				user.content = request.content;
				return { status: 200, message: "User updated" };
			}
		}

		return { status: 400, message: "User not found" };
	},
	// Lag en PUT metode, den skal lage en ny bruker dersom id ikke
	// finnes, eller oppdatere user med den iden hvis den finnes

	// "fasit" fra timen
	put: function (request) {
		for (const user of this.users) {
			if (user.id === request.id) {
				user.name = request.name;
				user.content = request.content;
				return { status: 200, message: "User updated" };
			}
		}
		this.users.push({
			id: request.id,
			name: request.name,
			content: request.content,
		});
		return { status: 201, message: "User created" };
	},
};
//får tak i user med id 1
console.log(server.get({ id: 1 }));
//endrer bruker med id 1
console.log(
	server.patch({ id: 1, name: "Patch", content: "From patch request" })
);
// Lager ny bruker med id 6
console.log(server.put({ id: 6, name: "Put", content: "From put request" }));
// legger til en ny bruker med i basert på hva som ligger på serveren
console.log(server.post({ name: "Post", content: "From post request" }));
// får tak i alle brukere
console.log(server.get());
