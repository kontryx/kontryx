import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import ProfilePic from '../../images/profile_pic_smol.jpg'



export const HomeContainer = styled.div`
    /* background: #0c0c0c; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 500px;
    position: relative;
    z-index: 1;
`

export const ProfilePicContainer = styled.div`
    width: 213;
    height: 213;
`
export const ProfilePhoto = styled.img`
    /* background-image: url(${ProfilePic}); */
    /* width: 100%;
    height: 100%; */
    
    width: auto;
    height: auto;
    margin: 15px;
    border-radius: 50%;
`

export const LandingPageBG = styled.div`
background-image: linear-gradient( to right,#6591FF 20px, #A3ABBF 900px);
 position:absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 /* width: 100%;
 height:100%; */
 /* width: auto;
 height: auto; */
 overflow: hidden;
`

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
