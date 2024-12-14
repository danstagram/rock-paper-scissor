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

//variables to keep score
let humanScore = 0;
let computerScore = 0;

// function to play the game
function playRound(humanChoice, computerChoice){
    
    const humanSelection = humanChoice;
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

console.clear();

let restultsText = ""

if (winner === "human"){
    humanScore++;
    console.warn("The winner is " + winner);
    restultsText = "The winner is " + winner;

}else if (winner === "computer"){
    computerScore++;
    console.warn("The winner is " + winner);
    restultsText = "The winner is " + winner;


} else {
    console.warn("It's a tie!");
    restultsText = "It's a " + winner;

}
    console.log("Human selected " + humanSelection);
    console.log("Computer selected " + computerSelection);
    console.log("Score Human: " + humanScore);
    console.log("Score Computer: " + computerScore);


    //check if computer selection is already displayed
    let element_check = document.getElementById("computerExplain");
    let element_check2 = document.getElementById("computerOutput");
    if (element_check !== null){    
        element_check.remove(); 
        element_check2.remove();
    } else {
    }


    //show computer selection
    const game_box = document.querySelector(".game");
    const computer_explain = document.createElement("div");
    const computer_output = document.createElement("button");
    game_box.appendChild(computer_explain);
    computer_explain.textContent = "Computer selected: "+computerSelection;
    computer_explain.id = "computerExplain";
    game_box.appendChild(computer_output);
    computer_output.id = "computerOutput";
    computer_output.textContent = restultsText;
    computer_output.style.background = "#0B192C";
    computer_output.style.borderRadius = "2em";
    computer_output.style.padding = "1em";


    //update scoreboard
    const scoreboard_human = document.querySelector(".score-human-counter");
    const scoreboard_computer = document.querySelector(".score-computer-counter");

    scoreboard_human.innerHTML = humanScore;
    scoreboard_computer.innerHTML = computerScore;


    //end game when one player score 5 points
    let winner_round = "";
    if (humanScore == 5){
        winner_round = "human";
    }
    else if (computerScore == 5){
        winner_round = "computer";
    }

    if (humanScore == 5 || computerScore == 5){
        console.log("END OF GAME; HUMAN WINS");
        const game_area = document.querySelector(".game");
        const game_area1 = document.querySelector(".game-title");
        const game_area2 = document.querySelector(".game-move-box");
        const end_game_message = document.createElement("div");
        game_area1.remove();
        game_area2.remove();
        game_area.appendChild(end_game_message);
        game_area.id ="endOfGame";
        game_area.textContent = "End of Game. Winner is " + winner_round + ".";
    }
}

//change button color when mouseover:
const btn = document.querySelectorAll(".game-selection");
for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseover", function() {
        btn[i].style.background = "#FF6500";
    })
    btn[i].addEventListener("mouseout", function() {
        btn[i].style.background = "#0B192C";
    })
}


// event listener for button click to play game
const btn_rock = document.querySelector(".selection-rock");
btn_rock.addEventListener("click", function() {
    playRound("rock");
})

const btn_paper = document.querySelector(".selection-paper");
btn_paper.addEventListener("click", function() {
    playRound("paper");
})

const btn_scissors = document.querySelector(".selection-scissors");
btn_scissors.addEventListener("click", function() {
    playRound("scissors");
})