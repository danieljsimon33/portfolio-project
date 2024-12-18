export async function updateStats() {
  try {
    const response = await fetch("http://localhost:3000", {
      headers: {
        "Content-Type": "applicaton/json"
      }
    });
  } catch (error) {
    console.log(error);
  }
}
