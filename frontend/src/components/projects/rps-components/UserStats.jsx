import { updateStats } from "../functions/rps-user-functions";
import React from "react";

export default function UserStats() {
  function handleUpdateUserStats() {
    updateStats(
      localStorage.getItem("token"),
      localStorage.getItem("wins"),
      localStorage.getItem("losses"),
      localStorage.getItem("ties")
    );
    // re-render
  }

  return (
    <div className="user-stats">
      <button onClick={() => handleUpdateUserStats}>
        Update User Statistics
      </button>

      <p>Your wins:</p>
      <p>Your losses:</p>
      <p>Your ties:</p>
    </div>
  );
}
