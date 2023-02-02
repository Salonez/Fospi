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
  if (isAdmin) {
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
          <NavLink to="/admin" activeStyle>
            Admin
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Sign out</NavBtnLink>
        </NavBtn>
      </Nav>
    );
  } else {
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
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Sign out</NavBtnLink>
        </NavBtn>
      </Nav>
    );
  }
};
export default Navbar;