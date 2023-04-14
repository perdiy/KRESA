import React from 'react';
import profile from '../img/Cygnus.png';
import styled from 'styled-components';
import MatContent from './MatContent';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block;
padding: 11px;
padding-bottom: 10;
background: #C7D2FE66;
border-radius: 30px;
z-index: 1;
position: absolute;
top: 35rem;
backdrop-filter: blur(5px);
border: 1px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

const StyledImg = styled.img`
    width: 10px;
    padding-top: 2em;
    height: auto;
    border: 2px solid #000;
    border-radius: 30px;
    background-color: #000;
`;




const GlassCard = () => {
   
    return (
        <Container>
            <StyledImg src={profile} />
           
        </Container>
    );
}

export default GlassCard;