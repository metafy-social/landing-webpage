import React from 'react';
import Spline from "@splinetool/react-spline";
import { SidebarContainer, Icon, CloseIcon ,SidebarLink,SidebarMenu,SidebarWrapper,SideBtnWrap,SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
         

        <Icon onclick={toggle}>
            <CloseIcon />
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="/leaderboard" onClick={toggle}>Leaderboard</SidebarLink>
                <SidebarLink to="/countdown" onClick={toggle}>Countdown</SidebarLink>
                <SidebarLink to="/signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar