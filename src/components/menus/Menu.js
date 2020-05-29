import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import  './style.scss';

const Menu = () => {
  return (
    <div className='sidebar'>
       <Nav className='d-block'>
         <NavItem>
           <NavLink href="#">Nhacc</NavLink>
         </NavItem>
         <NavItem>
           <NavLink href="#">Nhacc</NavLink>
         </NavItem>
         <NavItem>
           <NavLink href="#">Nhacc</NavLink>
         </NavItem>
         <NavItem>
           <NavLink href="#">Nhacc</NavLink>
         </NavItem>
        </Nav>     
    </div>
  )
}
export default Menu;