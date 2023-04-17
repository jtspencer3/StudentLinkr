import React from 'react';
import './NavbarPages.css';
import { Link } from 'react-router-dom';


function NavbarPages(props) {
    return (
        <li class="navbar-page">
            <div class="navbar-page-tab">
                <a aria-current="page" aria-label={props.name} class="navbar-page-link" href="/" tabindex="0">
                    <span class="navbar-page-label">
                        <h3><Link to ={props.link} className='navbar-page-link'>{props.name}</Link></h3>
                    </span>
                </a>
            </div>
        </li>);
}

export default NavbarPages;