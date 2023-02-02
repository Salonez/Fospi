import React from 'react';
import  { isAdmin } from '../Storage'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav> 
      <Bars />
      <NavMenu>
        <NavLink to="/menu" activeStyle>
          Menu
        </NavLink>
        <NavLink to="/dietary-needs" activeStyle>
          Dietary Needs
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        {isAdmin && (
          <NavLink to="/admin" activeStyle>
            Admin
          </NavLink>
        )}
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/login">Sign out</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};
export default Navbar;