export function getToken() {
  return localStorage.getItem("token");
}

export function deleteToken() {
  localStorage.removeItem("token");
}

export async function fetchUserFromToken(token) {
  try {
    const response = await fetch("http://localhost:3000/validate-token", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authentication: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("[Frontend] Issue fetching user.", error);
    return null;
  }
}
