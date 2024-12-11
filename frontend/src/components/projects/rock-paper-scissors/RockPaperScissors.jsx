import { useState } from "react";

export default function RockPaperScissors() {
  const [gameStats, setGameStats] = useState({
    scores: {
      wins: 0,
      losses: 0,
      ties: 0
    },
    gameResult: null // this will usually be a number 1-3 that indicates win/loss/tie
  });
  const [gameStatsText, setGameStatsText] = useState({
    playerMoveText: null,
    computerMoveText: null,
    gameResultText: ""
  });
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  return (
    <div className="page-container">
      <h2>Rock Paper Scissors</h2>

      <div className="game-board">
        <button className="rock-button">
          <img src="rps-images/rock-emoji.png" alt="rock" />
        </button>

        <button className="paper-button">
          <img src="rps-images/paper-emoji.png" alt="paper" />
        </button>

        <button className="scissors-button">
          <img src="rps-images/scissors-emoji.png" alt="scissors" />
        </button>
      </div>

      <div className="results-board">
        <p className="picks">
          You picked:
          {gameStatsText.playerMoveText ? (
            <img
              src={`rps-images/${gameStatsText.playerMoveText}-emoji.png`}
              alt="player move"
            />
          ) : (
            " no move selected. "
          )}
          Computer picked:
          {gameStatsText.computerMoveText ? (
            <img
              src={`rps-images/${gameStatsText.computerMoveText}-emoji.png`}
              alt="computer move"
            />
          ) : (
            " please select a move to start a round."
          )}
        </p>
        <p className="results">
          Results:
          {gameStats.gameResult === null
            ? ""
            : gameStats.gameResult === 1
            ? "you won"
            : gameStats.gameResult === 2
            ? "you lost"
            : "tie"}
        </p>
        <p className="scores">
          Wins: {gameStats.scores.wins} Losses: {gameStats.scores.losses} Ties:{" "}
          {gameStats.scores.ties}
        </p>
      </div>

      <button className="reset-button">Reset Game</button>
      <button onclick={() => setIsAutoPlaying((prevValue) => !prevValue)}>
        Auto Play: {isAutoPlaying ? "ON" : "OFF"}
      </button>
    </div>
  );
}
// to do: decide where the game result text is set
