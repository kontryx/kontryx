import React, { useState } from 'react';
import Video from '../../videos/dots.mp4'
import ProfilePic from '../../images/profile_pic_smol.jpg'

import { HomeContainer, LandingPageBG, ProfilePicContainer, ProfilePhoto } from './landingpage_elements'
// import { Button } from '../buttons/ButtonElements';
const HomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <HomeContainer>
                <LandingPageBG>
                    
                    {/* <ProfilePicContainer>
                        <ProfilePhoto src ={ProfilePic}/>
                    </ProfilePicContainer> */}
                    
                </LandingPageBG>
                {/* <HomeBackground>
                    <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
                </HomeBackground>
                <HomeContent>
                    <HomeH3>hey</HomeH3>
                    <HomeH1>Nicole</HomeH1>
                    <HomeH2>wanna facetime?</HomeH2>
                    <HomeButtonWrapper>
                        <Button to='schedule' onMouseEnter={onHover} onMouseLeave={onHover}>
                            sure, sounds good! {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HomeButtonWrapper>
                </HomeContent> */}
            </HomeContainer>
        </>
    );
};

export default HomeSection;
