const canvas = document.querySelector("#game");

const height = 600;
const width = 400;
canvas.height = height;
canvas.width = width;

const ctx = canvas.getContext("2d");
let score = 0;
const player = {
	x: 50,
	y: 50,
	width: 50,
	height: 50,
	speed: 1,
};

const enemy = {
	x: 200,
	y: 200,
	width: 50,
	height: 50,
};

setInterval(render, 20);

function render() {
	player.speed = player.speed + 1;
	player.y = player.y + player.speed;
	if (enemy.x < -100) {
		enemy.x = 500;
		enemy.y = Math.random() * height - enemy.height;
		score++;
		document.querySelector("#score").innerText = `score: ${score}`;
	}
	enemy.x -= score + 1;
	if (player.y > height - player.height) {
		player.y = height - player.height;
	}
	colissionCheck();

	ctx.clearRect(0, 0, width, height);
	ctx.fillStyle = "green";
	ctx.fillRect(player.x, player.y, player.width, player.height);
	ctx.fillStyle = "red";
	ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
}

function colissionCheck() {
	if (
		player.x + player.width > enemy.x &&
		player.y + player.height > enemy.y &&
		player.x < enemy.x + enemy.width &&
		player.y < enemy.y + enemy.height
	) {
		alert("lost");
		player.x = 50;
		player.y = 50;
		enemy.x = 200;
		enemy.y = 200;
		score = 0;
	}
}

window.addEventListener("keydown", (e) => {
	console.log(e.key);
	switch (e.key) {
		case "ArrowUp":
			if (player.y <= 0) {
				console.log("colission");
			} else {
				player.y -= 10;
				player.speed = -15;
			}

			break;

		case "ArrowDown":
			if (player.y >= height - player.height) {
				console.log("colission");
			} else {
				player.y += 10;
			}
			break;
		case "ArrowRight":
			if (player.x + player.width >= width) {
				console.log("collision");
			} else {
				player.x += 10;
			}

			break;
		case "ArrowLeft":
			if (player.x <= 0) {
				console.log("colission");
			} else {
				player.x -= 10;
			}

			break;
	}
});
