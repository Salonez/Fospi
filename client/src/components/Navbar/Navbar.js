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
      <NavLink to="/home">
        <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/menu" activeStyle>
          Menu
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/login">login</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};
export default Navbar;