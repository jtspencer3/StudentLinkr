import React from 'react';
import './ProfileNavLeftTab.css';
import { Link } from 'react-router-dom';

function ProfileNavLeftTab(props) {
    return (
        <li>
            <Link to ={props.link} className='list-left-item-link'>
            <div className='list-left-item'>
            
                <div className='list-left-item-photo'>
                    <img style={{ height: '36px', width: '36px' }} src={props.photo}></img>
                </div>
                <div className='list-left-item-name'>
                    {props.name}
                </div>
                
            </div>
            </Link>
        </li>
    );
}

export default ProfileNavLeftTab;