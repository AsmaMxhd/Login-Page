var columns = document.querySelectorAll('.column');
// var cross = document.getElementsByClassName('.cross');
// var zero = document.getElementsByClassName('.zero');
var statustxt = document.getElementById('status');

var winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3 ,6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let options = ["", "", "", "", "", "", "", "", ""]
// var crossImg = document.createElement('img');
// crossImg.src = "images/orangepac.gif";
// cross[0].appendChild(crossImg);

let currentPlayer = "X";
// let currentPlayer = crossImg;
let gameOn = false;
// let mathProblem = generateMath();


function playGame(){
    columns.forEach(column => column.addEventListener('click', columnClick));
    statustxt.textContent = currentPlayer + "'s turn.";
    gameOn = true;
}
playGame();

// function generateMath(){
//     var num1 = Math.floor(Math.random() * 11);
//     var num2 = Math.floor(Math.random() * 11);
//     return {
//         num1,
//         num2,
//         answer: num1 + num2,
//     };
// }

// function checkAnswer(mathProblem, userAnswer){
//     return mathProblem.answer === userAnswer;
// }

// function takeTurn(index) {
//     // Check if the user has entered a valid answer to the math problem
//     if (!checkAnswer(mathProblem, userAnswer)) {
//       alert('That is not the correct answer! Try again!');
//       return;
//     }
  
//     // Otherwise, proceed with the turn
//     if (board[index] === '') {
//       board[index] = currentPlayer;
//       currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     }
  
//     // Check for a winner
//     if (checkForWinner()) {
//       alert(currentPlayer + ' wins!');
//       resetGame();
//       return;
//     }
// }

function columnClick(){
    var cellIndex = this.getAttribute("cellIndex");
    
    if (options[cellIndex] != "" || !gameOn){
        return;
    }

    // let math1 = Math.floor((Math.random() * 11))
    // let math2 = Math.floor((Math.random() * 11))
    // let randomQuestion = math1 + math2

    // if(randomQuestion == true){
    //     updateColumn(this, cellIndex); 
    //     checkWinner();
    // }
    // else{
    //     statustxt.textContent = "Try again next time.";
    //     changePlayer();
    // }

    updateColumn(this, cellIndex); 
    checkWinner();
    // changePlayer();
}

function updateColumn(column, index){
    options[index] = currentPlayer;
    column.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    statustxt.textContent = currentPlayer + "'s turn.";
}


function checkWinner(){
    let roundWon = false;

    for(let i = 0;  i <winConditions.length; i++){
        var condition = winConditions[i];
        var cellA = options[condition[0]];
        var cellB = options[condition[1]];
        var cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon) {
        statustxt.textContent = currentPlayer + " wins!";
        gameOn = false;
    }
    else if(!options.includes("")){
        statustxt.textContent = "It's a Draw!";
        gameOn = false;
    }
    else{
        changePlayer();
    }
}
