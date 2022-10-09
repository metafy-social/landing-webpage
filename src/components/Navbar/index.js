import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import HP from "../../assets/homep.png";
import CT from "../../assets/countdw.png";
import LD from "../../assets/users.png";
import LOGO from "../../assets/logo_metafy.png";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Python from "../python";
import Web3 from "../web3";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Navbar = ({ toggle }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
                <img className="eth" src={HP} alt="" />
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/countdown">
                <img className="eth" src={CT} alt="" />
                Countdown
              </NavLinks>
            </NavItem>
            <NavItem>
              <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="demo-multiple-name-label">
                  <img className="eth" src={LD} alt="" />
                  Leaderboard
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  <MenuItem>
                    <NavLinks to="/python">Python</NavLinks>
                  </MenuItem>
                  <MenuItem>
                    <NavLinks to="/web3">Web3</NavLinks>
                  </MenuItem>
                </Select>
              </FormControl>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
