const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ubah rl.question jadi Promise
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function inputValid(p, l) {
  return !isNaN(p) && !isNaN(l) && p > 0 && l > 0;
}

function calculateArea(p, l) {
  return p * l;
}

function calculatePerimeter(p, l) {
  return 2 * (p + l);
}

// MAIN PROGRAM (ASYNC)
async function main() {
  while (true) {
    console.log("\n==== MENU ====");
    console.log("1. Area (Rectangle)");
    console.log("2. Perimeter (Rectangle)");

    const menu = await ask("Choose menu (1/2): ");

    if (menu !== "1" && menu !== "2") {
      console.log("Invalid menu!");
      continue;
    }

    const length = await ask("Enter length: ");
    const width  = await ask("Enter width: ");

    const p = Number(length);
    const l = Number(width);

    if (!inputValid(p, l)) {
      console.log("Invalid input!");
    } else {
      const result =
        menu === "1"
          ? calculateArea(p, l)
          : calculatePerimeter(p, l);

      console.log("Result:", result);
    }

    const repeat = (await ask("Do you want to repeat? (y/n): "))
      .toLowerCase();

    if (repeat !== "y") {
      console.log("Program finished. Goodbye 👋");
      break;
    }
  }

  rl.close();
}

// start
main();
