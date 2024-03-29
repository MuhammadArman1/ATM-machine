#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome to ATM of Muhammad_Arman!")
console.log("My PIN is 2024")
let myBalance = 10000;
let myPin = 2024;

const pinAns = await inquirer.prompt([
  { name: "pin", type: "number", message: "Enter your PIN:" },
]);
if (myPin === pinAns.pin) {
  console.log("Your PIN is correct");
  const optionAns = await inquirer.prompt([
    {
      name: "oprator",
      type: "list",
      message: "Select any one option.",
      choices: ["withdrawl", "check balance", "fast cash"],
    },
  ]);
  if (optionAns.oprator === "withdrawl") {
    const amountAns = await inquirer.prompt([
      { name: "amount", type: "number", message: "Enter your amount" },
    ]);
    if  (myBalance < amountAns.amount){
      console.log("insufficient balance")
    } else{
      myBalance -= amountAns.amount;
      console.log("Your remaining balance is: " + myBalance);
    }
   
  } 
  if (optionAns.oprator === "check balance") {
    console.log("Your current balance is : " + myBalance);
  }
  if (optionAns.oprator === "fast cash") {
    const fastcash = await inquirer.prompt([
      {
        name: "cash",
        type: "list",
        message: "select your amount",
        choices: ["500", "1000", "5000", "10000"],
      },
    ]);
    if (myBalance < fastcash.cash) {
      console.log("Insufficient Balance");
    } else {
      myBalance -= fastcash.cash;
      console.log(`Your withdrawl is : ${fastcash.cash}\nYour remaining balance is : ${myBalance}`);
    }
  }
} else {
  console.log("incorrect PIN, please try again.");
}
