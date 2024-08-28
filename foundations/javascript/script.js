function getComputerChoice(choice) {
  choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissor";
  }
}

function getHumanChoice(input) {
  input = input.toLowerCase();
  if (input === "rock" || input === "paper" || input === "scissor") {
    return input;
  } else {
    return "Invalid";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Invalid") {
    console.log("Invalid choice, please choose Rock, Paper, or Scissor.");
    return;
  }

  if (humanChoice === computerChoice) {
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "scissor" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let counter = 0; counter < 5; counter++) {
    const humanSelection = getHumanChoice(prompt("Rock, Paper, or Scissor?"));
    const computerSelection = getComputerChoice();

    console.log(`Round ${counter + 1} of 5`);

    const outcome = playRound(humanSelection, computerSelection);
    if (outcome === "tie") {
      console.log("it's a tie!");
    } else if (outcome === "win") {
      console.log(`You win! ${humanSelection} beats ${computerSelection}`);
      humanScore++;
    } else if (outcome === "lose") {
      console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
      computerScore++;
    } else {
      console.log("Invalid choice, please try again.");
      counter--;
    }
    console.log(`You:      ${humanSelection}`);
    console.log(`Computer: ${computerSelection}`);
  }

  console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();
