// function to make the computer choose rock, paper or scissors
function getComputerChoice(){
    let SelectionValue = (Math.random()*100)
    let SelectionWord = ""

    if (SelectionValue > 66) {
        SelectionWord = "Rock";
    } else if (SelectionValue > 33) {
        SelectionWord = "Paper";
    } else {
        SelectionWord = "Scissors"
    }
    return SelectionWord;
}