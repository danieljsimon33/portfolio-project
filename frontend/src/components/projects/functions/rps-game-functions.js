export function computerMove() {
  return Math.ceil(Math.random() * 3);
}

export function moveNumToText(num) {
  return num === 1 ? "rock" : num === 2 ? "paper" : "scissors";
}

export function gameResultNumToText(num) {
  return num === 1 ? "win" : num === 2 ? "loss" : "tie";
}

export function gameScoresArray(gameResultNum) {
  let resultNumArray = [0, 0, 0];

  switch (gameResultNum) {
    case 1:
      resultNumArray[0]++;
    case 2:
      resultNumArray[1]++;
    case 3:
      resultNumArray[2]++;
  }

  return resultNumArray;
}

export function numericalPlayGame(playerMoveNum, computerMoveNum) {
  let moveDiff = playerMoveNum - computerMoveNum;

  if (Math.abs(moveDiff) == 2) {
    moveDiff = -moveDiff;
  }

  switch (Math.sign(moveDiff)) {
    case 0:
      return 3;
    case -1:
      return 2;
    case 1:
      return 1; //win
  }
}
