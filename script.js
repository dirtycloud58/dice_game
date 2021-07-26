var player1 = document.querySelector('.player1');
var name1 = document.querySelector('.name1');
var scoreTotal1 = document.querySelector('.score1');
var score1 = document.querySelector('.scoreCurrent1');

var player2 = document.querySelector('.player2');
var name2 = document.querySelector('.name2');
var scoreTotal2 = document.querySelector('.score2');
var score2 = document.querySelector('.scoreCurrent2');

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')


var activePlayer = player1;

reset ();

                      //function roll

function roll () {

var number = Math.floor(Math.random() * 6) + 1;
var x = document.querySelector('.dice');
x.src = 'images/dice-' + number + '.png';

if(number == 1){
  if(activePlayer == player1){
    score1.textContent = '0';
  }
  else{
    score2.textContent = '0';
  }
  nextPlayer();}
  else{
    if(activePlayer == player1){
      score1.textContent = parseInt(score1.textContent) + number;
    }
    else{
      score2.textContent = parseInt(score2.textContent) + number;
    }
  }};

                       //fonction joueur suivant

function nextPlayer () {

activePlayer = activePlayer == player1 ? player2 : player1;

score1.textContent = '0';
score2.textContent = '0';
document.querySelector('.player1').classList.toggle('turn');
document.querySelector('.player2').classList.toggle('turn');
};

                          //function hold

function hold () {

if(activePlayer == player1){

scoreTotal1.textContent = parseInt(scoreTotal1.textContent) + parseInt(score1.textContent);
scoreTotal1.textContent >= 100 ? win(): nextPlayer ();
}
else{

scoreTotal2.textContent = parseInt(scoreTotal2.textContent) + parseInt(score2.textContent);
scoreTotal2.textContent >= 100 ? win(): nextPlayer ();
}
};

                         //function win

function win () {
if(activePlayer == player1){
  $('#myModal').appendTo("body").modal('show');

}
else{
  $('#myModal2').appendTo("body").modal('show');
}
reset();
};
                        //function reset

function reset () {

score1.textContent = '0';
score2.textContent = '0';
scoreTotal1.textContent = '0';
scoreTotal2.textContent = '0';
document.querySelector('.player1').classList.add('turn');
document.querySelector('.player2').classList.remove('turn');
document.querySelector(".dice").src = "images/dice-5.png";
};


                            //button
document.querySelector('.btn-roll').addEventListener('click', roll)
document.querySelector('.btn-game').addEventListener('click', reset)
document.querySelector('.btn-hold').addEventListener('click', hold)
