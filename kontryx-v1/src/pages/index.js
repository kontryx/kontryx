import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HomeSection from '../components/landingpage_elements/index';
import SideBar from '../components/sidebar/SideBar';
// import Footer from '../components/Footer';
//this is where you layout the contents of the home page
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    //this is where you speciy what components will be present on the homepage
    return (
        <>
            {/* <Navbar toggle={toggle} /> */}
            <SideBar/>
            <HomeSection />
        </>
    )
};

export default Home;
