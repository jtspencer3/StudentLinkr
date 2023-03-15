import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
function Navbar() {
  return (
    
    <a href="/home" aria-label="Home (New unread Tweets)" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-rjfia r-13qz1uu" data-testid="AppTabBar_Home_Link">
      <div class="css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-xyw6el r-o7ynqc r-6416eg">
        <div class="css-1dbjc4n">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
            <g>
              <path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z">
                </path>
                </g>
                </svg>
                <div aria-label="undefined unread items" class="css-1dbjc4n r-l5o3uw r-sdzlij r-1yadl64 r-1ozsyd3 r-u8s1d r-1gg5ah6 r-1ld3bg r-lrvibr r-12rgx7y">
                </div>
                  </div>
                  <div dir="ltr" class="css-901oao css-1hf3ou5 r-18jsvk2 r-37j5jr r-adyw6z r-b88u0q r-135wba7 r-1joea0r r-88pszg r-bcqeeo r-qvutc0">
                    <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Home</span>
                  </div>
        </div>
      </a>
        
    /*<Dropdown className="test">
        
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
      <Dropdown as={ButtonGroup}>
        <Button variant='success'>split Button</Button>
      <Dropdown.Toggle split variant='success' id="dropdown-split"/>
        
      <Dropdown.Menu>
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>

      
    </Dropdown>*/

  );
}

export default Navbar;