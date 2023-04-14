
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Secondarybutton from './SecondaryButton';
import Button from './button';
import phone from '../img/shade.png';
import ring1 from '../img/Astronot 1.png';
import astro from '../img/Asteroids.png';
import message1 from '../img/shade.png';
import message2 from '../img/message_blue.svg';
import batu1 from "../img/Stone 1.png"
import batu2 from "../img/Stone 2.png"
import batu3 from "../img/Stone 3.png"
import bg from "../img/BG Star.png"
import pla from "../img/Cygnus.png"
import pla2 from "../img/Cygnus.png"
import r from "../img/Rocket Body.png"
import { Fade } from 'react-reveal';
import back from "../img/Back or Up Button.png"
import logo from "../img/Logok.png"

function PageShow() {
    return (
        <PageShowStyled>
            <Fade left cascade>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>About <br/> Us</h1>
                    <p className="white">
                       a passionate team that loves, story and experiences
                    </p>

                    
                </div>
            </div>

            <div className="text1">
                <div className="tex1-container">
                    <h2> WHO R WE</h2>
                    <p className="white1">
                    Kundrad sedang memimpin memimpin upacara ditengah guardians of the balance of nature in the word.
                    While delivering Kundrad. a soldier revolted. Greeshak want all resources mus be explointed for themselves.
                    for the sake of power and the destruction of the balance of nature which the elders had guarded for many years,
                    Greeshak rolled kundrad and the elders. there was war, the elder tried to stop rasaksha and his army.
                    Greeshak cursed kundrad intro a cat to seal  his power. Greeshak will destroy EARTH, the key to the balance of
                    abudant resource. Greeshaks journey to erath begins, Greeshak will face offwith Mat Gaci and friends 
                    who had been given power bu Kundrad.
                    </p>
                    </div>
            </div>

            <div className="text2">
                <div className="tex2-container">
                    <h3> INTEREST</h3>
                    <p className="white2">
                    he environment needs to be considered, protected and preserved. Start small
                    such as throwing garbage in its place, planting trees, and saving energy.
                    Small into hills, plant 1 tree into 1 sustainable forest.
                    Together with Mat Geci and friends, clean up the environment.
                    We are against Greshak who wants to destroy Earth's nature.
                    We prevent greedy people from spending
                    natural resources irresponsibly.
                    </p>
                    </div>
            </div>

            <div className="text3">
                <div className="tex3-container">
                    <h4> SERVICES </h4>
                    <p className="white3">
                    The Mat Geci series is here to fill the space for environmental education for generations
                    of youth for the creation of a beautiful and sustainable environment. One more child
                    loves the environment, the Earth smiles happily. Embrace the Love for the Environment with Mat Geci.
                    <br/>
                    <br/>
                    Come on, let's be busy, take care of our environment through :
                    </p>
                    </div>
            </div>
 </Fade>


 
            <Fade right>
            <div className="right-content">
                
                <img src={phone} alt="" className="phone" />
                <img src={bg} alt="" className="bg" />
                <img src={pla} alt="" className="pla" />
                <img src={pla2} alt="" className="pla2" />
                <img src={r} alt="" className="r" />
                <img src={ring1} alt="" className="ring1" />
                <img src={batu1} alt="" className="batu1" />
                <img src={batu2} alt="" className="batu2" />
                <img src={batu3} alt="" className="batu3" />
                <img src={astro} alt="" className="astro" />
                <a href="/about">
                <img src={back} alt="" className="back" />
                </a>
                <img src={message1} alt="" className="message1" />
                <a href="/">  <img src={logo} alt="" className="logo" /> </a>
                
                
            </div>
            </Fade> 

            
            
            
        </PageShowStyled>

        
    )
}

const rotate = keyframes`
from{
  transform:rotate(0deg)
}

to{
  transform:rotate(360deg)
}

`;

const PageShowStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: -7rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 1rem;
        padding-bottom: -20rem;
        z-index: 10;
        .white{
            color:white;
        }
        h1{
            font-size: 4rem;
            font-weight: 600;
            z-index: 10;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }

        .white{
            padding: 1px;
            line-height: 1rem;
            font-size: 12px;
            z-index: 10;
        }
    }

    .text1{
        position: absolute;
        top: 50rem;
        display: flex;
        align-items: center;
        margin-right: 33rem;
        padding-right: 1rem;
        padding-bottom: -20rem;
        z-index: 10;
        .white1{
            color:white;
        }
        h2{ position: absolute;
            bottom: 10.6rem;
            font-style: bold;
            right: 10.5rem;
            font-size: 40px;
            font-weight: 600;
            z-index: 10;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }

        .white1{
            right: 3rem;
            margin-top: 20px;
            line-height: 1rem;
            font-size: 12px;
            z-index: 10;
        }
    }

    .text2{
        position: absolute;
        top: 70rem;
        left: 20rem;
        display: flex;
        align-items: center;
        margin-right: 17rem;
        
        padding-bottom: -20rem;
        z-index: 10;
        .white2{
            color:white;
        }
        h3{ position: absolute;
            bottom: 6rem;
            font-style: bold;
            right: 28rem;
            font-size: 40px;
            font-weight: 600;
            z-index: 10;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }

        .white2{
            
            right: 7rem;
            margin-top: 20px;
            line-height: 1rem;
            font-size: 12px;
            z-index: 10;
        }
    }
    
    .text3{
        position: absolute;
        top: 88rem;
        display: flex;
        align-items: center;
        margin-right: 30rem;
        padding-right: -15rem;
        
        z-index: 10;
        .white3{
            color:white;
        }
        h4{ 
            position: absolute;
            bottom: 7.8rem;
            font-style: bold;
            right: 15rem;
            font-size: 40px;
            font-weight: 600;
            z-index: 10;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }

        .white3{
            right: 3rem;
            margin-top: 20px;
            line-height: 1rem;
            font-size: 12px;
            z-index: 10;
        }
    }
    
    

    
    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        z-index: 1;
        .phone{
            width: 80%;
        }
        .ring1{
            position: absolute;
            top: -5%;
            right: 31%;
            left: auto;
            width: 22rem;
            z-index: 11;
            
        }

        .bg{
            position: absolute;
            top: 19rem;
            right: 31%;
            left: auto;
            width: 67rem;
            z-index: 2;
            
        }
        .astro{
            position: absolute;
            top: -20%;
            right: 3%;
            left: auto;
            width: 39rem;
            z-index: 6;
            transition: all .15s ease-in-out;
            animation: move 20s infinite;
            
        }

        .batu1{
            position: absolute;
            top: -18%;
            right: 120%;
            left: auto;
            width: 10rem;
            z-index: 20;
            transition: all .4s ease-in-out;
            animation: move 6s infinite;
            
        }


            .back{
            position: absolute;
            top: 1rem;
            right: 54rem;
            left: auto;
            width: 2rem;
            z-index: 20;

            display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.6);
  }
  &:active {
    transform: scale(1.2);
  }
            
            
        }

        .batu2{
            position: absolute;
            top: -15%;
            right: 14%;
            left: auto;
            width: 6rem;
            z-index: 20;
            animation: ${rotate} infinite 85s linear;
           
        }

        .batu3{
            position: absolute;
            top: 95%;
            right: -5%;
            left: auto;
            width: 10rem;
            z-index: 20;
            animation: ${rotate} infinite 50s linear;
           
        }
        
        .pla{
            position: absolute;
            top: 35rem;
            right: 15rem;
            left: auto;
            width: 8rem;
            z-index: 20;
            
            
        }

        .pla2{
            position: absolute;
            top: 87rem;
            right: 32rem;
            left: auto;
            width: 13rem;
            z-index: 20;
            
            
        }

        .r{
            position: absolute;
            top: 87rem;
            right: 1rem;
            left: auto;
            width: 10rem;
            z-index: 20;
            
            
        }

        
        .logo{
            position: absolute;
            top: -6rem;
            right: 53rem;
            left: auto;
            width: 3rem;
            z-index: 6;
            display: flex;
  align-items: center;
  transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.4);
  }
  &:active {
    transform: scale(1.1);
  } 
}

        .bu{
        position: absolute;
        display: flex;
        margin-bottom: 20rem;
        align-items: center;
        padding-right: 1rem;
        
        z-index: 60;
        @media screen and (max-width: 700px){
                font-size: 1rem;
                left: 20rem;
                top: 9rem;
            }
       
        
        }

        
        

      
        .message1{
            position: absolute;
            top: -45%;
            right: -31%;
            left: auto;
            width: 50rem;
            
        }
      
    }

   
       

    //Header Animations
    
    .batu1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }
`;

export default PageShow;
