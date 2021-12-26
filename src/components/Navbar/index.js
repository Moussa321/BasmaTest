import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/"></NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/features" activeStyle>
            Features
          </NavLink>
          <NavLink to="/pages" activeStyle>
            Pages
          </NavLink>
          <NavLink to="/screenshots" activeStyle>
            Screenshots
          </NavLink>
          <NavLink to="/pricing" activeStyle>
            Pricing
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
