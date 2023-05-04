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

const friends = [
  { photo: zach, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
  { photo: logo, name: "Jill Moncrief" },
];
const pages = [
  { name: "Home", link: "/" },
  { name: "Groups", link: "/Groups" },
  { name: "Discover", link: "/" },
  { name: "Events", link: "/Profile" },
];
const pagesLeft = [
  { photo: logo, name: "Tanner Renick", link: "/" },
  { photo: groupsIcon, name: "Groups", link: "/Groups" },
  { photo: settingsIcon, name: "Settings", link: "/Contact" },
  { photo: errorIcon, name: "Report A Bug", link: "/Contact" },
  { photo: logoutIcon, name: "Logout", link: "/logout" },
];

const posts = [
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
  {
    name: "ZACH BODMER",
    dateTime: "DATETIME",
    post: "This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider.",
  },
];
function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

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
      </Routes>
      {/* <NavRight items={friends} /> */}
    </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
