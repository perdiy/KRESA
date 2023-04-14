import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import Secondarybutton from './SecondaryButton';
import Button from './button';
import kecil from "../img/kecil.png"
import kecil1 from "../img/kecil1.png"
import ring1 from '../img/OJ287.png';
import astro from '../img/Asteroids.png';
import up from "../img/up.png"
import message1 from '../img/shade.png';
import garis from "../img/garis.png";
import message2 from '../img/message_blue.svg';
import batu1 from "../img/Stone 1.png"
import batu2 from "../img/Stone 2.png"
import batu3 from "../img/Stone 3.png"
import batu4 from "../img/Stone 3.png"
import tlpn from "../img/tell.png"
import { InnerLayout } from '../styles/Layouts';
import { Fade } from 'react-reveal';
import ig from "../img/IG.png";
import yt from "../img/YT.png";
import logo from "../img/Logok.png"
import back from "../img/Back or Up Button.png"
import down from "../img/down.png";
import bg from "../img/BG Star.png"


function PageMerchan() {
  const URL = ('http://127.0.0.1:8000/api/merchan');
  const [user, setUser] = useState([]);

  useEffect( () => {

      const FetchApi = async () => {
          const users = await axios.get(`${URL}`)
           .then( response => setUser(response.data.data))
           .catch( err => console.log(err))
          //  .then(response => console.log(response))
      }
      
      // Call Function 
      FetchApi();
  }, [])

    return (
      
        <PageMerchanStyled  id="up">
          {
        user.map(user => {
            return(
                <ul key={user.id}>
                    <li>
                        {/* <h1>{user.title}</h1>
                        <img src={user.image1} /> */}
            <Fade left cascade>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>{user.title}</h1>
                    <p className="white">
                    choose your own star
                    </p>  
                    <p className="white1">
                    OJ 287 Black Hole
                    </p>
                    <p className="white2">
                    All  Right Reserved by Kresa Rumah Sains
                    </p>
                </div>
            </div>
 </Fade>


 
            <Fade right>
            <div className="right-content">
                
                
                <img src={ring1} alt="" className="ring1" />
                <a href="#up">
                <img src={up} alt="" className="up" />
                </a>
                <img src={batu1} alt="" className="batu1" />
                <img src={bg} alt="" className="bg" />
                <img src={batu2} alt="" className="batu2" />
                <img src={batu3} alt="" className="batu3" />
                <img src={ig} alt="" className="ig" />
                <a href="https://www.youtube.com/channel/UCmMLu-mGr6a1CTD1lV3RtPQ"><img src={yt} alt="" className="yt" /> </a>
                <img src={kecil} alt="" className="kecil" />
                <img src={kecil1} alt="" className="kecil1" />
                <img src={batu4} alt="" className="batu4" />
                <img src={garis} alt="" className="garis" />
                <img src={astro} alt="" className="astro" />
                <a href="/matgeci">  <img src={back} alt="" className="back" />  </a>
                <img src={message1} alt="" className="message1" />
                <a href="/">  <img src={logo} alt="" className="logo" /> </a>
                <a href="/">  <img src={tlpn} alt="" className="tlpn" /> </a>
                <img src={down} alt="" className="down" />
                
            </div>
            </Fade> 

            <Fade left cascade>
            <div className="text3">
                <div className="tex3-container">
                    <h4> Pre-order your desire star </h4>
                  
                    </div>
            </div>
            </Fade> 

            </li>
            </ul>
                    )
                }
            )
        }
            
        </PageMerchanStyled>

        
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

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(15px) }
    100% { transform: translateY(-5px) }
`;

const PageMerchanStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 5rem;
        margin-bottom: 4rem;
        padding: 2rem ;
    
        z-index: 10;
        .white{
            color:white;
        }
        h1{
          font-size: 5rem;
            letter-spacing: 1rem;
            font-weight: 800px;
            margin-top:6.2rem;
            font-family: futura;
            margin-left: -17.2rem;
            margin-right: -12.2rem;
            z-index: 20;
        }

        .white{
          position: absolute;
            top: 18rem;
            text-align: right;
            right: 67rem;
            padding: 20px;
            line-height: 1rem;
            font-size: 16px;
            z-index: 10; 
        }
        .white1{
          position: absolute;
            top: 39.7rem;
            text-align: right; 
            right: -34rem;
            margin: -12rem;
            line-height: 1rem;
            font-size: 11px;
            z-index: 10;  
        }
        .white2{
          position: absolute;
            top: 44.7rem;
            text-align: right; 
            right: -46rem;
            margin: -12rem;
            line-height: 1rem;
            font-size: 11px;
            z-index: 100; 
        }
    }

    .text3{
        position: absolute;
        top: 112.2rem;
        display: flex;
        left: 31rem;
        align-items: center;
        text-align: center;
        margin-right: 30rem;

        margin: 50px;
        
        z-index: 10;
        .white3{
            color:white;
        }
        h4{ 
           
           
            font-style: bold;
            text-align: right;
            font-size: 20px;
            font-weight: 600;
            z-index: 10;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }

        
    }

   
    
    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        z-index: 1;
        
        .ring1{
            position: absolute;
            top:-29rem;
            right: -39rem;
            left: auto;
            width: 57rem;
            z-index: 11;
            
        }
        .astro{
          position: absolute;
            top: -28rem;
            right: -32rem;
            left: auto;
            width: 50rem;
            z-index: 16;
            transition: all .15s ease-in-out;
            animation: move 20s infinite;
        }

        .batu1{
            position: absolute;
            top: -2rem;
            right: -35rem;
            left: auto;
            width: 10rem;
            z-index: 20;
            transition: all .4s ease-in-out;
            animation: move 6s infinite;
            
        }

        .batu2{
            position: absolute;
            top: -20rem;
            right: 34%;
            left: auto;
            width: 6rem;
            z-index: 20;
            animation: ${rotate} infinite 85s linear;
           
        }

        .batu3{
            position: absolute;
            top:-22rem;
            right: -37rem;
            left: auto;
            width: 10rem;
            z-index: 20;
            animation: ${rotate} infinite 50s linear;
           
        }

        .batu4{
            position: absolute;
            top: 5rem;
            right: 2rem;
            left: auto;
            width: 10rem;
            z-index: 20;
            animation: ${move} infinite 10s linear;
            
        }
        
        .wire{
            position: absolute;
            top: 24.8%;
            right: 53rem;
            left: auto;
            width: 6.7rem;
            z-index: 6;
          
            
        }

        .button{
            position: absolute;
            top: 25%;
            right: -93rem;
            left: auto;
            width: 7rem;
            z-index: 6;
          
            
        }
        .message1{
          position: absolute;
            top: -31rem;
            right: -42rem;
            left: auto;
            width: 60rem;
        }
        .garis{
            position: absolute;
            top: -11.7rem;
            right: 28.8rem;
            left: auto;
            width: 14rem;
            z-index: 10;
        }
      
    }

    
    .logo{
            position: absolute;
            top: -20rem;
            right: 36rem;
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
.ig{
            position: absolute;
            bottom: 20.2rem;
            right: -37rem;
            left: auto; 
            width: 2rem;
            z-index: 20;
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

        .yt{
            position: absolute;
            bottom: 20.4rem;
            right: -34rem;
            left: auto;
            width: 2.2rem;
            z-index: 50;
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

        .down{
            position: absolute;
            top: 5.4rem;
            right: 27rem;
            left: auto;
            width: 17rem;
            z-index: 6;
        } 

.back{
            position: absolute;
            top: -16rem;
            right: 35rem;
            left: auto;
            width: 2rem;
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

.up{
            position: absolute;
            top: 95.3rem;
            right: 34rem;
            left: auto;
            width: 3rem;
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
.kecil{
            position: absolute;
            top: -28.5rem;
            right: 30rem;
            left: auto;
            width: 20rem;
            z-index: 1;
        }

        .kecil1{
            position: absolute;
            top: 77.8rem;
            right: 20.5rem;
            left: auto;
            width: 25rem;
            z-index: 10;
        }

        .bg{
            position: absolute;
            top: 28rem;
            right: -28rem;
            left: auto;
            width: 60rem;
            z-index: 2;
            
        }

.tlpn{
            position: absolute;
            top: 90.9rem;
            right: 9rem;
            width: 3rem;
            z-index: 90;
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
    .kiri{
        position: absolute;
        display: absolute;
        top: 13.2rem;
        left: 70px;
        align-items: center;
        padding-right: 1rem;
        
        z-index: 12;
        @media screen and (max-width: 700px){
                font-size: 1rem;
                left: 20rem;
                top: 9rem;
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

export default PageMerchan;
