import React from 'react';
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
                <SidebarLink to="/countdown" onClick={toggle}>Countdown</SidebarLink>
                <SidebarLink to="/python" onClick={toggle}>Py Leaderboard</SidebarLink>
                <SidebarLink to="/web3" onClick={toggle}>Web3 Leaderboard</SidebarLink>
                <SidebarLink to="/signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            {/* <SideBtnWrap>
                <SidebarRoute to="/signup">Sign In</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar