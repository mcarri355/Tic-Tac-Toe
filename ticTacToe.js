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

function turn(){
   if(turn%2 == 0){
    document.getElementById("turn1").style.color = "blue"
    document.getElementById("turn2").style.color = "grey"
   } 
   else{
    document.getElementById("turn1").style.color = "grey"
    document.getElementById("turn2").style.color = "red"
   }
}
function box1(){
    if(turn%2 == 0){
        turn++;
        document.getElementById("box1").innerHTML = "X"
        box1 = "X"
    }
    else{
        turn++
        document.getElementById("box1").innerHTML = "O"
        box1 = "O"
    }
}