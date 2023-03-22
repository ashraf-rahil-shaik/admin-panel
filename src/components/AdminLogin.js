

import React, { useState } from "react";


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    const defaultUsername = "user@123";
    const defaultPassword = "password123";
  
    if (email === defaultUsername && password === defaultPassword) {
      // Navigate to home page upon successful validation
      window.location.href = "/home";
    } else {
      // Show error message for incorrect credentials
      alert("Incorrect username or password.");
    }
    // handle sign-in logic here
  };

  return (
    <div className="signInPageContainer">
    <h2>Sign In</h2>
    <form onSubmit={handleSignIn}>
    <label htmlFor="email">Email </label>
    <input
    type="email"
    id="email"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    required
    />
    <br />
    <label htmlFor="password">Password</label>
    <input
    type="password"
    id="password"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    required
    />
    <br />
    <button type="submit">Sign In</button>
    </form>
    </div>
    );
    };
    
    export default AdminLogin;