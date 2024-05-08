import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import JoblyApi from "./api/api";
import UserContext from "./auth/UserContext";
import jwt from "jsonwebtoken";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            JoblyApi.token = token;
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser(currentUser);
          } catch (err) {
            console.error("Problem getting user info", err);
            setCurrentUser(null);
          }
        }
      }
      getCurrentUser();
    },
    [token],
  );

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  function logout() {
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Routes login={login} logout={logout} signup={signup} />
      </div>
    </BrowserRouter>
  );
}

export default App;
