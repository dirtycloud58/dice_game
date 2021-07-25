<!DOCTYPE html>
<html lang="fr">
  <head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="keywords" content="Musical Riot">
  <meta name="description" content="jeu de dés">
	<link href="style.css" rel="stylesheet" type="text/css"/>
	<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Jeu de dés</title>
</head>
  <body>
  <div class="container-fluid">

	<div class="row vh-100 p-md-5">
		<div class="col-6 player1 turn">
			<h1 class="text-center title">
				PLAYER 1
			</h1>
			<p class="text-center score1">0</small>
			</p>
				<div class="box1">
					<h3 class="text-center current1">Current</h3>
        <div class="text-center scoreCurrent1">0</div>
				</div>
			</div>
      
		<div class="col-6 player2">
			<h1 class="text-center title">
				PLAYER 2
			</h1>
			<p class="text-center score2">0</small>
			</p>

				<div class="box2">
					<h3 class="text-center current2">Current</h3>
        <div class="text-center scoreCurrent2">0</div>
				</div>
            <button type="button" class="btn-regle" data-toggle="modal" data-target="#exampleModalCenter">
  régles
</button>

			</div>
		</div>	 
    <button type="button" class="btn-game" id="NEW"><img src="images/plus-circle-solid.svg" class="icon"></img>New game</button>
    <button type="button" class="btn-roll" id="ROLL"><img src="images/undo-alt-solid.svg" class="icon">Roll dice</button>
    <button type="button" class="btn-hold" id="HOLD"><img src="images/arrow-alt-circle-right-solid.svg" class="icon">Hold</button>
    <img src="images/dice-5.png" class="rounded mx-auto d-block dice" alt="dice">

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Régles</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <p>Le jeu comprend 2 joueurs sur un seul et même écran.<br>
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).<br>
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
résultat d’un lancer est ajouté au ROUND.<br>
Lors de son tour, le joueur peut décider à tout moment de:<br>
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur.<br>
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.</p>
      </div>
   
    </div>
  </div>
</div>

<div class="modal" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Winner</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>FELICITATION, le joueur 1 remporte la partie !</p>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="myModal2" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Winner</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>FELICITATION, le joueur 2 remporte la partie !</p>
      </div>
    </div>
  </div>
</div>

  </div>

    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>