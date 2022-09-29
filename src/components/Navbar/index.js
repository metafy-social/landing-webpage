import React from "react";

import { Nav, NavbarContainer, NavLogo, MobileIcon , NavMenu , NavItem , NavLinks, NavBtn , NavBtnLink} from "./NavbarElements";
import {FaBars} from "react-icons/fa";
import HP from "../../assets/homep.png";
import CT from "../../assets/countdw.png";
import LD from "../../assets/users.png";
import LOGO from "../../assets/logo_metafy.png";
import  Landing from "../Landing";
import  Countdown from "../Countdown";
import  Leaderboard from "../Leaderboard";

const Navbar = ({toggle}) => {
  return (
    <>
  
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img className="logo" src={LOGO} alt="logo" />
            <div className="head"> Metafy</div>
           </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
                <NavLinks to="/">
                <img className="eth" src={HP} alt =""/>Home
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/countdown"><img className="eth" src={CT} alt =""/>Countdown</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/leaderboard"><img className="eth" src={LD} alt =""/>Leaderboard</NavLinks>
            </NavItem>
           
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
     
    </>
  );
};

export default Navbar;
