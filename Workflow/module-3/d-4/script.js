import "dotenv/config";

const number = process.env.test;

if (number == 10) {
	console.log("working");
} else {
	console.log("not working");
}
