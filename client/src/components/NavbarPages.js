import React from 'react';
import './Nav.css';
import './NavbarPages.css';


function NavbarPages(props) {
    return (
        <li class="navbar-page">
            <div class="navbar-page-tab">
                <a aria-current="page" aria-label={props.name} class="navbar-page-link" href="/" tabindex="0">
                    <span class="navbar-page-label">
                        <h3>{props.name}</h3>
                    </span>
                </a>
            </div>
        </li>);
}

export default NavbarPages;