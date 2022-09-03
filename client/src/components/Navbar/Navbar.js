import React from 'react';
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
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
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
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/login">Sign out</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};
export default Navbar;