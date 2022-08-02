import React from 'react';
import { FaBars } from 'react-icons/fa';
// import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './navbar_elements';
import { Nav, NavbarContainer, MyName, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './navbar_elements';
// import { Link } from 'react-router-dom';

//this is where you configure what the Navbar Component will look like

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* <NavLogo to='/'>
            k+n <i className='far fa-heart' />
      
          </NavLogo> */}
          <MyName to='/'>Konstantin Bogdanov</MyName>




          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='projects'>Projects</NavLinks>
            </NavItem>

            {/* <NavItem>
              <NavLinks to='contacts'>Contacts</NavLinks>
            </NavItem> */}
          </NavMenu>

          <NavBtn>
            <NavBtnLink to='/contact'> Contacts</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
