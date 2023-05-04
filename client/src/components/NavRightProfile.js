import React from 'react';
import './NavRightProfile.css';

function NavRightProfile(props) {
    const name = props.first_name +" "+props.last_name;
    return (
        <li>
            <a>
                <div className='list-item'>
                    {/* <div className='list-item-photo'>
                        <img className='list-item-photo-image' style={{ height: '36px', width: '36px', }} src={props.photo}></img>
                    </div> */}
                    <div className='list-item-name'>
                        {name}
                    </div>
                </div>
            </a>
        </li>
    );
}

export default NavRightProfile;