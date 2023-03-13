import React from 'react';
import './Nav.css'; 
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
function Navbar() {
  return (
    
        
    <Dropdown class="test">
        
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
      <>
        {['Tanner','Spencer','Zack','Wil'].map(
          (variant)=>(
            <SplitButton
            key={variant}
            // eslint-disable-next-line 
            id={'dropdown-variant-${variant}'}
            variant={variant.toLowerCase()}
            title={variant}
        >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Active Item
                        </Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item eventKey="4">Seperated link</Dropdown.Item>
                    </SplitButton>
                ),
            )}
        </>

      
    </Dropdown>

  );
}

export default Navbar;