document.addEventListener("DOMContentLoaded", () => {
    hideAllAnswer();
    document.getElementById("choice-player").addEventListener("click", event => makePlayerChoice(event));
    document.getElementsByClassName("reset")[0].addEventListener("click", event => resetGame(event));
});

function resetGame(event){
    /*Reset score and answer*/
    hideAllAnswer();
    document.getElementById("points-player").innerHTML = 0;
    document.getElementById("points-computer").innerHTML = 0; 
    document.getElementsByClassName("resolution")[0].innerHTML = "Let's play!"
}

function makePlayerChoice(event) {
    /*Resolve the Game following the player answer*/
    hideAllAnswer();

    /* Catch player choice and display it at the screen*/
    const playerChoice = event.target.classList[1];
    displayElement(playerChoice, "player");

    /* Catch computer choice and display it at the screen*/
    const computerChoice = computerPlay();
    displayElement(computerChoice, "computer");

    /*Look who won the game and upgrade screen accordingly */
    resolution(playerChoice, computerChoice);
}

function resolution (playerChoice, computerChoice){
    /* Compare the 2 string following Rock Paper Scissors rules and modify screen accordingly */

    /* Return the winner */
    const winner = resolveRound(playerChoice, computerChoice);

    /* Increment winner's score */
    if (winner === "Player wins!"){
        incrementScore("player");
    }
    else if (winner === "Computer wins!"){
        incrementScore("computer");
    }

    /* Write the game's resolution at the screen */
    document.getElementsByClassName("resolution").innerHTML = winner;
}

function incrementScore(who){
    /* Update the score of 'who' */
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
    /* Make sure no answer is still displayed */
    const allAnswer = document.getElementsByClassName("img-answer");

    for(let i = 0; i < allAnswer.length; i++){
        allAnswer[i].className = allAnswer[i].className.replace("shown", "hidden");
    }
}

function displayElement(element, who){
    /* Display answer 'element' for player 'who' */
    let classNamewho;
    if (who === "player"){
        classNamewho = "ans-player";
    }
    else{
        classNamewho = "ans-computer";
    }

    /* Get DOM element to display it*/
    const whatDisplay = document.getElementsByClassName(classNamewho);
    for (let i = 0; i < whatDisplay.length; i++){
        if (whatDisplay[i].className.includes(element)){
            whatDisplay[i].className = whatDisplay[i].className.replace("hidden", "shown");
        }
    }
}

function computerPlay() {
    /* Return Rock, Paper or Scissors with 1/3 of probaility each*/
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
    /* Compare answer of the 2 player and return the winner, or 'tie' */
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
