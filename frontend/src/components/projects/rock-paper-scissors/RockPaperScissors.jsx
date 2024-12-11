import { useState } from "react";

import "./RockPaperScissors.css";

import {
  numericalPlayGame,
  computerMove,
  gameScoresArray,
  gameResultNumToText,
  moveNumToText
} from "./rps-functions.js";

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

  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  function handleSetAutoPlay() {
    setIsAutoPlaying((prevValue) => !prevValue);
  }

  function handleSelectMove(moveNum) {
    setGameStats((prevStats) => {
      let newComputerMoveNum = computerMove();
      let newGameResultNum = numericalPlayGame(moveNum, newComputerMoveNum);
      let gameResultArray = gameScoresArray(newGameResultNum);

      setGameStatsText(() => ({
        playerMoveText: moveNumToText(moveNum),
        computerMoveText: moveNumToText(newComputerMoveNum),
        gameResultText: gameResultNumToText(newGameResultNum)
      }));

      return {
        scores: {
          wins: prevStats.scores.wins + gameResultArray[0],
          losses: prevStats.scores.losses + gameResultArray[1],
          ties: prevStats.scores.ties + gameResultArray[2]
        }
      };
    });
  }

  return (
    <div className="page-container">
      <h2>Rock Paper Scissors</h2>

      <div className="game-board">
        <button className="rps-move-button" onClick={handleSelectMove(1)}>
          <img
            src="rps-images/rock-emoji.png"
            alt="rock"
            className="rps-move-image"
            onClick={() => handleSelectMove(1)}
          />
        </button>

        <button className="rps-move-button" onClick={handleSelectMove(2)}>
          <img
            src="rps-images/paper-emoji.png"
            alt="paper"
            className="rps-move-image"
            onClick={() => handleSelectMove(2)}
          />
        </button>

        <button className="rps-move-button" onClick={handleSelectMove(3)}>
          <img
            src="rps-images/scissors-emoji.png"
            alt="scissors"
            className="rps-move-image"
            onClick={() => handleSelectMove(3)}
          />
        </button>
      </div>

      <div className="results-board">
        <p className="rps-info">
          You picked:
          {gameStatsText.playerMoveText ? (
            <img
              src={`rps-images/${gameStatsText.playerMoveText}-emoji.png`}
              alt="player move"
              className="rps-results-image"
            />
          ) : (
            " no move selected. "
          )}
          Computer picked:
          {gameStatsText.computerMoveText ? (
            <img
              src={`rps-images/${gameStatsText.computerMoveText}-emoji.png`}
              alt="computer move"
              className="rps-results-image"
            />
          ) : (
            " please select a move to start a round."
          )}
        </p>

        <p className="rps-info">Results: {gameStatsText.gameResultText}</p>

        <p className="rps-info">
          Wins: {gameStats.scores.wins} Losses: {gameStats.scores.losses} Ties:{" "}
          {gameStats.scores.ties}
        </p>
      </div>

      <button className="reset-button">Reset Game</button>
      <button onClick={() => handleSetAutoPlay}>
        Auto Play: {isAutoPlaying ? "ON" : "OFF"}
      </button>
    </div>
  );
}
