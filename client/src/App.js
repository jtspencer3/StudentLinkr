import React from "react";
import "./App.css";
import logo from "./logo.svg";
import zach from "./Zach.jpg";
import groupsIcon from "./groupsIcon.png";
import errorIcon from "./errorIcons.png";
import logoutIcon from "./Logout icon.png";
import settingsIcon from "./settingsIcon.png";
import Navbar from "./components/Navbar.js";
import NavRight from "./components/NavRight";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProfileNavLeft from "./components/ProfileNavLeft.js";
import Logout from "./pages/Logout";
import Contact from "./pages/Contact";
import Groups from "./pages/Groups";
import Discover from "./pages/Discover";
import UploadPhoto from "./pages/UploadPhoto";
import EditProfile from "./pages/EditProfile";

const pages = [
  { name: "Home", link: "/" },
  { name: "Groups", link: "/Groups" },
  { name: "Discover", link: "/Discover" },
  { name: "Profile", link: "/Profile/ZachSucks" },
];
const pagesLeft = [
  { photo: logo, name: "Tanner Renick", link: "/profile" },
  { photo: groupsIcon, name: "Groups", link: "/Groups" },
  { photo: settingsIcon, name: "Settings", link: "/editprofile" },
  { photo: errorIcon, name: "Report A Bug", link: "/Contact" },
  { photo: logoutIcon, name: "Logout", link: "/logout" },
];

function App() {
  return (
    <div className="App">
      <Navbar items={pages} />
      {/* <div className="body">
        <div className="content">
          <div className="content-seven"> */}
      {/* <ProfileNavLeft items={pagesLeft} /> */}
      <Routes>
        <Route path="/" element={<Home items={pagesLeft} />} />
        <Route path="groups" element={<Groups items={pagesLeft} />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="logout" element={<Logout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="discover" element={<Discover items={pagesLeft} />} />
        <Route path="profile/:username" element={<Profile />} />
        <Route path="uploadphoto" element={<UploadPhoto />} />
        <Route path="editprofile" element={<EditProfile />} />
      </Routes>
      {/* <NavRight items={friends} /> */}
    </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
