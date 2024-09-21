function difficultyModeMenu(Player)
{
  document.querySelector('.Choose-player').innerHTML=`
  <div class="difficulty-page-grid">
    <div class="mode-button-grid">
      <button class="mode-button easy-mode-button" onclick="startGame(${Player},1);">Easy</button>
      <button class="mode-button medium-mode-button" onclick="startGame(${Player},2);">Medium</button>
      <button class="mode-button hard-mode-button" onclick="startGame(${Player},3);">Hard</button>
    </div>
    <a href='game-frame.html'><button class="main-menu-1">Main Menu</button></a>
  </div>`;
}