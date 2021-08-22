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
        const playerChoice = prompt("Write 'paper', 'rock' or 'scissors");

        return resolveRound(playerChoice, computerChoice);
    }
}

game();