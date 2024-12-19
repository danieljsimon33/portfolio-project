export default function ResultsBoard() {
  return <div className="results-board"></div>;
}

/* 
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
*/
// return Math.sign(moveDiff) === 0 ? 3 : Math.sign(moveDiff) === -1 ? 2 : 1;
