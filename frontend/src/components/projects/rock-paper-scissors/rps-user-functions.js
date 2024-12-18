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
        }) //update the backend respectively
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
