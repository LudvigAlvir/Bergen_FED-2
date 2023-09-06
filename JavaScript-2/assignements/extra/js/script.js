function loadProgress() {
	let progString = localStorage.getItem("progress");

	if (progString) {
		let progress = JSON.parse(progString);
		let boxes = document.querySelectorAll("input[type=checkbox]");
		for (let i = 0; i < boxes.length; i++) {
			if (progress.includes(i)) boxes[i].checked = true;
		}
	}
}
loadProgress();

let boxes = document.querySelectorAll("input[type=checkbox]");

boxes.forEach(function (box) {
	box.addEventListener("click", function () {
		let arr = [];
		for (let i = 0; i < boxes.length; i++) {
			if (boxes[i].checked) arr.push(i);
		}
		localStorage.setItem("progress", JSON.stringify(arr));
	});
});
