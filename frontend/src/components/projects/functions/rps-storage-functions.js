export function updateLocalStorage(itemName, addNum) {
  let oldNum = 0;
  oldNum += parseInt(localStorage.getItem(itemName));
  localStorage.setItem(itemName, oldNum + addNum);
}

export function addResultsToLocalStorage(resultsArray) {
  updateLocalStorage("wins", resultsArray[0]);
  updateLocalStorage("losses", resultsArray[1]);
  updateLocalStorage("ties", resultsArray[2]);
}

export function altHandleSelectMove(moveNum) {
  let newComputerMoveNum = computerMove();
  let newGameResultNum = numericalPlayGame(moveNum, newComputerMoveNum);
  let gameResultArray = gameScoresArray(newGameResultNum);

  addResultsToLocalStorage(gameResultArray);
}
