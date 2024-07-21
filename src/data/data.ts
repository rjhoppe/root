import { quitGame, startGame } from "../utils/utils"

export const MENU_BUTTONS = [
  { label: 'Play', onClick: startGame },
  { label: 'About', onClick: startGame },
  { label: 'How to Play', onClick: startGame }
];

// export const MENU_BUTTONS = menuBtns.map(obj => ({...obj}));

export const gameBtns = [
  {label: 'Quit'}
];

export const endGameBtns = [
  {label: 'Play Again?', color: 'blue', onClick: startGame},
  {label: 'Home', color: 'blue', onClick: startGame}
];

