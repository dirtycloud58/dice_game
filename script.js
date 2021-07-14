var player, score, scoreTotal, gaming;

init ()

                           //fonction résultat

function result () {
if(gaming) {

var number = Math.floor(Math.random() * 6) + 1;
var x = document.querySelector('.dice');
x.src = 'images/dice-' + number + '.png';

if(number !== 1) {

score += number;
document.querySelector('#scoreCurrent' + player).textContent = score;
}

else {

  nextPlayer ();
}
}};


                       //fonction joueur suivant
function nextPlayer () {

player === 1 ? player = 2 : player = 1;
score = 0;

document.querySelector('#scoreCurrent1').textContent = '0';
document.querySelector('#scoreCurrent2').textContent ='0';

document.querySelector('.player1').classList.toggle('turn');
document.querySelector('.player2').classList.toggle('turn');

}

                            document.querySelector('.btn-roll').addEventListener('click', result)

                           //fonction hold
function hold () {
if(gaming) {

scoreTotal += score;
document.querySelector('#score' + player).textContent = scoreTotal;
}

if(scoreTotal >= 100) {
gaming = false;

}
else {

nextPlayer() 
}}


                            document.querySelector('.btn-hold').addEventListener('click', hold)

function init () {

  player = 1;
  gaming = true;
  


  document.getElementById('scoreCurrent1').textContent = '0';
  document.getElementById('scoreCurrent2').textContent = '0';
  document.getElementById('score1').textContent = '0';
  document.getElementById('score2').textContent = '0';
}


                            document.querySelector('.btn-game').addEventListener('click', init)