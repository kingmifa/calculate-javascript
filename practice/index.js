// Project dasar Node.js
//punya ilham_faizul tentang prmrcahan persegi panjang

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("masukan panjang:",function(panjang) {
rl.question("masukan lebar:",function(lebar) {

let P = Number(panjang);
let L = Number(lebar);
let Luas = P * L ;

console.log("luas:",Luas);

rl.close();
});
});

