import { useState } from "react";

export default function RockPaperScissors() {
  const [gameStats, setGameStats] = useState({
    isAutoPlaying: false,
    score: {
      wins: 0,
      losses: 0,
      ties: 0
    },
    prevGameResult: null // this will usually be a number 1-3 that indicates win/loss/tie
  });

  return (
    <div className="page-container">
      <h2>Rock Paper Scissors</h2>
      <div className="game-board">
        <button className="rock-button">
          <img src="rps-images/rock-emoji.png" alt="" />
        </button>
        <button className="paper-button">
          <img src="rps-images/paper-emoji.png" alt="" />
        </button>
        <button className="scissors-button">
          <img src="rps-images/scissors-emoji.png" alt="" />
        </button>
      </div>
    </div>
  );
}
