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
      <div className="game-board"></div>
    </div>
  );
}

/* 
I'm going to add in the code from my original project and adapt it to being in a jsx file rather than separate html and js files, and only then will I add a leaderboard, backend and user integration, etc.



*/
