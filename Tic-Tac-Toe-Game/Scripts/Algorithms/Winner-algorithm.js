function CheckWinner(computerSymbol, playerSymbol, multiplayer = 0)
{ 
  const FreeButtons=Array.from(document.querySelectorAll('button')).filter(button => button.innerHTML === '');

  let allButtons = getAllButtons();

  let C = computerSymbol;
  let P = playerSymbol;

  if((FreeButtons.length === 0 || FreeButtons.length >= 0)
  &&((allButtons.button_A.innerHTML === P && allButtons.button_B.innerHTML === P && allButtons.button_C.innerHTML === P )
  ||(allButtons.button_D.innerHTML === P && allButtons.button_E.innerHTML === P && allButtons.button_F.innerHTML === P )
  ||(allButtons.button_G.innerHTML === P && allButtons.button_H.innerHTML === P && allButtons.button_I.innerHTML === P )
  ||(allButtons.button_A.innerHTML === P && allButtons.button_D.innerHTML === P && allButtons.button_G.innerHTML === P )
  ||(allButtons.button_B.innerHTML === P && allButtons.button_E.innerHTML === P && allButtons.button_H.innerHTML === P )
  ||(allButtons.button_C.innerHTML === P && allButtons.button_F.innerHTML === P && allButtons.button_I.innerHTML === P )
  ||(allButtons.button_A.innerHTML === P && allButtons.button_E.innerHTML === P && allButtons.button_I.innerHTML === P )
  ||(allButtons.button_C.innerHTML === P && allButtons.button_E.innerHTML === P && allButtons.button_G.innerHTML === P )))
  {
    if (multiplayer === 0)
    {
      document.querySelector('.Winner').innerHTML='You Won';
      onePlayerScore.Wins++;
    }
    else
    {
      document.querySelector('.Winner').innerHTML=`Player x won`
      twoPlayerScore.playerXWins++;
    }
    FreeButtons.forEach((button) => button.innerHTML=" ");
    return 1;
  }
  else if (
    (allButtons.button_A.innerHTML === C && allButtons.button_B.innerHTML === C && allButtons.button_C.innerHTML === C )
  ||(allButtons.button_D.innerHTML === C && allButtons.button_E.innerHTML === C && allButtons.button_F.innerHTML === C )
  ||(allButtons.button_G.innerHTML === C && allButtons.button_H.innerHTML === C && allButtons.button_I.innerHTML === C )
  ||(allButtons.button_A.innerHTML === C && allButtons.button_D.innerHTML === C && allButtons.button_G.innerHTML === C )
  ||(allButtons.button_B.innerHTML === C && allButtons.button_E.innerHTML === C && allButtons.button_H.innerHTML === C )
  ||(allButtons.button_C.innerHTML === C && allButtons.button_F.innerHTML === C && allButtons.button_I.innerHTML === C )
  ||(allButtons.button_A.innerHTML === C && allButtons.button_E.innerHTML === C && allButtons.button_I.innerHTML === C )
  ||(allButtons.button_C.innerHTML === C && allButtons.button_E.innerHTML === C && allButtons.button_G.innerHTML === C ))
  {
    if (multiplayer === 0)
      {
        document.querySelector('.Winner').innerHTML = 'You Lost';
        onePlayerScore.Losses++;
      }
      else
      {
        document.querySelector('.Winner').innerHTML = `Player o won`
        twoPlayerScore.playerOWins++;
      }
    FreeButtons.forEach((button) => button.innerHTML = " ");
    return 1;
  }
  else if(FreeButtons.length === 0)
  {
    document.querySelector('.Winner').innerHTML = 'You Drew';
    if (multiplayer === 0)
      onePlayerScore.Ties++;
    else
      twoPlayerScore.Ties++;

    return 1;
  }
  else
    return 0;
}