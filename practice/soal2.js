const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("angka pertama:",function(b) {
rl.question("angka kedua:",function(c) {

let a = Number(b);
let l = Number(c);

let hasil = a * l;
console.log("hasilnya:",hasil);

rl.close();
});
});
