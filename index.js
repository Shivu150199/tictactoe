"use strict";

console.log("welcome to my tic tac toe");

let music = new Audio("music.wav");
let audioTurn = new Audio('sounds/turn.wav');
let gameOver = new Audio("gameover.wav");
let turn = "x";
//function to change turn
const changeTurn = () => {
  return turn === "x" ? "0" : "x";
};
//function to check win
const checkWin = () => {



    
};

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((Element) => {
    let boxText =  Element.querySelector(".boxText");
  Element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
    }
  });
});
