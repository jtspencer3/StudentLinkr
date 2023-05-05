import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../stylesheets/EditProfile.css";

function UploadPhoto() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  //   //Checks login
  useEffect(() => {
    axios.post("http://localhost:3001/checkSession").then((response) => {
      if (response.data.message === "loggedOut") {
        navigate(response.data.redirect);
      } else {
        setUserId(response.data.userID);
      }
    });
  }, [navigate]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    axios
      .post("/upload", formData)
      .then((response) => {
        if (response.status === 200) {
          navigate("/Profile");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadPhoto;
