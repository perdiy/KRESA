import React from 'react';
import profile from '../img/Cygnus.png';
import profile1 from '../img/mat.png';
import profile2 from '../img/Cygnus.png';
import styled from 'styled-components';
import PageMerchan from './PageMerchan';
import { useSpring, animated, config } from 'react-spring';
import {Link, useHistory} from 'react-router-dom';

const Container = styled(animated.div)`
display: inline-block;
padding: 3rem; 
padding-bottom: 29em;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: absolute;
top: 1rem;
left: 1rem;
backdrop-filter: blur(5px);
border: 1px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

const Container1 = styled(animated.div)`
display: inline-block;
padding: 32rem; 
padding-bottom:12em;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: absolute;
top: 1rem;
right: 2rem;
backdrop-filter: blur(5px);
border: 1px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

const StyledImg = styled.img`
    width: 270px;
    padding-top: 2em;
    height: auto;
    border: 2px solid #000;
    border-radius: 30px;
    background-color: #000;
    
`;

const StyledH1 = styled.h1`
   
    letter-spacing: 1.5;
    font-family: "Gilroy";
    font-size: 26px;
    background: black;
    border-radius: 8px;
    color: white;
    text-align: center;
    padding-top: 1px;
    backdrop-filter: blur(5px);
border: 1px solid transparent;
background-clip: border-box;
cursor: pointer;
    
    
    
`;

const StyledH3 = styled.h3`
     position: absolute;
    bottom: 31rem;
    left: 1px;
    letter-spacing: 1.15;
    font-family: futura;
    font-size: 20px;
    backdrop-filter: blur(11px);
    border-radius: 20px;
    background-clip: border-box;
    text-align: center;
    
    border-left: 2rem solid transparent;
    border-right: 6.8rem solid transparent;
    background-clip: border-box;
    transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  } 

`;

const StyledH4 = styled.h3`
    position: absolute;
    bottom: 28rem;
    left: 1px;
    letter-spacing: 1.15;
    font-family: futura;
    font-size: 20px;
    backdrop-filter: blur(11px);
    border-radius: 20px;
    background-clip: border-box;
    text-align: center;
    background: #C7D2FE66;
    border-left: 2rem solid transparent;
    border-right: 6.8rem solid transparent;
    background-clip: border-box;
    transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  } 
`;

const StyledH5 = styled.h3`
    position: absolute;
    bottom: 25rem;
    left: 1px;
    letter-spacing: 1.15;
    font-family: futura;
    font-size: 20px;
    backdrop-filter: blur(11px);
    border-radius: 20px;
    background-clip: border-box;
    text-align: center;
 
    border-left: 2rem solid transparent;
    border-right: 6.8rem solid transparent;
    background-clip: border-box;
    transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  } 
`;

const StyledH6 = styled.h3`
    position: absolute;
    bottom: 22rem;
    left: 1px;
    letter-spacing: 1.15;
    font-family: futura;
    font-size: 20px;
    backdrop-filter: blur(11px);
    border-radius: 20px;
    background-clip: border-box;
    text-align: center;
    background: #C7D2FE66;
    border-left: 2rem solid transparent;
    border-right: 6.8rem solid transparent;
    background-clip: border-box;
    transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  } 
`;

const StyledH7 = styled.h3`
    position: absolute;
    bottom: 19rem;
    left: 1px;
    letter-spacing: 1.15;
    font-family: futura;
    font-size: 20px;
    backdrop-filter: blur(11px);
    border-radius: 20px;
    background-clip: border-box;
    text-align: center;
    
    border-left: 2rem solid transparent;
    border-right: 3.5rem solid transparent;
    background-clip: border-box;
    transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  } 
`;

const StyledH8 = styled.h3`
    position: absolute;
    bottom: 16rem;
    left: 1px;
    letter-spacing: 1.15;
    font-family: futura;
    font-size: 20px;
    backdrop-filter: blur(11px);
    border-radius: 20px;
    background-clip: border-box;
    text-align: center;
    background: #C7D2FE66;
    border-left: 2rem solid transparent;
    border-right: 6.8rem solid transparent;
    background-clip: border-box;
    transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  } 
`;

const StyledH9 = styled.h3`
    position: absolute;
    bottom: 13rem;
    left: 1px;
    letter-spacing: 1.15;
    font-family: futura;
    font-size: 20px;
    backdrop-filter: blur(11px);
    border-radius: 20px;
    background-clip: border-box;
    text-align: center;

    border-left: 2rem solid transparent;
    border-right: 6.8rem solid transparent;
    background-clip: border-box;
    transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  } 
`;

const StyledH10 = styled.h3`
    position: absolute;
    bottom: 10rem;
    left: 1px;
    letter-spacing: 1.15;
    font-family: futura;
    font-size: 20px;
    backdrop-filter: blur(11px);
    border-radius: 20px;
    background-clip: border-box;
    text-align: center;
    background: #C7D2FE66;
    border-left: 2rem solid transparent;
    border-right: 6.8rem solid transparent;
    background-clip: border-box;
    transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  } 
`;

const StyledH11 = styled.h3`
    position: absolute;
    bottom: 7rem;
    left: 1px;
    letter-spacing: 1.15;
    font-family: futura;
    font-size: 20px;
    backdrop-filter: blur(11px);
    border-radius: 20px;
    background-clip: border-box;
    text-align: center;

    border-left: 2rem solid transparent;
    border-right: 6.8rem solid transparent;
    background-clip: border-box;
    transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  } 
`;

const StyledH12 = styled.h2`
    position: absolute;
    bottom: 4rem;
    left: 1px;
    letter-spacing: 1.15;
    font-family: futura;
    font-size: 20px;
    backdrop-filter: blur(11px);
    border-radius: 20px;
    background-clip: border-box;
    text-align: center;
    background: #C7D2FE66;
    border-left: 2rem solid transparent;
    border-right: 6.8rem solid transparent;
    background-clip: border-box;
    transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  } 
`;




const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <Container>

            <StyledH1>Dhasboard</StyledH1>
            <a href="/dhasboard"><StyledH3>Page 1</StyledH3></a>
            <a href="/dhasboard1"><StyledH4>Page 2</StyledH4></a>
            <a href="/dhasboard2"><StyledH5>Page 3</StyledH5></a>
            <a href="/dhasboard3"><StyledH6>Page 4</StyledH6></a>
            <a href="/dhasboard4"><StyledH7>Work&Client</StyledH7></a>
            <a href="/video1"><StyledH8>Video1</StyledH8></a>
            <a href="/video2"><StyledH9>Video2</StyledH9></a>
            <a href="/video3"><StyledH10>Video3</StyledH10></a>
            <a href="/video4"><StyledH11>Video4</StyledH11></a>
            <a href="/video5"><StyledH12>Video5</StyledH12></a>
        
        </Container>
        
        
           
        
    );
}

export default GlassCard;