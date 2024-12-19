import "./RockPaperScissors.css";

import GameBoard from "../rps-components/GameBoard.jsx";
import Leaderboard from "../rps-components/Leaderboard.jsx";
import UserStats from "../rps-components/UserStats.jsx";
import ResultsBoard from "../rps-components/ResultsBoard.jsx";

import { altHandleSelectMove } from "../functions/rps-storage-functions.js";

export default function RockPaperScissors() {
  function handleSelectMove(moveNum) {
    altHandleSelectMove(moveNum);
  }

  return (
    <div className="page-container">
      <h2>Rock, Paper, Scissors!</h2>

      <GameBoard handleSelectMove={handleSelectMove} />

      <ResultsBoard />

      <Leaderboard />
      {/* <UserStats /> */}
    </div>
  );
}
/* 
- show player stats
  - update stats button
- show leaderboard
  - update leaderboard button
  - (?) change which column it is ranked by
- (?) show stats of most recent game
*/
