import React from "react";
import "./App.css";
import "./components/Nav.css";
import logo from "./logo.svg";
import Navbar from "./components/Navbar.js";
import NavRight from "./components/NavRight";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Link } from "react-router-dom";
import ProfileNavLeft from "./components/ProfileNavLeft.js";

const friends = [
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
  { photo: logo, name: "Jill Moncrief" },
];
const pages = [
  {name: "Home", link:"/"},
  {name: "Groups", link:"/About"},
  {name: "Discover", link:"/"},
  {name: "Events", link:"/Contact"},
];
const  pagesLeft = [
  {photo:logo, name:"Tanner Renick", link:"/"},
  {photo:logo, name:"Friends", link:"/About"},
  {photo:logo, name:"Settings", link:"/About"},
  {photo:logo, name:"Report A Bug", link:"/About"},
  {photo:logo, name:"Logout", link:"/"},
  // {photo:logo, name:"Groups", link:"/About"},
  // {photo:logo, name:"Events", link:"/About"},
  // {photo:logo, name:"Settings", link:"/About"},
  // {photo:logo, name:"Tanner Renick", link:"/"},
  // {photo:logo, name:"Groups", link:"/About"},
  // {photo:logo, name:"Events", link:"/About"},
  // {photo:logo, name:"Settings", link:"/About"},
]
const posts = [
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
  {name: "ZACH BODMER", dateTime:"DATETIME", post:"This will be where the post content goes. I do not know if we should put a character limit on our posts or not but it is something we should consider."},
]
function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <Navbar items ={pages} />
            <div className="body">
              <div className="content">
                <ProfileNavLeft items ={pagesLeft}/>
                     <Routes>
          <Route path="/" element={<Home items ={posts} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes> 
        <NavRight items={friends} />
         </div>
       </div>
     </div>
  );
}

export default App;
