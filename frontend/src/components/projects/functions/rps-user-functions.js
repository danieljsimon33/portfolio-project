// import env from "react-dotenv";
import { backendUrl } from "../../auth/variables.js";

export async function updateStats(userId, wins, losses, ties) {
  try {
    const response = await fetch(`${backendUrl}/update-stats`, {
      method: "POST",
      headers: {
        "Content-Type": "applicaton/json"
      },
      body: JSON.stringify({
        userId: userId,
        stats: { newWins: wins, newLosses: losses, newTies: ties }
      })
    });

    if (!response.ok) {
      const errorText = await response.json();
      throw new Error(errorText);
    }

    const responseData = await response.json();

    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
}

export async function getStats(userId) {
  try {
    const response = await fetch(`${backendUrl}/get-stats`, {
      method: "GET",
      headers: {
        "Content-Type": "applicaton/json"
      },
      body: JSON.stringify({
        userId: userId
      })
    });

    if (!response.ok) {
      const errorText = await response.json();
      throw new Error(errorText);
    }

    const responseData = await response.json();

    return responseData?.stats;
  } catch (error) {
    console.log(error);
  }
}

export async function getLeaderboard() {
  try {
    const response = await fetch(`${backendUrl}/get-leaderboard`, {
      method: "GET",
      headers: {
        "Content-Type": "applicaton/json"
      }
    });

    if (!response.ok) {
      const errorText = await response.json();
      throw new Error(errorText);
    }

    const responseData = await response.json();

    return responseData?.childArray;
  } catch (error) {
    console.log(error);
  }
}
