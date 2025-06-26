var  scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

playAgainButton.onclick= () =>{
    location.href = "./game.html";
};
//syntac for taking valuw in url
var urlParams = new URLSearchParams(window.location.search);

var score = urlParams.get("score");

scoreBoard.innerHTML = + score;