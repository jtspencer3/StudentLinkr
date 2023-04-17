import React from 'react';
import './Navbar.css';
import NavbarPages from './NavbarPages';

function Navbar(props) {
  return (
    <div role="banner">
      <div class="logo-container">
        <a class="logo" href="/" tabindex="0">
          <svg viewBox="0 0 36 36" class="logo-svg" fill="#000000" height="40" width="40">
            <path d="M 18 -1 C 43 0 43 34 18 35 C -5 34 -5 0 18 -1" />
            <path class="logo-svg-fill" d="M 9 20 C -1 21 0 1 9 2 L 30 2 L 25 8 L 12 8 C 9 8 9 14 12 14 L 24 14 C 34 14 34 32 24 32 L 5 32 L 10 26 L 24 26 C 27 26 27 20 24 20 L 9 20" />
          </svg>
          </a>
      </div>
      <div class="navbar-navigation">
        <div class="navigation-container">
          <div class="navigation-container-two">
            <div class="navigation-container-three" >
              <ul class="navigation-list">
                {props.items.map((pages, inx) => (
                  <NavbarPages
                    name={pages.name}
                    link={pages.link}
                    key={inx}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;