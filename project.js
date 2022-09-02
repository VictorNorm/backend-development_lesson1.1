// function swap(array, a, b) {
//   let temp = array[a];
//   array[a] = array[b];
//   array[b] = temp;
// }

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - 1 - i; j++) {
//       if (array[j] > array[j + 1]) {
//         swap(array, j, j + 1);
//       }
//     }
//   }
//   return array;
// }

// let numberToGuess = 7;

// function numberGuessingGame() {
//   let userInputValue = prompt("please enter a number between 0 - 10");
//   if (isNaN(userInputValue) || userInputValue < 0 || userInputValue > 10) {
//     numberGuessingGame();
//   } else if (parseFloat(userInputValue) !== numberToGuess) {
//     setTimeout(() => numberGuessingGame(), 10000);
//   } else {
//     alert("You fucking won you sly son of a bitch!");
//   }
// }
// numberGuessingGame();

const button = document.querySelector(".btn");
console.log(button);

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const tableCount = 15;
// let tableSizes = Array.from(Array(tableCount).keys()).map(() =>
//   getRandomInt(2, 10)
// );
// console.log(tableSizes);
// //declares how many people can seat at table of certain index
// customers = [];
// function newCustomer() {
//   const name = prompt("Hello, what is your name?");
//   let size = 0;
//   let askAboutTableSize = "";
//   while (true) {
//     if (size == 0) {
//       askAboutTableSize = "Hello " + name + "! Table for how many people?";
//     } else {
//       askAboutTableSize =
//         "Unfortunately we don't have a table for that many people. Please ask the smaller table size.";
//     }
//     size = parseInt(prompt(askAboutTableSize));
//     if (size != 0 && Math.max(...tableSizes) >= size) {
//       break;
//     }
//   }
//   let tableNumber = 0;
//   if (tableSizes.indexOf(size) >= 0) {
//     tableNumber = tableSizes.indexOf(size);
//   } else {
//     tableNumber = tableSizes.indexOf(Math.max(...tableSizes));
//   }
//   alert(
//     "You got a table of number: " +
//       tableNumber +
//       ", which by default can fit " +
//       tableSizes[tableNumber] +
//       " people."
//   );
//   customers.push([name, tableNumber]);
//   console.log(customers);
// }

function randomName() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const tableCount = 15;
let tableSizes = Array.from(Array(tableCount).keys()).map(() =>
  getRandomInt(2, 10)
); //declares how many people can seat at table of certain index
customers = [];
let sneakyAttackId = 0;

function freeTable() {
  let index = parseInt(
    prompt(
      "Provide an index to free its table. It should be greater or equal to 0, but less than " +
        tableCount +
        "."
    )
  );
  while (index < 0 || index >= tableCount) {
    index = parseInt(
      prompt(
        "Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than " +
          tableCount +
          "."
      )
    );
  }
  console.log(customers);
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i][1] == index) customers.splice(i, 1);
  }
  console.log(customers);
}

function sneakyAttack() {
  sneakyAttackId = setInterval(() => {
    customers.push([randomName(), getRandomInt(0, tableSizes.length)]);
    console.log("Shhhhhhhh");
    return;
  }, 30000);
  console.log();
}
function stopSneakyAttack() {
  if (sneakyAttackId != 0) {
    clearInterval(sneakyAttackId);
    console.log("Sneaky attack stopped.");
  }
}

// let foundTable = occupiedTables.find(function (table) {
//   if (table == tableNumber) {
//     console.log("This table is occupied.", foundTable);
//   }
// });
let occupiedTables = [];

function newCustomer() {
  const name = prompt("Hello, what is your name?");
  let size = 0;
  let askAboutTableSize = "";
  while (true) {
    if (size == 0) {
      askAboutTableSize = "Hello " + name + "! Table for how many people?";
    } else {
      askAboutTableSize =
        "Unfortunately we don't have a table for that many people. Please ask the smaller table size.";
    }
    size = parseInt(prompt(askAboutTableSize));
    if (size != 0 && Math.max(...tableSizes) >= size) {
      break;
    }
  }
  let tableNumber = 0;
  console.log(tableSizes);
  if (tableSizes.indexOf(size) >= 0) {
    tableNumber = tableSizes.indexOf(size);
  } else {
    tableNumber = tableSizes.indexOf(Math.max(...tableSizes));
  }
  //Check if there are customers in the restaurant
  if (customers.length > 0) {
    let foundTable = occupiedTables.find(function (table) {
      if (table == tableNumber) {
        alert("This table is occupied, wait to be seated.");
      }
    });
  } else {
    alert(
      "You got a table of number: " +
        tableNumber +
        ", which by default can fit " +
        tableSizes[tableNumber] +
        " people."
    );
    customers.push([name, tableNumber]);
    occupiedTables.push(tableNumber);
    console.log(customers);
  }
}

function freeTable() {
  let index = parseInt(
    prompt(
      "Provide an index to free its table. It should be greater or equal to 0, but less than " +
        tableCount +
        "."
    )
  );
  while (index < 0 || index >= tableCount) {
    index = parseInt(
      prompt(
        "Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than " +
          tableCount +
          "."
      )
    );
  }
  console.log(customers);
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i][1] == index) customers.splice(i, 1);
  }
  console.log(customers);
}
