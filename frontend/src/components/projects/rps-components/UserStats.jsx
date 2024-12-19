export default function UserStats() {
  function handleUpdateUserStats() {
    // get stuff from local storage
    // re-render
  }

  return (
    <div className="user-stats">
      <button onClick={() => handleUpdateUserStats}>
        Update User Statistics
      </button>
    </div>
  );
}
