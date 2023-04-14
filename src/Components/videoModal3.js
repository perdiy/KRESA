
import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import profile from '../img/Asteroids.png';

import styled, { keyframes } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block;
padding: 1px;
margin: 1px;
padding-bottom: 1px;
background-color: black;
z-index: 100;
position: absolute;
top:22rem;
left: 76.5rem;
backdrop-filter: blur(5px);
border: 1px solid transparent;
background-clip: border-box;
cursor: pointer; 
transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  } 

.edit {
  display: flex;
  width: 18rem;
}
.edit {
  display: flex;
  width: 18rem;
}
`;

const Container1 = styled(animated.div)`
z-index: 100;
position: absolute; 
top: 13rem;
left: 7rem;


`;

const StyledImg = styled.img`

    width: 6.2rem;
    padding-top: 1px;
    height: 3.2rem;
    margin-top: 1px;
    z-index: 50;
`;




export class videoModal3 extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return ( 
      <div>
        <div>
        <Container1>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="1TVr1R5j_ao"
            onClose={() => this.setState({ isOpen: false })}
          />
          
          </Container1>
         <Container>
          <StyledImg src={profile} onClick={this.openModal}/>
          </Container>
         
        </div>
      </div>
    );
  }
}

export default videoModal3;
