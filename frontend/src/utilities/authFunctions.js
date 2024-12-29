// import env from "react-dotenv";
import { backendUrl } from "../components/auth/variables";

export async function fetchUserFromToken(token) {
  try {
    const response = await fetch(`${backendUrl}/api/users/validate-token`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
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
