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
const { rectangleArea,rectanglePerimeter,rectangleValid}
= require("./shapes/rectangle");
const { triangleArea, trianglePerimeter,triangleAreaValid,trianglePerimeterValid }
  = require("./shapes/triangle");
const { circleArea,circlePerimeter,circleValid}
= require("./shapes/circle");
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
function loadHistory() {
  if (!fs.existsSync("history.json")) return [];

  try {
    return JSON.parse(fs.readFileSync("history.json", "utf-8"));
  } catch {
    return [];
  }
}

function saveHistory(data) {
  fs.writeFileSync("history.json", JSON.stringify(data, null, 2));
}

function generateId(history) {
  if (history.length === 0) return 1;
  return history[history.length - 1].id + 1;
}
//main async
async function main(){
while (true){
console.log("=========Menu=========");
console.log("1.rectangle area");
console.log("2.rectangle perimeter");
console.log("3.triangle area");
console.log("4.triangle perimeter");
console.log("5.circle area");
console.log("6.circle perimeter");
console.log("7.show history");
console.log("8.exit");
console.log("9.clear history");

const menu = await ask("choose menu (1/2/3/4/5/6/7/8/9):");
if (!["1","2","3","4","5","6","7","8","9"].includes(menu)){
console.log("invalid menu");
continue;
}
//rectangle menu
if (menu ==="1" || menu ==="2"){
const length = Number(await ask("enter length:"));
const width = Number(await ask("enter width:"));

if (!rectangleValid(length,width)) {
console.log("invalid input");
continue;
}
const result =
    menu === "1"
      ? rectangleArea(length, width)
      : rectanglePerimeter(length, width);

  console.log("result:", result);

  const now = new Date().toLocaleString();
  const type = menu === "1" ? "area" : "perimeter";
if (menu === "1") {
  saveToFile(`${now} | rectangle area | ${length} x ${width} = ${result}`);
} else {
  saveToFile(`${now} | rectangle perimeter | 2×(${length}+${width}) = ${result}`);
}
  const history = loadHistory();
const id = generateId(history);

history.push({
  id,
  time: new Date().toISOString(),
  shape: "rectangle",
  type,
  length,
  width,
  result
});

saveHistory(history);
  continue;
}
//triangle menu
if (menu === "3") {
  const base = Number(await ask("enter base:"));
  const height = Number(await ask("enter height:"));

if (!triangleAreaValid(base, height)) {
  console.log("invalid input");
  continue;
}
  const result = triangleArea(base, height);
  console.log("result:", result);

  saveToFile(`${new Date().toLocaleString()} | triangle area | ${base} x ${height} = ${result}`);
  saveToJson({
    time: new Date().toLocaleString(),
    shape: "triangle",
    type: "area",
    base,
    height,
    result
  });
  continue;
}
if (menu === "4") {
  const a = Number(await ask("side a:"));
  const b = Number(await ask("side b:"));
  const c = Number(await ask("side c:"));

if (!trianglePerimeterValid(a, b, c)) {
  console.log("invalid input");
  continue;
}

  const result = trianglePerimeter(a, b, c);
  console.log("result:", result);

  saveToFile(`${new Date().toLocaleString()} | triangle perimeter | ${a}+${b}+${c} = ${result}`);
  saveToJson({
    time: new Date().toLocaleString(),
    shape: "triangle",
    type: "perimeter",
    sides: [a, b, c],
    result
  });
  continue;
}
//circle menu
if (menu === "5") {
  const r = Number(await ask("enter radius:"));

  if (!circleValid(r)) {
    console.log("invalid input");
    continue;
  }
const result = Number(circleArea(r).toFixed(2));
console.log("result:", result);

saveToFile(`${new Date().toLocaleString()} | circle area | r=${r} = ${result}`);
saveToJson({
  time: new Date().toLocaleString(),
  shape: "circle",
  type: "area",
  radius:r,
  result
  });
  continue;
}

if (menu === "6") {
  const r = Number(await ask("enter radius:"));

  if (!circleValid(r)) {
    console.log("invalid input");
    continue;
  }

  const result = circlePerimeter(r);
  console.log("result:", result.toFixed(2));

  saveToFile(`${new Date().toLocaleString()} | circle perimeter | r=${r} = ${result}`);
  saveToJson({
    time: new Date().toLocaleString(),
    shape: "circle",
    type: "perimeter",
    radius: r,
    result
  });
  continue;
}
// other menu
if (menu === "7") {
  showHistory();
  continue;
}
if (menu === "8") {
  const confirm = (await ask("Are you sure you want to leave? (y/n): "))
    .toLowerCase();

  if (confirm === "y") {
    console.log("Program exited. Goodbye ");
    break;
}
else {
    continue;
}
}
if (menu === "9") {
  const confirm = (await ask("Clear all history? (y/n): ")).toLowerCase();

  if (confirm === "y") {
    fs.writeFileSync("history.txt", "");
    fs.writeFileSync("history.json", "[]");
    console.log("history cleared ✅");
  }
  continue;
}
}
rl.close();
}
main();
