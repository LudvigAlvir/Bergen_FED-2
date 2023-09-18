const state = {
	count: 0,
	log: [],
	theme: "light",

	increment: function increment() {
		this.count += 1;
	},
	getCount: function getCount() {
		return this.count;
	},
	getLog: function getLog() {
		return this.log;
	},
	logPush: function log(message) {
		this.log.push(message);
	},
	getTheme: function getTheme() {
		return this.theme;
	},
	setTheme: function setTheme(theme) {
		this.theme = theme;
	},
};

function load() {
	const theme = state.getTheme();
	const root = document.querySelector("body");
	const button = Button("increment", () => {
		console.log("push");
		state.logPush(`Button clicked`);
		state.increment();
	});

	root.append(button);

	document.body.className = theme;
}

load();

function test(test1, test2, test3) {
	console.log(test1, test2, test3);
}
test(1, 2);
