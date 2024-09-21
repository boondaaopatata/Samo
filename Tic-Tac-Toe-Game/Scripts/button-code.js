function resetScore(twoPlayermode = 0, Player = 0)
{
  if (twoPlayermode === 0)
  {
    Object.keys(onePlayerScore).forEach(key => onePlayerScore[key] = 0 );
    localStorage.removeItem('score1');
    document.querySelector('.displayResult').innerHTML = `Wins: ${onePlayerScore.Wins}, Losses: ${onePlayerScore.Losses}, Ties: ${onePlayerScore.Ties}`;
    playAgain(Player,difficultyMode);
  }
  else
  {
    Object.keys(twoPlayerScore).forEach(key => twoPlayerScore[key] = 0 );
    localStorage.removeItem('score2');
    document.querySelector('.displayResult').innerHTML = `Player x Wins: ${twoPlayerScore.playerXWins}, Player o Wins: ${twoPlayerScore.playerOWins}<br> Ties: ${twoPlayerScore.Ties}`;
    playAgain();
  }
}

function playAgain(Player = 3, difficultyMode = 0)
{
  document.querySelectorAll('.ox-button').forEach(button => button.innerHTML = '' );
  document.querySelector('.Winner').innerHTML = '';

  turn = 0;

  if(player === 3)
    startGame()
  else
    startGame(Player,difficultyMode);
}