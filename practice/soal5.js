const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output:process.stdout
});

//area calculation function
function calculateArea(p,l) {
return p * l;
}

//number check function
function inputValid(p,l) {
return !isNaN(p) && !isNaN(l) && p > 0 && l > 0;
}

//main function
function asking() {
rl.question("enter length:",function(length){
rl.question("enter wide:",function(wide){

let p =Number(length);
let l =Number(wide);

if(!inputValid(p,l)){
console.log("input not valid!");
}
else{
let result = calculateArea( p,l);
console.log("the result:",result);
}

repeat();
  });
 });
}
//function repeat
function repeat() {
rl.question("do you want to repeat?(y/n)",function(answer){
answer = answer.toLowerCase();

if(answer === "y"){
asking();
}
else{
console.log("sistem off");
console.log("sistem say good bye");
rl.close()
}
});
}
asking();
