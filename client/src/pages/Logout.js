import React from "react";
import { useEffect } from "react";
import axios from "axios";

function Logout() {
  const handleLogout = () => {
    axios
      .get("/logout")
      .then((response) => {
        console.log("Logged out successfully");
        console.log(response.data.message);
        window.location.href = response.data.redirect;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {});
  };
  useEffect(() => {
    handleLogout();
  }, []);
  return (
    <div>
      <p>Logging you out...</p>
    </div>
  );
}

export default Logout;
