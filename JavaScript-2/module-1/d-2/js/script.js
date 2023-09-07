//få tak i verdier fra html
const nrr1 = document.querySelector("#nr1").value;
const nrr2 = document.querySelector("#nr2").value;
//eksempel på parsing vs casting
let nr1 = "10hdsh";
let nr2 = "15JH";
console.log(parseInt(nr1) + Number(nr2));

//onclick for første knapp i html
document.querySelector("button").onclick = () => {
	console.log("hei");
};
//eventlistener for første knapp i html
document.querySelector("button").addEventListener("click", (event) => {
	console.log(event);
});
//lytte etter alle museklikk
document.addEventListener("click", (event) => {
	console.log(event);
});
//lytte etter alle tastetrykk
document.addEventListener("keydown", (event) => {
	console.log(event);
});

//eksempel array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*Hvis vi ikke vil returnere verdier*/
arr.forEach((item) => {
	if (item > 2) {
		console.log(item);
	}
});

/*
hvis vi vil returnere verdier
*/
const newArr = arr.map((item) => {
	if (item > 2) {
		return item;
	}
});

/* while loop eksempel */
let loopi = 0;
while (loopi < arr.length) {
	loopi++;
}

/*Kan bruke  break	continue 	return */
for (let i = 0; i < arr.length; i++) {}

for (index in arr) {
	console.log(arr[index]);
}
for (value of arr) {
	console.log(value);
}

/*
for loop med array eksempel = [1, 2, 3, 4, 5, 6, 7, 8, 9];
break når tallet er større enn 7
continue hvis tallet er delelig på 2
return hvis verdien ikke er et tall
log alle andre verdier

*/

function testfunc(arr) {
	//Løsning med vanlig loop
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 7) {
			break;
		} else if (arr[i] % 2 === 0) {
			continue;
		} else if (typeof arr[i] !== "number") {
			return;
		} else {
			console.log(arr[i]);
		}
	}
	//løsning med for of loop
	for (nr of arr) {
		if (nr >= 7) {
			break;
		} else if (nr % 2 === 0) {
			continue;
		} else if (typeof nr !== "number") {
			return;
		} else {
			console.log(nr);
		}
	}
}

testfunc([4, 3, , 1, 5, 2, 2, 6, 9, 4, 3]);
