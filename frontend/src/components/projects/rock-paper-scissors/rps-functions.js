export function updateGameText(playerMoveNum, computerMoveNum) {
  return {
    playerMove:
      playerMoveNum === 1 ? "rock" : playerMoveNum === 2 ? "paper" : "scissors",
    computerMove:
      computerMoveNum === 1
        ? "rock"
        : computerMoveNum === 2
        ? "paper"
        : "scissors"
  };
}
