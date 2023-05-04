import React from 'react';
import './NavbarPages.css';
import { Link } from 'react-router-dom';


function NavbarPages(props) {
    return (
        <li className="navbar-page">
            <div className="navbar-page-tab">
            <Link to ={props.link} className='navbar-page-link page'>
                {/* <a aria-current="page" aria-label={props.name} className="navbar-page-link" href="/" tabindex="0"> */}
                    <span className="navbar-page-label">
                        <h3>{props.name}</h3>
                    </span>
                    </Link>
            </div>
        </li>);
}

export default NavbarPages;