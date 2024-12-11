export function updateGameText(gameStats) {
  return {
    playerMove:
      gameStats.playerMoveNum === 1
        ? "rock"
        : gameStats.playerMoveNum === 2
        ? "paper"
        : "scissors",
    computerMove:
      gameStats.computerMoveNum === 1
        ? "rock"
        : gameStats.computerMoveNum === 2
        ? "paper"
        : "scissors"
  };
}
