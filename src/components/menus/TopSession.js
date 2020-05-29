import React from 'react';
import {
  Navbar,
  NavbarBrand,

} from 'reactstrap';
import ToggleMenu from '../ToggleMenu';
import LoginMenu from './LoginMenu';

export const TopSession = (props) => {


  return (
    <div>
      <Navbar color="light" light expand="md" className='fixed-top'>
        <NavbarBrand className='mr-auto'>
          <ToggleMenu/>
        </NavbarBrand>
        <LoginMenu/>
      </Navbar>
    </div>
  );
}

