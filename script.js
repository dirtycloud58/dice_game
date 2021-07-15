var player = 1;
var score = 0;
var scoreTotal = 0;
var gaming = true;


reset ();

                           //fonction résultat

function result () {
if(gaming = true) {

var number = Math.floor(Math.random() * 6) + 1;
var x = document.querySelector('.dice');
x.src = 'images/dice-' + number + '.png';

if(number !== 1) {
  
score += number;
document.querySelector('.scoreCurrent' + player).textContent = score;
console.log(number)

}
else {

  nextPlayer ();
}
}};

                       //fonction joueur suivant

function nextPlayer () {

player === 1 ? player = 2 : player = 1;
score = 0;

document.querySelector('.scoreCurrent1').textContent = '0';
document.querySelector('.scoreCurrent2').textContent = '0';

document.querySelector('.player1').classList.toggle('turn');
document.querySelector('.player2').classList.toggle('turn');
};


document.querySelector('.btn-roll').addEventListener('click', result)

                           //fonction hold

function hold () {
if(gaming = true) {

scoreTotal += score;
document.querySelector('.score' + player).textContent = scoreTotal;
console.log(scoreTotal)
nextPlayer(); 

}
else {
  gaming = false;
}};


document.querySelector('.btn-hold').addEventListener('click', hold)

                          //function reset
function reset () {

  player = 1;
  gaming = true;
  score = 0;
  scoreTotal = 0;

  document.querySelector('.scoreCurrent1').textContent = '0';
  document.querySelector('.scoreCurrent2').textContent = '0';
  document.querySelector('.score1').textContent = '0';
  document.querySelector('.score2').textContent = '0';
  document.querySelector('.player1').classList.add('turn');
  document.querySelector('.player2').classList.remove('turn');
};

document.querySelector('.btn-game').addEventListener('click', reset)