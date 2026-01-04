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
//show history
function showHistory(){
if(!fs.existsSync("history.txt")){
console.log("no history found!");
return;
}
const data = fs.readFileSync("history.txt","utf-8");
console.log("\n====HISTORY====");
console.log(data);
}
//svae json
function saveToJson(entry) {
  let data = [];

  if (fs.existsSync("history.json")) {
    data = JSON.parse(fs.readFileSync("history.json", "utf-8"));
  }

  data.push(entry);
  fs.writeFileSync("history.json", JSON.stringify(data, null, 2));
}
//main async
async function main(){
while (true){
console.log("\======Menu======/");
console.log("1.find area");
console.log("2.find perimeter");
console.log("3.show history");
console.log("4.exit");
const menu = await ask("choose menu (1/2/3/4):");
if (!["1","2","3","4"].includes(menu)){
console.log("invalid menu");
continue;
}
if (menu === "3") {
  showHistory();
  continue;
}
if (menu === "4") {
  const confirm = (await ask("Are you sure you want to leave? (y/n): "))
    .toLowerCase();

  if (confirm === "y") {
    console.log("Program exited. Goodbye 👋");
    break; // keluar dari while
  } else {
    continue; // balik ke menu
  }
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
saveToJson({
  time: now,
  type: type,
  length: p,
  width: l,
  result: result
});

const repeat = (await ask("Repeat(y/n)?:")).toLowerCase();
if (repeat !== "y") {
console.log("program finnished :)");
break;
}
}
rl.close();
}
main();
