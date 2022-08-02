import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import { Nav, NavIcon, SideBarNav, SidebarWrap } from './SideBarElements'
import SidebarSubmenu from './SidebarSubmenu'
import { IconContext } from 'react-icons/lib'

const SideBar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar} /> 
                </NavIcon>
            </Nav>
            <SideBarNav sidebar={sidebar }>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar}/> 
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SidebarSubmenu item={item} key={index} />;
                    })}
                </SidebarWrap> 
            </SideBarNav>
        </IconContext.Provider>
    </>
  )
}

export default SideBar