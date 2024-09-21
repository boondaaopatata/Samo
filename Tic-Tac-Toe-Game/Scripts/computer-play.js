function ComputerPlay(difficultyMode,computerSymbol,playerSymbol)
{
  let i=0;
  let Pick=[];
  let BestPick;
  let choice=['a','b','c','d','e','f','g','h','i'];
  shuffleArray(choice); 
  while(i<9)
  {
    if(document.querySelector(`.${choice[i]}`).innerHTML === '')
    {
      Pick.push(choice[i]);
    }
    i++;
  }
  BestPick=CheckForBestPick(difficultyMode,Pick,computerSymbol,playerSymbol);
  document.querySelector(`.${BestPick}`).innerHTML = computerSymbol;
  
  if(CheckWinner(computerSymbol,playerSymbol) === 1)
  {
    document.querySelector('.displayResult').innerHTML = `Wins: ${onePlayerScore.Wins}, Losses: ${onePlayerScore.Losses}, Ties: ${onePlayerScore.Ties}`;
    return;
  }
}

function shuffleArray(array) 
{
  for (let i = array.length - 1; i > 0; i--) 
  {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
