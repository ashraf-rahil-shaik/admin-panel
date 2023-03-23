import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const navigator = useNavigate();

  const handleLogout = () => {
    // Display a confirmation dialog before logging out
    setConfirmLogout(true);
  };

  const handleConfirmLogout = () => {
    // Clear any user session data or authentication tokens here, if necessary
    // Then redirect the user to the login page
    navigator("/");
  };

  const handleCancelLogout = () => {
    // Hide the confirmation dialog if the user cancels the logout
    setConfirmLogout(false);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/home">Company Name</Link>
      </div>
      <div className="nav-links">
        <div className="dropdown">
          <button className="dropbtn">Manage</button>
          <div className="dropdown-content">
            <Link to="/customers">customers</Link>
            <Link to="/drivers">drivers</Link>
            <Link to="/deliveries">deliveries</Link>
            <Link to="/fleet">fleet</Link>
            <Link to="/warehouse">warehouses</Link>
            <Link to="/scanpoint">scan point</Link>
            <Link to="/status">status</Link>
          </div>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {confirmLogout && (
        <div className="logout-dialog">
          <p>Are you sure you want to log out?</p>
          <button onClick={handleConfirmLogout}>Yes</button>
          <button onClick={handleCancelLogout}>No</button>
        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
