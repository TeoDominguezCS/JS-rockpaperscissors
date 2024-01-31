//queryselecting all buttons 
const button = document.querySelectorAll("button");
//adding click event listener with input for one round
button.forEach(button => { 
    button.addEventListener('click', function(){
        playRound(button.value, getComputerChoice());
    })
});
const result = document.querySelector('#resultMessage');
const computer = document.querySelector('#computerMessage');
function resultMessage(score, playerSelection, computerSelection){
    //displaying computer pick
    computer.textContent = "Computer picks: " + computerSelection;
    //win message
    if(score == 1){
       result.textContent = playerSelection + " beats " + computerSelection + " you win!";
    }
    //lose message
    else if(score == 0){
        result.textContent = computerSelection + " beats " + playerSelection + " you lose!";
    }
    //tie message
    else{
        result.textContent = "Tie!";
    }
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
function updateScore(score){
    let playerScore = document.querySelector('#playerScore');
    let computerScore = document.querySelector('#computerScore');
    if(score == 1){
        let num = Number(playerScore.textContent);
        num++;
        playerScore.textContent = num;
    }
    else{
        let num = Number(computerScore.textContent);
        num++;
        computerScore.textContent = num;
    }   

}
function playRound(playerSelection, computerSelection){
    //tie
    if(playerSelection == computerSelection){
        resultMessage(-1,playerSelection, computerSelection);
        
    }
    //player wins
    else if(playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "scissors" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "rock"
    ){
            updateScore(1)  
            resultMessage(1,playerSelection, computerSelection);
    }
    //player loses
    else{
        updateScore(0);
        resultMessage(0,playerSelection, computerSelection);
    }
}
    
