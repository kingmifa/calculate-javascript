const readline = require("readline");
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

function tanya() {
rl.question("masukan panjang:",function(panjang) {
rl.question("masukan lebar:",function(lebar){

let p = Number(panjang);
let l = Number(lebar);

if (isNaN(p) || isNaN(l)) {
      console.log("Input tidak valid");
}
else {
let hasil = p * l ;
 console.log("hasilnya:",hasil);
}

rl.question("apakah mau ulang y/n?",function(jawab) {
jawab = jawab.toLowerCase();

  if (jawab === "y") {
          tanya(); // ulang
        } else {
          console.log("Program selesai");
          rl.close();
        }
      });

    });
  });
}

tanya(); // mulai program

