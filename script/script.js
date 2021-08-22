document.addEventListener("DOMContentLoaded", () => {
    hideAllAnswer();
    document.getElementById("choice-player").addEventListener("click", event => makePlayerChoice(event));
    document.getElementsByClassName("reset")[0].addEventListener("click", event => resetGame(event));
});

function resetGame(event){
    hideAllAnswer();
    document.getElementById("points-player").innerHTML = 0;
    document.getElementById("points-computer").innerHTML = 0;

    
}
function makePlayerChoice(event) {
    console.log(event);   
    hideAllAnswer();

    const playerChoice = event.target.classList[1];

    displayElement(playerChoice, "player");

    const computerChoice = computerPlay();
    
    displayElement(computerChoice, "computer");

    resolution(playerChoice, computerChoice);

}

function resolution (playerChoice, computerChoice){
    const winner = resolveRound(playerChoice, computerChoice);
    if (winner === "Player wins!"){
        incrementScore("player");
    }
    else if (winner === "Computer wins!"){
        incrementScore("computer");
    }

    writeWinner(winner);
}

function writeWinner(winner){
    const winnerDisplay = document.getElementsByClassName("resolution");
    winnerDisplay[0].innerHTML = winner;
}

function incrementScore(who){
    let pointsWho;
    if (who === "player"){
        pointsWho = "points-player";
    }
    else{
        pointsWho = "points-computer";
    }
    const elementScore = document.getElementById(pointsWho);
    elementScore.innerHTML = +elementScore.innerHTML + 1;
}
function hideAllAnswer(){

    const allAnswer = document.getElementsByClassName("img-answer");

    for(let i = 0; i < allAnswer.length; i++){
        allAnswer[i].className = allAnswer[i].className.replace("shown", "hidden");
    }
}

function displayElement(element, who){
    let classNamewho;
    if (who === "player"){
        classNamewho = "ans-player";
    }
    else{
        classNamewho = "ans-computer";
    }
    const whatDisplay = document.getElementsByClassName(classNamewho);
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
        return "Tie !";
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
            return "Computer wins!";
        }
    }
    else if(player === "SCISSORS"){
        if(computer === "ROCK"){
            return "Computer wins!";
        }
        else{
            return "Player wins!";
        }
    }
}
