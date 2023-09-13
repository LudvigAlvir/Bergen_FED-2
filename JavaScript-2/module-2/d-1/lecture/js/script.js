const person = {
	name: "ola",
	age: 20,
	gender: "male",
};

const { name, age, gender } = person;

console.log("name: ", name, "age: ", age, "gender: ", gender);

// fyll inn p elementet med den infoen, bruk ${} notation

document.querySelector("p").innerText = `
name: ${name} age: ${age} gender: ${gender}
`;

const arr = ["banan", "eple", "appelsin"];
const arr2 = ["druer", "jordbær", "nøtter"];
const [frukt, , frukt3] = arr;

console.log(frukt, frukt3);

const lagtSammen = [...arr, ...arr2];

const set = new Set();

set.add(1);
set.add(2);
set.add(2);
set.add(3);

console.log(set);
console.log(set.has(2)); // True
console.log(set.has(4)); // False
set.delete(3); // set = 1, 2

const map = new Map();
map.set(1, "a");
map.set("b", 2);
map.set("c", 3);
map.delete("c"); // map = {a, 1}, {b, 2}
