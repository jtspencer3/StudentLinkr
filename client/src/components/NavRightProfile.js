import React from 'react';
import './NavRightProfile.css';

function NavRightProfile(props) {
    return (
        <li>
            <div className='list-item'>
                <div className='list-item-photo'>
                    <img style={{ height: '36px', width: '36px' }} src={props.photo}></img>
                </div>
                <div className='list-item-name'>
                    {props.name}
                </div>
            </div>
        </li>
    );
}

export default NavRightProfile;