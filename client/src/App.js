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
      <Navbar />
      {/* <div className="body"> */}
      <div class="x9f619 x1n2onr6 x1ja2u2z">
        <div class="x78zum5 xdt5ytf x1n2onr6 x1ja2u2z">
          <div class="x78zum5 xdt5ytf x1n2onr6">
            <div class="x78zum5 xdt5ytf x1n2onr6 xat3117 xxzkxad">
              <div class="x78zum5 xdt5ytf x10cihs4 x1t2pt76 x1n2onr6 x1ja2u2z">
                <div class="x9f619 x1n2onr6 x1ja2u2z x78zum5 x2lah0s xl56j7k x1qjc9v5 xozqiw3 x1q0g3np x1t2pt76 x17upfok">
                  <div class="x9f619 x1n2onr6 x1ja2u2z x78zum5 x1r8uery x1iyjqo2 xs83m0k xeuugli x1qughib x1cy8zhl xozqiw3 x1q0g3np xylbxtu x1t2pt76 xornbnt">
                    <NavRight items={friends} />
                    {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
