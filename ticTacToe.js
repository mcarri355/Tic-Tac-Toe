"use strict"
let box1 = 0;
let box2 = 0;
let box3 = 0;
let box4 = 0;
let box5 = 0;
let box6 = 0;
let box7 = 0;
let box8 = 0;
let box9 = 0;
let turn = 0;

//Function checks what turn it is and changes color on HTML based on whos turn it is
function playerTurn(){
   if(turn%2 == 0){
    document.getElementById("turn1").style.color = "blue";
    document.getElementById("turn2").style.color = "grey";
   }
   else{
    document.getElementById("turn1").style.color = "grey";
    document.getElementById("turn2").style.color = "red";
   }
};

function box1Click(){
    if(turn%2 == 0 && document.getElementById("box1").innerHTML == ""){
        turn++;
        document.getElementById("box1").innerHTML = "X";
        box1 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box1").innerHTML == ""){
        turn++
        document.getElementById("box1").innerHTML = "O";
        box1 = "O";
    }
};

function box2Click(){
    if(turn%2 == 0 && document.getElementById("box2").innerHTML == ""){
        turn++;
        document.getElementById("box2").innerHTML = "X";
        box2 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box2").innerHTML == ""){
        turn++
        document.getElementById("box2").innerHTML = "O";
        box2 = "O";
    }
};

function box3Click(){
    if(turn%2 == 0 && document.getElementById("box3").innerHTML == ""){
        turn++;
        document.getElementById("box3").innerHTML = "X";
        box3 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box3").innerHTML == ""){
        turn++
        document.getElementById("box3").innerHTML = "O";
        box3 = "O";
    }
};

function box4Click(){
    if(turn%2 == 0 && document.getElementById("box4").innerHTML == ""){
        turn++;
        document.getElementById("box4").innerHTML = "X";
        box4 = "X";
    }
    else{
        turn++
        document.getElementById("box4").innerHTML = "O";
        box4 = "O";
    }
};

function box5Click(){
    if(turn%2 == 0 && document.getElementById("box5").innerHTML == ""){
        turn++;
        document.getElementById("box5").innerHTML = "X";
        box5 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box5").innerHTML == ""){
        turn++
        document.getElementById("box5").innerHTML = "O";
        box5 = "O";
    }
};

function box6Click(){
    if(turn%2 == 0 && document.getElementById("box6").innerHTML == ""){
        turn++;
        document.getElementById("box6").innerHTML = "X";
        box6 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box6").innerHTML == ""){
        turn++
        document.getElementById("box6").innerHTML = "O";
        box6 = "O";
    }
};

function box7Click(){
    if(turn%2 == 0 && document.getElementById("box7").innerHTML == ""){
        turn++;
        document.getElementById("box7").innerHTML = "X";
        box7 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box7").innerHTML == ""){
        turn++
        document.getElementById("box7").innerHTML = "O";
        box7 = "O";
    }
};

function box8Click(){
    if(turn%2 == 0 && document.getElementById("box8").innerHTML == ""){
        turn++;
        document.getElementById("box8").innerHTML = "X";
        box8 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box8").innerHTML == ""){
        turn++
        document.getElementById("box8").innerHTML = "O";
        box8 = "O";
    }
};

function box9Click(){
    if(turn%2 == 0 && document.getElementById("box9").innerHTML == ""){
        turn++;
        document.getElementById("box9").innerHTML = "X";
        box9 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box9").innerHTML == ""){
        turn++
        document.getElementById("box9").innerHTML = "O";
        box9 = "O";
    }
};

function winner(){
    if(box1 == "X" && box2 == "X" && box3 == "X") {
        console.log('X Wins')
    }
    if(box4 == "X" && box5 == "X" && box6 == "X") {
        console.log('X Wins')
    }
    if(box7 == "X" && box8 == "X" && box9 == "X") {
        console.log('X Wins')
    }
    if(box1 == "X" && box4 == "X" && box7 == "X") {
        console.log('X Wins')
    }
    if(box2 == "X" && box5 == "X" && box8 == "X") {
        console.log('X Wins')
    } 
    if(box3 == "X" && box6 == "X" && box9 == "X") {
        console.log('X Wins')
    } 
    if(box1 == "X" && box5 == "X" && box9 == "X") {
        console.log('X Wins')
    } 
    if(box3 == "X" && box5 == "X" && box7 == "X") {
        console.log('X Wins')
    }

    if(box1 == "O" && box2 == "O" && box3 == "O") {
        console.log('O Wins')
    }
    if(box4 == "O" && box5 == "O" && box6 == "O") {
        console.log('O Wins')
    }
    if(box7 == "O" && box8 == "O" && box9 == "O") {
        console.log('O Wins')
    }
    if(box1 == "O" && box4 == "O" && box7 == "O") {
        console.log('O Wins')
    }
    if(box2 == "O" && box5 == "O" && box8 == "O") {
        console.log('O Wins')
    } 
    if(box3 == "O" && box6 == "O" && box9 == "O") {
        console.log('O Wins')
    } 
    if(box1 == "O" && box5 == "O" && box9 == "O") {
        console.log('O Wins')
    } 
    if(box3 == "O" && box5 == "O" && box7 == "O") {
        console.log('O Wins')
    }
};
