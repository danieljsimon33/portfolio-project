import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const nagivate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState(null);

  async function handleSubmitForm(event) {
    event.preventDefault();

    console.log(formData);

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
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
      console.log("[Frontend] Registration complete.", data);

      nagivate("/login");
    } catch (error) {
      setMessage(error.message);
      console.log("[Frontend] Error registering user.", error);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <div className="register-container">
      <h1>Register Form</h1>

      <form className="register-form" onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required={true}
          onChange={handleInputChange}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
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

        <button>add</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
