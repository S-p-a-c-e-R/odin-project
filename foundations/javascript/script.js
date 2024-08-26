const choice = Math.floor(Math.random() * 3);

function getComputerChoice(computerChoice) {
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissor";
  }
}

let input = prompt("Rock, Paper, or Scissor?").toLowerCase();

function getHumanChoice(humanChoice) {
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    return "Invalid";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Invalid") {
    console.log("Invalid choice, please choose Rock, Paper, or Scissor.");
    return;
  }

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win! " + humanChoice + " beats " + computerChoice;
  } else {
    return "You lose! " + computerChoice + " beats " + humanChoice;
  }
}
console.log(getComputerChoice(choice));
console.log(getHumanChoice(input));

const humanSelection = getHumanChoice(input);
const computerSelection = getComputerChoice(choice);

console.log(playRound(humanSelection, computerSelection));
