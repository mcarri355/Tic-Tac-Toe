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
let score1 = 0
let score2 = 0
let win = false;

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

//Function that affects top left box when clicked
function box1Click(){
    //When player 1 clicks
    if(turn%2 == 0 && document.getElementById("box1").innerHTML == "" && win == false){
        turn++;
        document.getElementById("box1").innerHTML = "X";
        document.getElementById("box1").style.color = "blue";
        document.getElementById("box1").style.fontSize = "150px";
        box1 = "X";
    }

    //When player 2 clicks
    if(turn%2 ==1 && document.getElementById("box1").innerHTML == "" && win == false){
        turn++
        document.getElementById("box1").innerHTML = "O";
        document.getElementById("box1").style.color = "red";
        document.getElementById("box1").style.fontSize = "150px";
        box1 = "O";
    }
};

//Function that affects top middle box when clicked
function box2Click(){
    if(turn%2 == 0 && document.getElementById("box2").innerHTML == "" && win == false){
        turn++;
        document.getElementById("box2").innerHTML = "X";
        document.getElementById("box2").style.color = "blue";
        document.getElementById("box2").style.fontSize = "150px";
        box2 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box2").innerHTML == "" && win == false){
        turn++
        document.getElementById("box2").innerHTML = "O";
        document.getElementById("box2").style.color = "red";
        document.getElementById("box2").style.fontSize = "150px";
        box2 = "O";
    }
};

//Function that affects top right box when clicked
function box3Click(){
    if(turn%2 == 0 && document.getElementById("box3").innerHTML == "" && win == false){
        turn++;
        document.getElementById("box3").innerHTML = "X";
        document.getElementById("box3").style.color = "blue";
        document.getElementById("box3").style.fontSize = "150px";
        box3 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box3").innerHTML == "" && win == false){
        turn++
        document.getElementById("box3").innerHTML = "O";
        document.getElementById("box3").style.color = "red";
        document.getElementById("box3").style.fontSize = "150px";
        box3 = "O";
    }
};

//Function that affects middle left box when clicked
function box4Click(){
    if(turn%2 == 0 && document.getElementById("box4").innerHTML == "" && win == false){
        turn++;
        document.getElementById("box4").innerHTML = "X";
        document.getElementById("box4").style.color = "blue";
        document.getElementById("box4").style.fontSize = "150px";
        box4 = "X";
    }
    if(turn%2 == 1 && document.getElementById("box4").innerHTML == "" && win == false){
        turn++
        document.getElementById("box4").innerHTML = "O";
        document.getElementById("box4").style.color = "red";
        document.getElementById("box4").style.fontSize = "150px";
        box4 = "O";
    }
};

//Function that affects middle box when clicked
function box5Click(){
    if(turn%2 == 0 && document.getElementById("box5").innerHTML == "" && win == false){
        turn++;
        document.getElementById("box5").innerHTML = "X";
        document.getElementById("box5").style.color = "blue";
        document.getElementById("box5").style.fontSize = "150px";
        box5 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box5").innerHTML == "" && win == false){
        turn++
        document.getElementById("box5").innerHTML = "O";
        document.getElementById("box5").style.color = "red";
        document.getElementById("box5").style.fontSize = "150px";
        box5 = "O";
    }
};

//Function that affects middle right box when clicked
function box6Click(){
    if(turn%2 == 0 && document.getElementById("box6").innerHTML == "" && win == false){
        turn++;
        document.getElementById("box6").innerHTML = "X";
        document.getElementById("box6").style.color = "blue";
        document.getElementById("box6").style.fontSize = "150px";
        box6 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box6").innerHTML == "" && win == false){
        turn++
        document.getElementById("box6").innerHTML = "O";
        document.getElementById("box6").style.color = "red";
        document.getElementById("box6").style.fontSize = "150px";
        box6 = "O";
    }
};

//Function that affects bottom left box when clicked
function box7Click(){
    if(turn%2 == 0 && document.getElementById("box7").innerHTML == "" && win == false){
        turn++;
        document.getElementById("box7").innerHTML = "X";
        document.getElementById("box7").style.color = "blue";
        document.getElementById("box7").style.fontSize = "150px";
        box7 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box7").innerHTML == "" && win == false){
        turn++
        document.getElementById("box7").innerHTML = "O";
        document.getElementById("box7").style.color = "red";
        document.getElementById("box7").style.fontSize = "150px";
        box7 = "O";
    }
};

//Function that affects bottom middle box when clicked
function box8Click(){
    if(turn%2 == 0 && document.getElementById("box8").innerHTML == "" && win == false){
        turn++;
        document.getElementById("box8").innerHTML = "X";
        document.getElementById("box8").style.color = "blue";
        document.getElementById("box8").style.fontSize = "150px";
        box8 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box8").innerHTML == "" && win == false){
        turn++
        document.getElementById("box8").innerHTML = "O";
        document.getElementById("box8").style.color = "red";
        document.getElementById("box8").style.fontSize = "150px";
        box8 = "O";
    }
};

//Function that affects bottom right box when clicked
function box9Click(){
    if(turn%2 == 0 && document.getElementById("box9").innerHTML == "" && win == false){
        turn++;
        document.getElementById("box9").innerHTML = "X";
        document.getElementById("box9").style.color = "blue";
        document.getElementById("box9").style.fontSize = "150px";
        box9 = "X";
    }
    if(turn%2 ==1 && document.getElementById("box9").innerHTML == "" && win == false){
        turn++
        document.getElementById("box9").innerHTML = "O";
        document.getElementById("box9").style.color = "red";
        document.getElementById("box9").style.fontSize = "150px";
        box9 = "O";
    }
};

//Function that creates text when either X or O get three in a row
function winner(){
    //If X Wins
    if(box1 == "X" && box2 == "X" && box3 == "X" && win == false) {
        document.getElementById('winner').innerHTML = 'P1 Wins!';
        document.getElementById('winner').style.color = 'blue'
        document.getElementById('box1').style.backgroundColor = 'gold'
        document.getElementById('box2').style.backgroundColor = 'gold'
        document.getElementById('box3').style.backgroundColor = 'gold'
        win = true;
        score1++
        document.getElementById('score1').innerHTML = score1   
    };
    if(box4 == "X" && box5 == "X" && box6 == "X" && win == false) {
        document.getElementById('winner').innerHTML = 'P1 Wins!';
        document.getElementById('winner').style.color = 'blue'
        document.getElementById('box4').style.backgroundColor = 'gold'
        document.getElementById('box5').style.backgroundColor = 'gold'
        document.getElementById('box6').style.backgroundColor = 'gold'
        win = true;
        score1++
        document.getElementById('score1').innerHTML = score1
    };
    if(box7 == "X" && box8 == "X" && box9 == "X" && win == false) {
        document.getElementById('winner').innerHTML = 'P1 Wins!';
        document.getElementById('winner').style.color = 'blue'
        document.getElementById('box7').style.backgroundColor = 'gold'
        document.getElementById('box8').style.backgroundColor = 'gold'
        document.getElementById('box9').style.backgroundColor = 'gold'
        win = true;
        score1++
        document.getElementById('score1').innerHTML = score1
    };
    if(box1 == "X" && box4 == "X" && box7 == "X" && win == false) {
        document.getElementById('winner').innerHTML = 'P1 Wins!';
        document.getElementById('winner').style.color = 'blue'
        document.getElementById('box1').style.backgroundColor = 'gold'
        document.getElementById('box4').style.backgroundColor = 'gold'
        document.getElementById('box7').style.backgroundColor = 'gold'
        win = true;
        score1++
        document.getElementById('score1').innerHTML = score1
    };
    if(box2 == "X" && box5 == "X" && box8 == "X" && win == false) {
        document.getElementById('winner').innerHTML = 'P1 Wins!';
        document.getElementById('winner').style.color = 'blue'
        document.getElementById('box2').style.backgroundColor = 'gold'
        document.getElementById('box5').style.backgroundColor = 'gold'
        document.getElementById('box8').style.backgroundColor = 'gold'
        win = true;
        score1++
        document.getElementById('score1').innerHTML = score1
    }; 
    if(box3 == "X" && box6 == "X" && box9 == "X" && win == false) {
        document.getElementById('winner').innerHTML = 'P1 Wins!';
        document.getElementById('winner').style.color = 'blue'
        document.getElementById('box3').style.backgroundColor = 'gold'
        document.getElementById('box6').style.backgroundColor = 'gold'
        document.getElementById('box9').style.backgroundColor = 'gold'
        win = true;
        score1++
        document.getElementById('score1').innerHTML = score1
    }; 
    if(box1 == "X" && box5 == "X" && box9 == "X" && win == false) {
        document.getElementById('winner').innerHTML = 'P1 Wins!';
        document.getElementById('winner').style.color = 'blue'
        document.getElementById('box1').style.backgroundColor = 'gold'
        document.getElementById('box5').style.backgroundColor = 'gold'
        document.getElementById('box9').style.backgroundColor = 'gold'
        win = true;
        score1++
        document.getElementById('score1').innerHTML = score1
    };
    if(box3 == "X" && box5 == "X" && box7 == "X" && win == false) {
        document.getElementById('winner').innerHTML = 'P1 Wins!';
        document.getElementById('winner').style.color = 'blue'
        document.getElementById('box3').style.backgroundColor = 'gold'
        document.getElementById('box5').style.backgroundColor = 'gold'
        document.getElementById('box7').style.backgroundColor = 'gold'
        win = true;
        score1++
        document.getElementById('score1').innerHTML = score1
    };

    //If O Wins
    if(box1 == "O" && box2 == "O" && box3 == "O" && win == false) {
        document.getElementById('winner').innerHTML = 'P2 Wins!';
        document.getElementById('winner').style.color = 'red'
        document.getElementById('box1').style.backgroundColor = 'gold'
        document.getElementById('box2').style.backgroundColor = 'gold'
        document.getElementById('box3').style.backgroundColor = 'gold'
        win = true;
        score2++
        document.getElementById('score2').innerHTML = score2
    };
    if(box4 == "O" && box5 == "O" && box6 == "O" && win == false) {
        document.getElementById('winner').innerHTML = 'P2 Wins!';
        document.getElementById('winner').style.color = 'red'
        document.getElementById('box4').style.backgroundColor = 'gold'
        document.getElementById('box5').style.backgroundColor = 'gold'
        document.getElementById('box6').style.backgroundColor = 'gold'
        win = true;
        score2++
        document.getElementById('score2').innerHTML = score2
    };
    if(box7 == "O" && box8 == "O" && box9 == "O" && win == false) {
        document.getElementById('winner').innerHTML = 'P2 Wins!';
        document.getElementById('winner').style.color = 'red'
        document.getElementById('box7').style.backgroundColor = 'gold'
        document.getElementById('box8').style.backgroundColor = 'gold'
        document.getElementById('box9').style.backgroundColor = 'gold'
        win = true;
        score2++
        document.getElementById('score2').innerHTML = score2
    };
    if(box1 == "O" && box4 == "O" && box7 == "O" && win == false){
        document.getElementById('winner').innerHTML = 'P2 Wins!';
        document.getElementById('winner').style.color = 'red'
        document.getElementById('box1').style.backgroundColor = 'gold'
        document.getElementById('box4').style.backgroundColor = 'gold'
        document.getElementById('box7').style.backgroundColor = 'gold'
        win = true;
        score2++
        document.getElementById('score2').innerHTML = score2
    };
    if(box2 == "O" && box5 == "O" && box8 == "O" && win == false) {
        document.getElementById('winner').innerHTML = 'P2 Wins!';
        document.getElementById('winner').style.color = 'red'
        document.getElementById('box2').style.backgroundColor = 'gold'
        document.getElementById('box5').style.backgroundColor = 'gold'
        document.getElementById('box8').style.backgroundColor = 'gold'
        win = true;
        score2++
        document.getElementById('score2').innerHTML = score2
    }; 
    if(box3 == "O" && box6 == "O" && box9 == "O" && win == false) {
        document.getElementById('winner').innerHTML = 'P2 Wins!';
        document.getElementById('winner').style.color = 'red'
        document.getElementById('box3').style.backgroundColor = 'gold'
        document.getElementById('box6').style.backgroundColor = 'gold'
        document.getElementById('box9').style.backgroundColor = 'gold'
        win = true;
        score2++
        document.getElementById('score2').innerHTML = score2
    };
    if(box1 == "O" && box5 == "O" && box9 == "O" && win == false) {
        document.getElementById('winner').innerHTML = 'P2 Wins!';
        document.getElementById('winner').style.color = 'red'
        document.getElementById('box1').style.backgroundColor = 'gold'
        document.getElementById('box5').style.backgroundColor = 'gold'
        document.getElementById('box9').style.backgroundColor = 'gold'
        win = true;
        score2++
        document.getElementById('score2').innerHTML = score2
    };
    if(box3 == "O" && box5 == "O" && box7 == "O" && win == false) {
        document.getElementById('winner').innerHTML = 'P2 Wins!';
        document.getElementById('winner').style.color = 'red'
        document.getElementById('box3').style.backgroundColor = 'gold'
        document.getElementById('box5').style.backgroundColor = 'gold'
        document.getElementById('box7').style.backgroundColor = 'gold'
        win = true;
        score2++
        document.getElementById('score2').innerHTML = score2
    };

    if(turn == 9 && win == false) document.getElementById('winner').innerHTML = 'Draw :(';

    if(win == true || document.getElementById('winner').innerHTML == 'Draw :('){
        document.getElementById("turn1").style.color = "grey";
        document.getElementById("turn2").style.color = "grey";
    };
};

function refresh(){
    box1 = 0;
    box2 = 0;
    box3 = 0;
    box4 = 0;
    box5 = 0;
    box6 = 0;
    box7 = 0;
    box8 = 0;
    box9 = 0;
    turn = 0;
    win = false;
    document.getElementById("box1").innerHTML = ""
    document.getElementById("box1").value = 0
    document.getElementById("box1").style.backgroundColor = 'white'
    document.getElementById("box2").innerHTML = ""
    document.getElementById("box2").value = 0
    document.getElementById("box2").style.backgroundColor = 'white'
    document.getElementById("box3").innerHTML = ""
    document.getElementById("box3").value = 0
    document.getElementById("box3").style.backgroundColor = 'white'
    document.getElementById("box4").innerHTML = ""
    document.getElementById("box4").value = 0
    document.getElementById("box4").style.backgroundColor = 'white'
    document.getElementById("box5").innerHTML = ""
    document.getElementById("box5").value = 0
    document.getElementById("box5").style.backgroundColor = 'white'
    document.getElementById("box6").innerHTML = ""
    document.getElementById("box6").value = 0
    document.getElementById("box6").style.backgroundColor = 'white'
    document.getElementById("box7").innerHTML = ""
    document.getElementById("box7").value = 0
    document.getElementById("box7").style.backgroundColor = 'white'
    document.getElementById("box8").innerHTML = ""
    document.getElementById("box8").value = 0
    document.getElementById("box8").style.backgroundColor = 'white'
    document.getElementById("box9").innerHTML = ""
    document.getElementById("box9").value = 0
    document.getElementById("box9").style.backgroundColor = 'white'
    document.getElementById("winner").innerHTML = ""
    document.getElementById("winner").value = 0
    document.getElementById("turn1").style.color = 'blue'
    
}

