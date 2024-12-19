export default function GameBoard({ handleSelectMove }) {
  return (
    <div className="game-board">
      <button className="rps-move-button" onClick={() => handleSelectMove(1)}>
        <img
          src="rps-images/rock-emoji.png"
          alt="rock"
          className="rps-move-image"
        />
      </button>

      <button className="rps-move-button" onClick={() => handleSelectMove(2)}>
        <img
          src="rps-images/paper-emoji.png"
          alt="paper"
          className="rps-move-image"
        />
      </button>

      <button className="rps-move-button" onClick={() => handleSelectMove(3)}>
        <img
          src="rps-images/scissors-emoji.png"
          alt="scissors"
          className="rps-move-image"
        />
      </button>
    </div>
  );
}
