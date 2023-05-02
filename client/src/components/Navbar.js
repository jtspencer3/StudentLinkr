import React from 'react';
import './Navbar.css';
import NavbarPages from './NavbarPages';
import zach from "../Zach.jpg";

function Navbar(props) {
  return (
    <div role="banner">
      <div className="logo-container">
        <a className="logo" href="/" tabIndex="0">
          <svg viewBox="0 0 36 36" className="logo-svg" fill="#000000" height="40" width="40">
            <path d="M 18 -1 C 43 0 43 34 18 35 C -5 34 -5 0 18 -1" />
            <path className="logo-svg-fill" d="M 9 20 C -1 21 0 1 9 2 L 30 2 L 25 8 L 12 8 C 9 8 9 14 12 14 L 24 14 C 34 14 34 32 24 32 L 5 32 L 10 26 L 24 26 C 27 26 27 20 24 20 L 9 20" />
          </svg>
        </a>
      </div>
      <div className="navbar-navigation">
        <div className="navigation-container">
          <div className="navigation-container-two">
            <div className="navigation-container-three" >
              <ul className="navigation-list">
                {props.items.map((pages, inx) => (
                  <NavbarPages
                    name={pages.name}
                    link={pages.link}
                    key={inx}
                  />
                ))}
              </ul>
              <div className='photo-container'>
                <div className='image-container'>
                  <img className='list-item-photo-image' style={{ height: '36px', width: '36px', }} src={zach}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;