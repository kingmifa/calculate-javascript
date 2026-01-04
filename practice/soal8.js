const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
input:process.stdin,
output:process.stdout
});

function ask(question){
return new Promise(resolve => {
rl.question(question, answer => resolve(answer));
});
}
function inputValid(p,l){
return !isNaN(p) && !isNaN(l) && p > 0 && l > 0;
}
function area(p,l){
return p*l;
}
function perimeter(p,l){
return 2*(p+l);
}
//save file
function saveToFile(text){
fs.appendFileSync("history.txt",text + "\n");
}

//main async
async function main(){
while (true){
console.log("\======Menu======/");
console.log("1.find area");
console.log("2.find perimeter");

const menu = await ask("choose menu (1/2):");
if (menu !== "1" && menu !== "2"){
console.log("invalid menu");
continue;
}

const length = await ask("enter length:");
const width = await ask("enter width:");

const p =Number(length);
const l =Number(width);

if (!inputValid(p,l)) {
console.log("invalid input");
continue;
}
const result = menu === "1"
? area(p,l)
: perimeter(p,l);

const type = menu === "1" ? "area" : "perimeter";
const now = new Date().toLocaleString();

const log = `${now} | ${type} |${p} × ${l} = ${result}`;

console.log("result:",result);
saveToFile(log);

const repeat = (await ask("Repeat(y/n)?:")).toLowerCase();
if (repeat !== "y") {
console.log("program finnished :)");
break;
}
}
rl.close();
}
main();
