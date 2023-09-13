const c = document.querySelector("#test");
const ctx = c.getContext("2d");

const width = c.width;
const height = c.height;
console.time("draw");
for (let i = 0; i < c.width; i += 2) {
	for (let j = 0; j < c.height; j += 2) {
		ctx.fillStyle = `rgb(${i / 2}, ${j / 2}, 250)`;
		ctx.fillRect(i, j, 4, 4);
	}
}
console.timeEnd("draw");
