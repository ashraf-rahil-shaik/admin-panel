
import React, { useState, useEffect } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    const defaultUsername = "user@123";
    const defaultPassword = "password123";

    if (email === defaultUsername && password === defaultPassword) {
      // Navigate to home page upon successful validation
      window.location.href = "/home";
    } else {
      // Set error message for incorrect credentials
      setErrorMessage("Incorrect username or password.");
      setShowErrorMessage(true);
    }
  };

  const handleBlur = () => {
    setShowErrorMessage(true);
  };

  useEffect(() => {
    const handleClick = () => {
      setShowErrorMessage(false);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div className="signInPageContainer">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={handleBlur}
            required
          />

          <br />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onBlur={handleBlur}
            required
          />

          {showErrorMessage && (
            <p style={{ color: "red" }}>{errorMessage}</p>
          )}

          <br />
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;


