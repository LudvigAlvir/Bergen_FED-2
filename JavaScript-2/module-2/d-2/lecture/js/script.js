async function getPosts() {
	const res = await fetch("./data/data.json");
	const data = await res.json();
	/* filterByUser(data, 1); */
	return data;
}

async function filterByCategory(filterValue) {
	const posts = await getPosts();
	const filteredPosts = posts.filter((post) => {
		if (post.category === filterValue) {
			return true;
		} else {
			return false;
		}
	});
	createPosts(filteredPosts);
}

async function filterByUser(filterValue) {
	const posts = await getPosts();
	const filteredPosts = posts.filter((post) => post.author_id === filterValue);
	createPosts(filteredPosts);
}

function createPosts(posts) {
	document.querySelector(".posts").innerHTML = "";
	posts.forEach((post) => {
		document.querySelector(".posts").innerHTML += `
        <div class="post">
            <h2>${post.author}</h2>
            <p>${post.content}</p>
        
        </div>
        `;
	});
}
document.querySelector("#category-button").addEventListener("click", (e) => {
	e.preventDefault();
	const value = document.querySelector("#category").value;
	filterByCategory(value);
});

document.querySelector("#user-button").addEventListener("click", (e) => {
	e.preventDefault();
	const value = Number(document.querySelector("#user-id").value);
	filterByUser(value);
});
