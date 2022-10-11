import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  height: 5rem;
  width: 96rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 2000px) {
    transition: 0.8s all ease;
    width: 100rem;
    margin-left: 10rem;
  }

  @media screen and (max-width: 1700px) {
    transition: 0.8s all ease;
    width: 100rem;
    margin-left: 3rem;
  }

  @media screen and (max-width: 1600px) {
    transition: 0.8s all ease;
    width: 86rem;
    margin-left: 5rem;
  }

  @media screen and (max-width: 1450px) {
    transition: 0.8s all ease;
    width: 82rem;
    margin-left: 3rem;
  }

  @media screen and (max-width: 1350px) {
    transition: 0.8s all ease;
    width: 82rem;
    margin-left: 0rem;
  }

  @media screen and (max-width: 1250px) {
    transition: 0.8s all ease;
    width: 74rem;
    margin-left: 0rem;
  }

  @media screen and (max-width: 1150px) {
    transition: 0.8s all ease;
    width: 70rem;
    font-size: 0.5rem;
    justify-content: center;
  }

  @media screen and (max-width: 1050px) {
    transition: 0.8s all ease;
    width: 60rem;
  }

  @media (max-width: 800px) {
    width:40rem;
    margin-left: 3rem;
    
  }

  @media (max-width: 600px) {
    width:30rem;
    margin-left: 2rem;
  }

  @media (max-width: 600px) {
    width:30rem;
    margin-left: 2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 500px) {
    width:27rem;
    margin-left: 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    width:25rem;
    margin-left: 2.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 360px) {
    width:25rem;
    margin-left: 2rem;
    font-size: 0.75rem;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  z-index: 1;
  width:90%;
  margin: 0 0 0 0rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(244, 213, 4, 0.37);
`;

export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 5rem;
  justify-content:space-between;
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-right: 2.25rem;
  white-space: nowrap;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-family:"Zen Dots", cursive;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 4px solid #f4d504
  }

  @media screen and (max-width: 1250px) {
    margin-right: 2rem;
  }
`;

export const NavLinksSub = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-right: 2.25rem;
  white-space: nowrap;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-family:"Zen Dots", cursive;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 4px solid #f4d504
  }
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right:2rem;

  @media screen and (max-width: 1250px) {
    transition: 0.8s all ease;
    margin-left: 0rem;
    margin-right:5rem;
  }

  @media screen and (max-width:1250px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #f4d504;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  font-family:"Zen Dots", cursive;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: 1250px) {
    transition: 0.8s all ease;
    margin-top: 15rem;
    margin-right: 10rem;
  }


  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

;

