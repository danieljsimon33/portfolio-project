import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nagivate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState(null);

  async function handleSubmitForm(event) {
    event.preventDefault();

    console.log(formData);

    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorText = await response.json();
        throw new Error(errorText);
      }

      const data = await response.json();
      setMessage(data.message);
      console.log("[Frontend] Login complete.", data);

      nagivate("/");
    } catch (error) {
      setMessage(error.message);
      console.log("[Frontend] Error logging in.", error);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <div className="auth-container">
      <h1>Log In</h1>

      <form className="auth-form" onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required={true}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required={true}
          onChange={handleInputChange}
        />

        <button>Log In</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
