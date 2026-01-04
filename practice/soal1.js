const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("masukan nama:",function(nama) {


console.log("nama kamu:",nama);

rl.close();
});
