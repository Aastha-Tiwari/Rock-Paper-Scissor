const choicesContainer = document.querySelector(".choices");
const choices = document.querySelectorAll(".choice");
const resultContainer = document.querySelector(".result-msg-container");
const movesContainer = document.querySelector(".moves-container");
const scoreBoard = document.querySelector(".score-board");
const resetBtn = document.querySelector(".reset button");

let userMove = "";
let computerMove = "";
let result = "";

const score = {
    Wins : 0 ,
    Loss : 0 , 
    Draw : 0
}

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
    if(userMove == computerMove){
        return "Tie";
    }
    if(userMove == "rock"){
        return computerMove == "paper" ? "Loss" : "Win";
    }
    else if(userMove == "paper"){
        return computerMove == "scissor" ? "Loss" : "Win";
    }
    else if(userMove == "scissor"){
        return computerMove == "rock" ? "Loss" : "Win";
    }
}

function showResult(userMove , computerMove , result){
    resultContainer.innerText = result;
    movesContainer.innerHTML = `You picked <img src="./assets/${userMove}-emoji.png" alt="${userMove}"/> Computer picked <img src="./assets/${computerMove}-emoji.png" alt="${computerMove}"/>`;
    updateScore(result);
}

function updateScore(){
    if(result == "Win"){
        (score.Wins)++;
        resultContainer.style.backgroundColor = "green";
    }
    else if(result == "Loss"){
        (score.Loss)++;
        resultContainer.style.backgroundColor = "red";
    }
    else if(result == "Tie"){
        (score.Draw)++;
        resultContainer.style.backgroundColor = "";
    }
    scoreBoard.innerText = `Wins:${score.Wins} Loss:${score.Loss} Draw:${score.Draw}`;
}

resetBtn.addEventListener("click",()=>{
    userMove = computerMove = result = "";
    score.Wins = score.Loss = score.Draw = 0;
    resultContainer.innerText = "";
    movesContainer.innerHTML = "";
    scoreBoard.innerText = "";
    resultContainer.style.backgroundColor = "";
});

