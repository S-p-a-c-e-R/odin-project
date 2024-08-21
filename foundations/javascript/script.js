function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}
console.log(getComputerChoice());

let input = prompt("Rock, Paper or Scissor?");
let humanChoice = input.toLowerCase();

function getHumanChoice() {
  if (humanChoice === "rock") {
    return 0;
  } else if (humanChoice === "paper") {
    return 1;
  } else if (humanChoice === "scissor") {
    return 2;
  } else {
    return "Make a choice";
  }
}
console.log(getHumanChoice(humanChoice));
