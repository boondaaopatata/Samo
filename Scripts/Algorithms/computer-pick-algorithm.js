function CheckForBestPick(difficultyMode,Pick,computerSymbol,playerSymbol)
{
  let bestPick;
  if(difficultyMode===1)
  {
    bestPick=easyMode(Pick);
  }
  else if(difficultyMode===2)
  {
    bestPick=mediumMode(difficultyMode,Pick,computerSymbol,playerSymbol);
  }
  else if(difficultyMode===3)
  {
    bestPick=mediumMode(difficultyMode,Pick,computerSymbol,playerSymbol);
  }
  return bestPick;
}
function easyMode(Pick)
{
  return Pick[0];
}
function mediumMode(difficultyMode,Pick,computerSymbol,playerSymbol)
{
  let allButtons = getAllButtons();

  let C = computerSymbol;
  let P = playerSymbol;

  for(let i=0;i<Pick.length;i++)
  {
    if(Pick[i]==='g'
    &&((allButtons.button_A.innerHTML === C && allButtons.button_D.innerHTML === C)
    ||(allButtons.button_H.innerHTML === C && allButtons.button_I.innerHTML === C)
    ||(allButtons.button_E.innerHTML === C && allButtons.button_C.innerHTML === C)))
    {
      return 'g';
    }
    else if(Pick[i]==='h'
    &&((allButtons.button_B.innerHTML === C && allButtons.button_E.innerHTML === C)
    ||(allButtons.button_G.innerHTML === C && allButtons.button_I.innerHTML === C)))
    {
      return 'h';
    }
    else if(Pick[i]==='i'
    &&((allButtons.button_C.innerHTML === C && allButtons.button_F.innerHTML === C)
    ||(allButtons.button_G.innerHTML === C && allButtons.button_H.innerHTML === C)
    ||(allButtons.button_A.innerHTML === C && allButtons.button_E.innerHTML === C)))
    {
      return 'i';
    }
    else if(Pick[i]==='a'
    &&((allButtons.button_D.innerHTML === C && allButtons.button_G.innerHTML === C)
    ||(allButtons.button_B.innerHTML === C && allButtons.button_C.innerHTML === C)
    ||(allButtons.button_E.innerHTML === C && allButtons.button_I.innerHTML === C)))
    {
      return 'a';
    }
    else if(Pick[i]==='b'
    &&((allButtons.button_E.innerHTML === C && allButtons.button_H.innerHTML === C)
    ||(allButtons.button_A.innerHTML === C && allButtons.button_C.innerHTML === C)))
    {
      return 'b';
    }
    else if(Pick[i]==='c'
    &&((allButtons.button_F.innerHTML === C && allButtons.button_I.innerHTML === C)
    ||(allButtons.button_A.innerHTML === C && allButtons.button_B.innerHTML === C)
    ||(allButtons.button_G.innerHTML === C && allButtons.button_E.innerHTML === C)))
    {
      return 'c';
    }
    else if(Pick[i]==='f'
    &&((allButtons.button_D.innerHTML === C && allButtons.button_E.innerHTML === C)
    ||(allButtons.button_C.innerHTML === C && allButtons.button_I.innerHTML === C)))
    {
      return 'f';
    }
    else if(Pick[i]==='d'
    &&((allButtons.button_E.innerHTML === C && allButtons.button_F.innerHTML === C)
    ||(allButtons.button_A.innerHTML === C && allButtons.button_G.innerHTML === C)))
    {
      return 'd';
    }
    else if(Pick[i]==='e'
    &&((allButtons.button_D.innerHTML === C && allButtons.button_F.innerHTML === C)
    ||(allButtons.button_B.innerHTML === C && allButtons.button_H.innerHTML === C)
    ||(allButtons.button_A.innerHTML === C && allButtons.button_I.innerHTML === C)
    ||(allButtons.button_C.innerHTML === C && allButtons.button_G.innerHTML === C)))
    {
      return 'e';
    }
  }
    //second best
  for(let i=0;i<Pick.length;i++)
  {
    if(Pick[i]==='g'
    &&((allButtons.button_A.innerHTML === P && allButtons.button_D.innerHTML === P)
    ||(allButtons.button_H.innerHTML === P && allButtons.button_I.innerHTML === P)
    ||(allButtons.button_E.innerHTML === P && allButtons.button_C.innerHTML === P)))
    {
      return 'g';
    }
    else if(Pick[i]==='h'
    &&((allButtons.button_B.innerHTML === P && allButtons.button_E.innerHTML === P)
    ||(allButtons.button_G.innerHTML === P && allButtons.button_I.innerHTML === P)))
    {
      return 'h';
    }
    else if(Pick[i]==='i'
    &&((allButtons.button_C.innerHTML === P && allButtons.button_F.innerHTML === P)
    ||(allButtons.button_G.innerHTML === P && allButtons.button_H.innerHTML === P)
    ||(allButtons.button_A.innerHTML === P && allButtons.button_E.innerHTML === P)))
    {
      return 'i';
    }
    else if(Pick[i]==='a'
    &&((allButtons.button_D.innerHTML === P && allButtons.button_G.innerHTML === P)
    ||(allButtons.button_B.innerHTML === P && allButtons.button_C.innerHTML === P)
    ||(allButtons.button_E.innerHTML === P && allButtons.button_I.innerHTML === P)))
    {
      return 'a';
    }
    else if(Pick[i]==='b'
    &&((allButtons.button_E.innerHTML === P && allButtons.button_H.innerHTML === P)
    ||(allButtons.button_A.innerHTML === P && allButtons.button_C.innerHTML === P)))
    {
      return 'b';
    }
    else if(Pick[i]==='c'
    &&((allButtons.button_F.innerHTML === P && allButtons.button_I.innerHTML === P)
    ||(allButtons.button_A.innerHTML === P && allButtons.button_B.innerHTML === P)
    ||(allButtons.button_G.innerHTML === P && allButtons.button_E.innerHTML === P)))
    {
      return 'c';
    }
    else if(Pick[i]==='f'
    &&((allButtons.button_D.innerHTML === P && allButtons.button_E.innerHTML === P)
    ||(allButtons.button_C.innerHTML === P && allButtons.button_I.innerHTML === P)))
    {
      return 'f';
    }
    else if(Pick[i]==='d'
    &&((allButtons.button_E.innerHTML === P && allButtons.button_F.innerHTML === P)
    ||(allButtons.button_A.innerHTML === P && allButtons.button_G.innerHTML === P)))
    {
      return 'd';
    }
    else if(Pick[i]==='e'
    &&((allButtons.button_D.innerHTML === P && allButtons.button_F.innerHTML === P)
    ||(allButtons.button_B.innerHTML === P && allButtons.button_H.innerHTML === P)
    ||(allButtons.button_A.innerHTML === P && allButtons.button_I.innerHTML === P)
    ||(allButtons.button_C.innerHTML === P && allButtons.button_G.innerHTML === P)))
    {
      return 'e';
    }
  }
  let bestPick;
  if(difficultyMode===3)
  {
    bestPick=hardMode(Pick,computerSymbol,playerSymbol);
  }
  else
  {
    bestPick=easyMode(Pick);
  }
  return bestPick;
}
function hardMode(Pick,computerSymbol,playerSymbol)
{
  let allButtons = getAllButtons();

  let C = computerSymbol;
  let P = playerSymbol;

  for(let j=0;j<Pick.length;j++)
  {
    //third best
    if(Pick[j]==='e'
    &&(allButtons.button_A.innerHTML === P||allButtons.button_B.innerHTML === P
    ||allButtons.button_C.innerHTML === P||allButtons.button_D.innerHTML === P
    ||allButtons.button_F.innerHTML === P||allButtons.button_G.innerHTML === P
    ||allButtons.button_H.innerHTML === P||allButtons.button_I.innerHTML === P))
    {
      return 'e';
    }
  }
  for(let j=0;j<Pick.length;j++)
  {
    if(Pick[j]==='a'
    &&(allButtons.button_B.innerHTML === P||allButtons.button_E.innerHTML === P
    ||allButtons.button_D.innerHTML === P))
    {
      return 'a';
    }
    else if(Pick[j]==='b'
    &&(allButtons.button_A.innerHTML === P||allButtons.button_C.innerHTML === P
    ||allButtons.button_D.innerHTML === P||allButtons.button_E.innerHTML === P
    ||allButtons.button_F.innerHTML === P))
    {
      return 'b';
    }
    else if(Pick[j]==='c'
    &&(allButtons.button_B.innerHTML === P||allButtons.button_E.innerHTML === P
    ||allButtons.button_F.innerHTML === P))
    {
      return 'c';
    }
    else if(Pick[j]==='d'
    &&(allButtons.button_A.innerHTML === P||allButtons.button_B.innerHTML === P
    ||allButtons.button_E.innerHTML === P||allButtons.button_H.innerHTML === P
    ||allButtons.button_G.innerHTML === P))
    {
      return 'd';
    }
    else if(Pick[j]==='f'
    &&(allButtons.button_C.innerHTML === P||allButtons.button_B.innerHTML === P
    ||allButtons.button_E.innerHTML === P||allButtons.button_H.innerHTML === P
    ||allButtons.button_I.innerHTML === P))
    {
      return 'f';
    }
    else if(Pick[j]==='g'
    &&(allButtons.button_D.innerHTML === P||allButtons.button_E.innerHTML === P
    ||allButtons.button_H.innerHTML === P))
    {
      return 'g';
    }
    else if(Pick[j]==='h'
    &&(allButtons.button_G.innerHTML === P||allButtons.button_D.innerHTML === P
    ||allButtons.button_E.innerHTML === P||allButtons.button_F.innerHTML === P
    ||allButtons.button_I.innerHTML === P))
    {
      return 'h';
    }
    else if(Pick[j]==='i'
    &&(allButtons.button_F.innerHTML === P||allButtons.button_E.innerHTML === P
    ||allButtons.button_H.innerHTML === P))
    {
      return 'i';
    }
    //fourth best
    else if(Pick[j]==='e'
    &&(allButtons.button_A.innerHTML === C||allButtons.button_B.innerHTML === C
    ||allButtons.button_C.innerHTML === C||allButtons.button_D.innerHTML === C
    ||allButtons.button_F.innerHTML === C||allButtons.button_G.innerHTML === C
    ||allButtons.button_H.innerHTML === C||allButtons.button_I.innerHTML === C))
    {
      return 'e';
    }
    else if(Pick[j]==='a'
    &&(allButtons.button_B.innerHTML === C||allButtons.button_E.innerHTML === C
    ||allButtons.button_D.innerHTML === C))
    {
      return 'a';
    }
    else if(Pick[j]==='b'
    &&(allButtons.button_A.innerHTML === C||allButtons.button_C.innerHTML === C
    ||allButtons.button_D.innerHTML === C||allButtons.button_E.innerHTML === C
    ||allButtons.button_F.innerHTML === C))
    {
      return 'b';
    }
    else if(Pick[j]==='c'
    &&(allButtons.button_B.innerHTML === C||allButtons.button_E.innerHTML === C
    ||allButtons.button_F.innerHTML === C))
    {
      return 'c';
    }
    else if(Pick[j]==='d'
    &&(allButtons.button_A.innerHTML === C||allButtons.button_B.innerHTML === C
    ||allButtons.button_E.innerHTML === C||allButtons.button_H.innerHTML === C
    ||allButtons.button_G.innerHTML === C))
    {
      return 'd';
    }
    else if(Pick[j]==='f'
    &&(allButtons.button_C.innerHTML === C||allButtons.button_B.innerHTML === C
    ||allButtons.button_E.innerHTML === C||allButtons.button_H.innerHTML === C
    ||allButtons.button_I.innerHTML === C))
    {
      return 'f';
    }
    else if(Pick[j]==='g'
    &&(allButtons.button_D.innerHTML === C||allButtons.button_E.innerHTML === C
    ||allButtons.button_H.innerHTML === C))
    {
      return 'g';
    }
    else if(Pick[j]==='h'
    &&(allButtons.button_G.innerHTML === C||allButtons.button_D.innerHTML === C
    ||allButtons.button_E.innerHTML === C||allButtons.button_F.innerHTML === C
    ||allButtons.button_I.innerHTML === C))
    {
      return 'h';
    }
    else if(Pick[j]==='i'
    &&(allButtons.button_F.innerHTML === C||allButtons.button_E.innerHTML === C
    ||allButtons.button_H.innerHTML === C))
    {
      return 'i';
    }
  }
  bestPick=easyMode(Pick);
  return bestPick;
}
