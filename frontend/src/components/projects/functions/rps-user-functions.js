export async function updateStats(userId, wins, losses, ties) {
  try {
    const response = await fetch(
      "https://portfolio-project-hyba.onrender.com/update-stats",
      {
        method: "POST",
        headers: {
          "Content-Type": "applicaton/json"
        },
        body: JSON.stringify({
          userId: userId,
          stats: { newWins: wins, newLosses: losses, newTies: ties }
        })
      }
    );

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
    const response = await fetch(
      "https://portfolio-project-hyba.onrender.com/get-stats",
      {
        method: "GET",
        headers: {
          "Content-Type": "applicaton/json"
        },
        body: JSON.stringify({
          userId: userId
        })
      }
    );

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
    const response = await fetch(
      "https://portfolio-project-hyba.onrender.com/get-leaderboard",
      {
        method: "GET",
        headers: {
          "Content-Type": "applicaton/json"
        }
      }
    );

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
