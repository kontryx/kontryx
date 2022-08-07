import React from 'react';
import { FaBars } from 'react-icons/fa';
// import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './navbar_elements';
import { NavbarContainer, SiteTitle, NavList, NavLinks, NavItem  } from './navbar_elements';
import { Link } from 'react-router-dom';
//this is where you configure what the Navbar Component will look like

const Navbar = () => {
  return (
    <>
      <NavbarContainer className='NavBarContainer'>
        <Link style={{textDecoration: 'none'}} to='/'>
          <SiteTitle>Konstantin Bogdanov</SiteTitle>
        </Link>
        
        <NavList>
          <NavItem>
            <NavLinks to='about'>About</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='projects'>Projects</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='contacts'>Contacts</NavLinks>
          </NavItem>
          
          <NavItem>
            <NavLinks to='other'>Other</NavLinks>
          </NavItem>
          
        </NavList>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
