import React, { useState } from "react";

function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  async function handleSubmit(evt) {
    evt.preventDefault();

    let result = await login(formData);
    if (result.success) {
      console.log("login success");
    } else {
      console.log("login failed");
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  return (
    <div>
      <div>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
