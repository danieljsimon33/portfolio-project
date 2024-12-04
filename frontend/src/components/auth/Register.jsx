import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  function handleSubmitForm(event) {
    event.preventDefault();
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <div className="register-container">
      <h1>Register Form</h1>

      <form className="register-form" onSubmit={handleSubmitForm}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required="true"
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required="true"
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required="true"
          onChange={handleInputChange}
        />

        <button>add</button>
      </form>
    </div>
  );
}
