// function to make the computer choose rock, paper or scissors
function getComputerChoice(){
    let SelectionValue = (Math.random()*100)
    let SelectionWord = ""

    if (SelectionValue > 66) {
        SelectionWord = "rock";
    } else if (SelectionValue > 33) {
        SelectionWord = "paper";
    } else {
        SelectionWord = "scissors"
    }
    return SelectionWord;
}

// function to make the human input a choice
function getHumanChoice(){

let SelectionHuman = ""

    // check if input is valid:
    while (true){
        SelectionHuman = prompt("Choose Rock, Paper or Scissors");
        SelectionHuman = SelectionHuman.toLowerCase();
        if (SelectionHuman === "rock" | SelectionHuman === "paper" | SelectionHuman === "scissors"){
            break;
        }
    }
    
    
    return SelectionHuman;
    //return SelectionHuman.toLowerCase();
}

//variables to keep score
let humanScore = 0;
let computerScore = 0;

// function to play the game
function playRound(humanChoice, computerChoice){
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    winner = ""

    switch (humanSelection){
        case "rock":
            switch (computerSelection){
                case "rock":
                    winner = "tie";
                    break;
                case "paper":
                    winner = "computer";
                    break;
                case "scissors":
                    winner = "human";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection){
                case "rock":
                    winner = "human";
                    break;
                case "paper":
                    winner = "tie";
                    break;
                case "scissors":
                    winner = "computer";
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection){
                case "rock":
                    winner = "computer";
                    break;
                case "paper":
                    winner = "human";
                    break;
                case "scissors":
                    winner = "tie";
                    break;
            }
            break;
    }


if (winner === "human"){
    humanScore++;
    console.warn("The winner is " + winner);

}else if (winner === "computer"){
    computerScore++;
    console.warn("The winner is " + winner);

} else {
    console.warn("It's a tie!");

}
    console.log("Human Selected " + humanSelection);
    console.log("Computer Selected " + computerSelection);
    console.log("Score Human: " + humanScore);
    console.log("Score Computer: " + computerScore);
}