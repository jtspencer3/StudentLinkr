import React from 'react';
import './ProfileNavLeft.css';
import ProfileNavLeftTab from "./ProfileNavLeftTab";
function ProfileNavLeft(props) {
  return (

    <div className='list-left-page-item'>
      <div className='list-left-container'>
        <div className='list-left-container-item'>
          <div>
            <ul className='list-left'>
              {props.items.map((pagesLeft, inx) => (
                <ProfileNavLeftTab
                  photo={pagesLeft.photo}
                  name={pagesLeft.name}
                  link={pagesLeft.link}
                  key={inx}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileNavLeft;