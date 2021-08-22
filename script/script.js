document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("choice-player").addEventListener("click", event => makePlayerChoice(event));
});

function makePlayerChoice(event) {
    console.log(event);   
    hideAllAnswer();

    const elementToDisplay = event.target.classList[1];

    displayElement(elementToDisplay);
}

function hideAllAnswer(){

    const allAnswer = document.getElementsByClassName("img-answer");

    for(let i = 0; i < allAnswer.length; i++){
        allAnswer[i].className = allAnswer[i].className.replace("shown", "hidden");
    }
}

function displayElement(element){
    const whatDisplay = document.getElementsByClassName("ans-player");
    for (let i = 0; i < whatDisplay.length; i++){
        if (whatDisplay[i].className.includes(element)){
            whatDisplay[i].className = whatDisplay[i].className.replace("hidden", "shown");
        }
    }
}

function computerPlay() {
    const rdmNbr = Math.random();
    let rep;
    if (rdmNbr < 1/3){
        rep = "rock";
    }
    else if (rdmNbr < 2/3){
        rep = "paper";
    }
    else{
        rep = "scissors"
    }
    return rep;
}

function resolveRound(playerChoice, computerChoice){

    const player = playerChoice.toUpperCase();
    const computer = computerChoice.toUpperCase();

    if (player === computer){
        return "tie";
    }
    if(player === "ROCK"){
        if (computer === "PAPER"){
            return "Computer wins!";
        }
        else{
            return "Player wins!";
        }
    }
    else if(player === "PAPER"){
        if (computer === "ROCK"){
            return "Player wins!";
        }
        else{
            return "computer wins!";
        }
    }
    else if(player === "SCISSORS"){
        if(computer === "ROCK"){
            return "computer wins!";
        }
        else{
            return "Player wins!";
        }
    }
}

function game(){

    for(let i = 0; i < 5; i++){
        const computerChoice = computerPlay();
        const playerChoice = "A implementer";

        return resolveRound(playerChoice, computerChoice);
    }
}

game();