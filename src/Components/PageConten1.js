import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import Secondarybutton from './SecondaryButton';
import Button from './button';
import ring1 from '../img/mat.png';
import astro from '../img/Asteroids.png';
import message1 from '../img/shade.png';
import message2 from '../img/message_blue.svg';
import batu1 from "../img/Stone 2.png"
import batu2 from "../img/Stone 2.png"
import batu3 from "../img/Stone 2.png"
import ig from "../img/IG.png";
import yt from "../img/YT.png";
import down from "../img/down.png";
import wire from "../img/Wire.png"
import p from "../img/Cygnus.png"
import garis from "../img/garis.png";
import { Fade } from 'react-reveal';
import logo from "../img/Logok.png"





function PageContent1() {
    const URL = ('http://127.0.0.1:8000/api/page2');
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

        <PageContent1Styled>
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
                    <h2>{user.desc}</h2>
                    <p className="white">
                       a series especially for you
                    </p>
                    <p className="white1">
                       Cygnus A Black Hole
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
                <img src={batu1} alt="" className="batu1" />
                <img src={batu2} alt="" className="batu2" />
                <img src={batu3} alt="" className="batu3" />
                <img src={down} alt="" className="down" />
                <img src={p} alt="" className="p" />
                <img src={ig} alt="" className="ig" />
                <img src={yt} alt="" className="yt" />
                <img src={astro} alt="" className="astro" />
                <img src={wire} alt="" className="wire" />
                <img src={garis} alt="" className="garis" />
                <img src={message1} alt="" className="message1" />
                <a href="/">  <img src={logo} alt="" className="logo" /> </a>
                
            </div>
            </Fade> 

            <Fade left cascade>
            <div className="kiri">
            <a href="/"><Button /></a>
            <br/>
            <a href="/matgeci"><Button /></a>
            <br/>
            <a href="/about"><Button /></a>
            <br/>
            <a href="/letsget"><Button /></a>
           
            </div>
            </Fade>
            </li>
            </ul>
                    )
                }
            )
        }

            
        </PageContent1Styled>

        
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

const PageContent1Styled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 4rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 1rem;
        padding-top: -2rem;
        padding: 2rem ;
        z-index: 100;
        .white{
            color:white;
        }
        h1{
            
            font-size: 5rem;
            letter-spacing: 1rem;
            font-weight: 800;
            margin-top:6.2rem;
            font-family: futura;
            margin-left: -12.2rem;
            margin-right: -12.2rem;
            z-index: 20;
    
        }

        h2{
            
           position: relative;
            font-size: 5rem;
            margin-top: -1.9rem;
            margin-left: -12.2rem;
            z-index: 20;
    
        }

        .white{
            margin-top: 1px;
            margin-left: -10rem;
            font-size: 23px;
            font-style: italic;
            z-index: 5;
        }
        .white1{
            position: absolute;
            top: 30.7rem;
            text-align: right; 
            right: -30rem;
            margin: -12rem;
            line-height: 1rem;
            font-size: 11px;
            z-index: 10; 
        }
        .white2{
            position: absolute;
            top: 50rem;
            text-align: right; 
            right: -42rem;
            margin: -12rem;
            line-height: 1rem;
            font-size: 11px;
            z-index: 10; 
        }
    }
    

    
    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        z-index: 1;
    
        
    
        .ring1{
            position: absolute;
            top: -23.3rem;
            right: -35.5rem;
            left: auto;
            width: 43rem;
           z-index: 99;
           animation: ${rotate} infinite 80s linear;
            z-index: 11;
        }

        .p{
            position: absolute;
            top: -27rem;
            right: -28rem;
            left: auto;
            width: 14rem;
            z-index: 10;
            
        }

        .astro{
            position: absolute;
            top: -30rem;
            right: -32rem;
          
            left: auto;
            width: 51rem;
            z-index: 5;
            transition: all .15s ease-in-out;
            animation: move 20s infinite;
            z-index: 1;
        }
        .ig{
            position: absolute;
            bottom: 24.2rem;
            right: -38rem;
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
            bottom: 24.4rem;
            right: -35rem;
            left: auto;
            width: 2.2rem;
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

        .batu1{
            position: absolute;
            top: -27rem;
            right: 1rem;
            left: auto;
            width: 12rem;
            z-index: 16;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            
        }

        .batu2{
            position: absolute;
            top: 5rem;
            right: 4rem;
            left: auto;
            width: 10rem;
            z-index: 6;
            animation: ${move} 5s ease infinite;  
        }

        .batu3{
            position: absolute;
            top: 2rem;
            right: -37rem;
            left: auto;
            width: 10rem;
            z-index: 6;
            animation: ${rotate} 25s ease infinite;
        }
        
        .garis{
            position: absolute;
            top: -12.7rem;
            right: 23rem;
            left: auto;
            width: 16rem;
            z-index: 0;
        }

        .wire{
            position: absolute;
            top: -14.6rem;
            right: 37rem;
            left: auto;
            width: 9rem;
            z-index: 6;
        }

        .down{
            position: absolute;
            top:4rem;
            right: 26rem;
            left: auto;
            width: 20rem;
            z-index: 6;
        } 
        .logo{
            position: absolute;
            top: -26rem;
            right: 35rem;
            left: auto;
            width: 3.5rem;
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

        
        .message1{
            position: absolute;
            top: -35rem;
            right: -42rem;
            left: auto;
            width: 60rem;
            
        }
      
    }

    .kiri{
        position: absolute;
        display: absolute;
        top: 13rem;
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

export default PageContent1;
