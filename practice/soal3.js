const readline = require("readline");
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("masukan panjang:",function(panjang) {
rl.question("masukan lebar:",function(lebar){

let P = Number(panjang);
let L = Number(lebar);
let hasil = P * L ;
 console.log("hasilnya:",hasil);

rl.close();
});
});
