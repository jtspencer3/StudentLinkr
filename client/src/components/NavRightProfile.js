import React from 'react';
import './NavRightProfile.css';
import { Link } from 'react-router-dom';

function NavRightProfile(props) {
    const name = props.first_name +" "+props.last_name;
    const link="../Profile/"+props.username;
    return (
        <li>
        <Link to={link}>
            <div className='list-item'>
                {/* <div className='list-item-photo'>
                    <img className='list-item-photo-image' style={{ height: '36px', width: '36px', }} src={props.photo}></img>
                </div> */}
                <div className='list-item-name'>
                    {name}
                </div>
            </div>
        </Link>
    </li>
);
}

export default NavRightProfile;