import React from 'react';
import profile from '../img/Cygnus.png';
import profile1 from '../img/mat.png';
import profile2 from '../img/Cygnus.png';
import styled from 'styled-components';
import PageMerchan from './PageMerchan';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block;
padding: 11px; 
padding-bottom: 1em;
background: #C7D2FE66;
border-radius: 30px;
z-index: 1;
position: absolute;
top: 64rem;
left: 9rem;
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
    font-size: 20px;
    color: blue;
    text-align: center;
    padding-top: 1rem;
    
    
    
`;

const StyledH3 = styled.h3`
   
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 35px;
    text-align: center;
    padding-top: 1rem;

`;

const Container1 = styled(animated.div)`
display: inline-block;
padding: 11px;
padding-bottom: 1em;
background: #C7D2FE66;
border-radius: 30px;
z-index: 1;
position: absolute;
top: 64rem;
left: 33rem;
backdrop-filter: blur(5px);
border: 1px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

const StyledImg1 = styled.img`
    width: 270px;
    padding-top: 5em;
    height: auto;
    border: 2px solid #000;
    border-radius: 30px;
    background-color: #000;
`;

const StyledH11 = styled.h1`
   
    letter-spacing: 1.5;
    font-family: "Gilroy";
    font-size: 20px;
    color: blue;
    text-align: center;
    padding-top: 1rem;
    
    
    
`;

const StyledH33 = styled.h3`
   
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 35px;
    text-align: center;
    padding-top: 1rem;

`;

const Container2 = styled(animated.div)`
display: inline-block;
padding: 11px;
padding-bottom: 1em;
background: #C7D2FE66;
border-radius: 30px;
z-index: 1;
position: absolute;
top: 64rem;
left:57rem;
backdrop-filter: blur(5px);
border: 1px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

const StyledImg2 = styled.img`
    width: 270px;
    padding-top: 2em;
    height: auto;
    border: 2px solid #000;
    border-radius: 30px;
    background-color: #000;
`;

const StyledH111 = styled.h1`
   
    letter-spacing: 1.5;
    font-family: "Gilroy";
    font-size: 20px;
    color: blue;
    text-align: center;
    padding-top: 1rem;
    
    
    
`;

const StyledH333 = styled.h3`
   
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 35px;
    text-align: center;
    padding-top: 1rem;

`;



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <><><Container
            onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <StyledH1>OJ 287 Black Hole</StyledH1>
            <StyledH3>IDR 39K</StyledH3>
        </Container>

            <Container1
                onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                    transform: props.xys.interpolate(trans)
                }}
            >
                <StyledImg1 src={profile1} />
                <StyledH11>Cygnus sains</StyledH11>
                <StyledH33>IDR 100K</StyledH33>
            </Container1></><Container2
                onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                    transform: props.xys.interpolate(trans)
                }}
            >
                <StyledImg2 src={profile2} />
                <StyledH111>planet blue</StyledH111>
                <StyledH333>IDR 800K</StyledH333>
            </Container2></>
        
    );
}

export default GlassCard;