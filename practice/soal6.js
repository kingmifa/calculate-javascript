const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inputValid(p, l) {
  return !isNaN(p) && !isNaN(l) && p > 0 && l > 0;
}

function calculateArea(p, l) {
  return p * l;
}

function calculatePerimeter(p, l) {
  return 2 * (p + l);
}

function askMenu() {
  console.log("\n==== MENU ====");
  console.log("1. Area (Rectangle)");
  console.log("2. Perimeter (Rectangle)");

  rl.question("Choose menu (1/2): ", function (menu) {
    if (menu === "1" || menu === "2") {
      askInput(menu);
    } else {
      console.log("Invalid menu!");
      askMenu();
    }
  });
}

function askInput(menu) {
  rl.question("Enter length: ", function (length) {
    rl.question("Enter width: ", function (width) {

      let p = Number(length);
      let l = Number(width);

      if (!inputValid(p, l)) {
        console.log("Invalid input!");
      } else {
        if (menu === "1") {
          console.log("Result:", calculateArea(p, l));
        } else {
          console.log("Result:", calculatePerimeter(p, l));
        }
      }

      repeat();
    });
  });
}

function repeat() {
  rl.question("Do you want to repeat? (y/n): ", function (answer) {
    answer = answer.toLowerCase();

    if (answer === "y") {
      askMenu();
    } else {
      console.log("Thank you for using this program");
      console.log("See you next time 👋");
      rl.close();
    }
  });
}

// start program
askMenu();
