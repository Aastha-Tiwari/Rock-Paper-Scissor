const choicesContainer = document.querySelector(".choices");
const choices = document.querySelectorAll(".choice");
const resultContainer = document.querySelector(".result-msg-container");
const movesContainer = document.querySelector(".moves-container");

let userMove = "";
let computerMove = "";
let result = "";

choicesContainer.addEventListener("click",(e)=>{
    if(e.target != choicesContainer){
        userMove = e.target.dataset.pick;
        computerMove = findComputerMove();
        result = checkWinning(userMove , computerMove);
        showResult(userMove , computerMove , result);
    }
});

function findComputerMove(){
    const random = Math.random();
    if(random>0 && random<=1/3){
        return "rock";
    }
    else if(random>1/3 && random<=2/3){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function checkWinning(userMove , computerMove){
    if(userMove == "rock"){
        if(computerMove == "rock"){
            return "Tie";
        }
        else if(computerMove == "paper"){
            return "Loss";
        }
        else{
            return "Win";
        }
    }
    else if(userMove == "paper"){
        if(computerMove == "paper"){
            return "Tie";
        }
        else if(computerMove == "scissor"){
            return "Loss";
        }
        else{
            return "Win";
        }
    }
    else if(userMove == "scissor"){
        if(computerMove == "scissor"){
            return "Tie";
        }
        else if(computerMove == "rock"){
            return "Loss";
        }
        else{
            return "Win";
        }
    }
}

function showResult(userMove , computerMove , result){
    resultContainer.innerText = result;
    movesContainer.innerHTML = `You picked <img src="./assets/${userMove}-emoji.png" alt="${userMove}"/> Computer picked <img src="./assets/${computerMove}-emoji.png" alt="${computerMove}"/>`;
}