//add online if possible
//add chat for online
//add tips for singlplayer
//add ranked for online

const buttons = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let displayGameHere = document.querySelector('.game-here');
let difficultyMode;
let playerSymbol;
let computerSymbol;
let count;
let allButtonsIndex;
let onePlayerScore=JSON.parse(localStorage.getItem('score1'))||
  {
  Wins:0,
  Losses:0,
  Ties:0
  }

let twoPlayerScore=JSON.parse(localStorage.getItem('score2'))||
  {
  playerXWins:0,
  playerOWins:0,
  Ties:0
  }  
let playerTurn = ['x', 'o'];
let turn = 0;

function startGame(Player=0,difficultyMode=0)
{
  document.querySelectorAll('.mode-button').forEach(btn => btn.remove());
  document.querySelector('.starting-menu').innerHTML='';
  let displayResultPlace = document.querySelector('.displayResult');
  allButtonsIndex = -1;
  let gameDisplay = `
  <div class="game-display-grid">
    <div class="game-grid">`;
  
  if(Player !== 3)
  {
    buttons.forEach(letter => {
      gameDisplay += `
      <button class="${letter} ox-button" onclick="startPlay(${difficultyMode},'${letter}',${Player});"></button>`
    });
      
    gameDisplay += `
    </div>
    <p class="displayResult result"></p>
    <p class="Winner result"></p>
    <div class="lower-three-buttons-grid">
      <button class="reset-button" onclick="resetScore(0,${Player});">Reset Score</button>
      <button class="play-again-button" onclick="playAgain(${Player},${difficultyMode});">Play Again</button>`
  }
  else
  {
    buttons.forEach(letter => {
      gameDisplay += `
      <button class="${letter} ox-button" onclick="game2Player('${letter}');"></button>`
    });

    gameDisplay += `
    </div>
    <p class="displayResult result"></p>
    <p class="Winner result"></p>
    <div class="lower-three-buttons-grid">
      <button class="reset-button" onclick="resetScore(1);">Reset Score</button>
      <button class="play-again-button" onclick="playAgain();">Play Again</button>`
  }
  gameDisplay += `
      <a href='index.html'><button class="main-menu">Main Menu</button></a>
    </div>
  </div>`;
  
  displayGameHere.innerHTML = gameDisplay;

  if (Player !== 3)
    document.querySelector('.displayResult').innerHTML=`Wins: ${onePlayerScore.Wins}, Losses: ${onePlayerScore.Losses}, Ties: ${onePlayerScore.Ties}`;
  else
  document.querySelector('.displayResult').innerHTML=`Player x Wins: ${twoPlayerScore.playerXWins}, Player o Wins: ${twoPlayerScore.playerOWins}<br> Ties: ${twoPlayerScore.Ties}`;

  if(Player === 2)
  {
    playerSymbol='o';
    computerSymbol='x';
    ComputerPlay(difficultyMode,computerSymbol,playerSymbol);
  }
}

function startPlay(difficultyMode,buttonLetter,Player)
{
  if (Player===1)
  {
    playerSymbol='x';
    computerSymbol='o';
  }
  else
  {
    playerSymbol='o';
    computerSymbol='x';
  }

  let userSelectedButton=document.querySelector(`.${buttonLetter}`);

  if(userSelectedButton.innerHTML === playerSymbol || userSelectedButton.innerHTML === computerSymbol || userSelectedButton.innerHTML === ` `)
    return;
  else
    userSelectedButton.innerHTML = playerSymbol;

  if(CheckWinner(computerSymbol,playerSymbol) === 1)
  {
    document.querySelector('.displayResult').innerHTML=`Wins: ${onePlayerScore.Wins}, Losses: ${onePlayerScore.Losses}, Ties: ${onePlayerScore.Ties}`;
    return;
  }

  ComputerPlay(difficultyMode,computerSymbol,playerSymbol);

  localStorage.setItem('score1',JSON.stringify(onePlayerScore));
}

function game2Player(buttonLetter)
{
  let userSelectedButton = document.querySelector(`.${buttonLetter}`);
  
  if(userSelectedButton.innerHTML === `x` || userSelectedButton.innerHTML === `o` || userSelectedButton.innerHTML === ` `)
    return;
  else
  {
    userSelectedButton.innerHTML = `${playerTurn[turn]}`;
    turn++;
    turn = turn % 2;
  }

  if( CheckWinner('o','x',1) ===  1)
    {
      document.querySelector('.displayResult').innerHTML=`Player x Wins: ${twoPlayerScore.playerXWins}, Player o Wins: ${twoPlayerScore.playerOWins}<br> Ties: ${twoPlayerScore.Ties}`;
      return;
    }

    localStorage.setItem('score2',JSON.stringify(twoPlayerScore));
}

function getAllButtons() {
  let allButtons = {};

  buttons.forEach(letter => {
    allButtons[`button_${letter.toUpperCase()}`] = document.querySelector(`.${letter}`);
  });

  return allButtons;
}