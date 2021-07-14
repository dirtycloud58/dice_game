var player, nextPlayer, score, scoreTotal;

                           //fonction résultat

function result () {

var number = Math.floor(Math.random() * 6) + 1;

var x = document.querySelector('.dice');
x.src = 'images/dice-' + number + '.png';
console.log(number)

if(number !== 1) {

document.querySelector('#scoreCurrent' + player).textContent = score;
score += number;
}

else {
  nextPlayer ();
}};
                       //fonction joueur suivant
function nextPlayer () {

player === 1 ? player = 2 : player = 1;
score = 0;

document.querySelector('#scoreCurrent1').textContent = 0;
document.querySelector('#scoreCurrent2').textContent = 0;
}

document.querySelector('.btn-roll').addEventListener('click', result)

                           //fonction hold
function hold () {

document.querySelector('#score' + player).textContent = scoreTotal;
scoreTotal += score;
nextPlayer() 
}


document.querySelector('.btn-hold').addEventListener('click', hold)