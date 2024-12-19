import { useState } from "react";
import "./RockPaperScissors.css";

import GameBoard from "../rps-components/GameBoard.jsx";
import Leaderboard from "../rps-components/Leaderboard.jsx";
import UserStats from "../rps-components/UserStats.jsx";
import ResultsBoard from "../rps-components/ResultsBoard.jsx";

import {
  numericalPlayGame,
  computerMove,
  gameScoresArray,
  gameResultNumToText,
  moveNumToText,
  updateLocalStorage
} from "../functions/rps-functions.js";

export default function RockPaperScissors() {
  const [gameStats, setGameStats] = useState({
    scores: {
      wins: 0,
      losses: 0,
      ties: 0
    }
  });

  const [gameStatsText, setGameStatsText] = useState({
    playerMoveText: null,
    computerMoveText: null,
    gameResultText: ""
  });

  function handleSelectMove(moveNum) {
    let newComputerMoveNum = computerMove();
    let newGameResultNum = numericalPlayGame(moveNum, newComputerMoveNum);
    let gameResultArray = gameScoresArray(newGameResultNum);

    handleSetGameStats(gameResultArray);
    handleSetGameStatsText(moveNum, newGameResultNum, newComputerMoveNum);
  }

  function handleSelectMoveTwo(moveNum) {
    let newComputerMoveNum = computerMove();
    let newGameResultNum = numericalPlayGame(moveNum, newComputerMoveNum);
    let gameResultArray = gameScoresArray(newGameResultNum);

    addResultsToLocalStorage(gameResultArray);
  }

  function addResultsToLocalStorage(resultsArray) {
    updateLocalStorage("wins", resultsArray[0]);
    updateLocalStorage("losses", resultsArray[1]);
    updateLocalStorage("ties", resultsArray[2]);
  }

  function handleSetGameStats(gameResultArray) {
    setGameStats((prevStats) => ({
      scores: {
        wins: prevStats.scores.wins + gameResultArray[0],
        losses: prevStats.scores.losses + gameResultArray[1],
        ties: prevStats.scores.ties + gameResultArray[2]
      }
    }));
  }

  // prettier-ignore
  function handleSetGameStatsText(moveNum, newGameResultNum, newComputerMoveNum) {
    setGameStatsText(() => ({
      playerMoveText: moveNumToText(moveNum),
      computerMoveText: moveNumToText(newComputerMoveNum),
      gameResultText: gameResultNumToText(newGameResultNum)
    }));
  }

  return (
    <div className="page-container">
      <h2>Rock, Paper, Scissors!</h2>

      <GameBoard handleSelectMove={handleSelectMove} />

      <ResultsBoard />

      <button className="render-button">Update Leaderboard</button>

      <Leaderboard />
      <UserStats />
    </div>
  );
}
