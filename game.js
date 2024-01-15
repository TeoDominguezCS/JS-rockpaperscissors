const message = "Welcome to Rock, Paper, Scissors!\nGet Ready for a best of five match to the DEATH"
alert(message);
game();

function game(){
    let playerScore = 0;
    let compScore = 0;
    for(let i = 1; i < 6 ; i++){
        if(playerScore === 3 || compScore === 3){
            break;
        }
        let playerSelection = prompt("Game " + i + ": Pick your weapon: Rock, Paper, OR, Scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if(result === 1){
            playerScore++;
        }
        else if(result === 0){
            compScore++;
        }
        else{
            i--
            console.log("Tie :(");
        }
    }
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + compScore);
}


function tieBreak(){
    let tieMessage = "Tiebreaker!\nMake another choice:";
    playerSelection = prompt(tieMessage).toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) ;
    switch(random){
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
        default:
            return "Error";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("Tie! No one gets points! Lets try again.");
        return -1;
    }
    else if(playerSelection == "rock"){
        if (computerSelection == "paper"){
            console.log("Computer picked Paper. You Lose.");
            return 0;
        }
        else{
            console.log("Computer picked Scissors. You Win!");
            return 1;
        }

    }
    else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            console.log("Computer picked Scissors. You Lose.");
            return 0;
        }
        else{
            console.log("Computer picked Rock. You Win!");
            return 1;
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            console.log("Computer picked Rock. You Lose.");
            return 0;
        }
        else{
            console.log("Computer picked Paper. You Win!");
            return 1;
        }
    }
    else{
        console.log("Invalid Entry! Point Goes to computer for human error!\nChoices are: Rock, Paper, Scissors");
        return 0;
    }
}
    
