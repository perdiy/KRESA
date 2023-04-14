import React, {useState, useEffect} from 'react';
import axios from 'axios';

import styled, { keyframes } from 'styled-components';
import Secondarybutton from './SecondaryButton';
import Button from './button';

import ring1 from '../img/mat.png';
import astro from '../img/Asteroids.png';
import message1 from '../img/shade.png';
import message2 from '../img/message_blue.svg';
import batu1 from "../img/Stone 1.png"
import batu2 from "../img/Stone 2.png"
import batu3 from "../img/Stone 3.png"
import bg from "../img/BG Star.png"
import down from "../img/down.png";
import putih1 from "../img/putih.png"
import putih2 from "../img/putih.png"
import putih3 from "../img/putih.png"
import pla from "../img/Cygnus.png"
import pla2 from "../img/Cygnus.png"
import r from "../img/Rocket Body.png"
import { Fade } from 'react-reveal';
import wire from "../img/Wire.png"
import logo from "../img/Logok.png"
import up from "../img/up.png"
import ig from "../img/IG.png";
import yt from "../img/YT.png";
import garis from "../img/garis.png";
import kecil1 from "../img/kecil1.png"
import team from "../img/kartun.jpeg"
import tumb1 from "../img/kartun.jpeg"
import tumb2 from "../img/kartun.jpeg"
import tumb3 from "../img/kartun.jpeg"
import tumb4 from "../img/kartun.jpeg"
import tumb5 from "../img/kartun.jpeg"
import ReactPlayer from "react-player";


function MatContent2() {
  const URL = ('http://127.0.0.1:8000/api/video3');
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
    
                    
      
        <PageShowStyled id="up">

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
                       a passionate team that loves, story and experiences
                    </p>
                    <p className="white11">
                       Cygnus A Black Hole
                    </p>
                    <p className="white22">
                    All  Right Reserved by Kresa Rumah Sains
                    </p>
                    <br/>
                   
                    

                    <p className="sub1" id="showmore">
                    {user.title_section1}
                    </p>
                    <p className="desc1">
                    {user.desc_section1}
                    </p>

                    <p className="sub2">
                    {user.title_section2}
                    </p>
                    <p className="desc2">
                    {user.desc_section2}
                    </p>

                    <p className="sub3">
                    {user.title_section3}
                    </p>
                    <p className="desc3">
                    {user.desc_section3}
                    <br/>
                    <br/>
                    Come on, let's be busy, take care of our environment through :
                    </p>
                    
                    <p className="but1">
                    Spared Love <br/> Not trash 
                    </p>

                     
                    <p className="but2">
                    Care Around < br/> You
                    </p>

                    <p className="but3">
                    Bloom Your < br/> House
                    </p>

                    <p className="but4">
                    Wear Our < br/> Shirt
                    </p>


                </div>
            </div>
           
 </Fade>

 <Fade left cascade>
 <div className="right-content1">
 <ReactPlayer url={user.link} controls={true} />
 </div>

 </Fade>
            <Fade right>
            <div className="right-content">
                
                
                <img src={bg} alt="" className="bg" />
                <a href="/video"> <img src={tumb1} alt="" className="tumb1" /> </a>
                <a href="/1"> <img src={tumb2} alt="" className="tumb2" /> </a>
                <a href="/2">  <img src={tumb3} alt="" className="tumb3" /> </a>
                <a href="/3">  <img src={tumb4} alt="" className="tumb4" /> </a>
                <a href="/4">  <img src={tumb5} alt="" className="tumb5" /> </a>
                <img src={pla} alt="" className="pla" />
                <img src={pla2} alt="" className="pla2" />
                <img src={r} alt="" className="r" />
                <img src={ring1} alt="" className="ring1" />
                {/* <img src={wire} alt="" className="wire" /> */}
                <img src={batu1} alt="" className="batu1" />
                <img src={ig} alt="" className="ig" />
                <img src={yt} alt="" className="yt" />
                <img src={down} alt="" className="down" />
                <img src={kecil1} alt="" className="kecil1" />
                <img src={putih1} alt="" className="putih1" />
                <img src={putih2} alt="" className="putih2" />
                <img src={putih3} alt="" className="putih3" />
                <img src={batu2} alt="" className="batu2" />
                <img src={batu3} alt="" className="batu3" />
                <img src={astro} alt="" className="astro" />
                <a href="#up">
                <img src={up} alt="" className="up" />
                </a>
                <a href="/about">
                </a>
                <img src={message1} alt="" className="message1" />
                <a href="/">  <img src={logo} alt="" className="logo" /> </a>
                <img src={garis} alt="" className="garis" />  
                <img src={team} alt="" className="team" />
                
                
            </div>
            </Fade> 

            {/* <Fade left cascade>
            <div className="kiri">
            <a href="/"><Button /></a>
            <br/>
            <a href="/matgeci"><Button /></a>
            <br/>
            <a href="/about"><Button /></a>
            <br/>
            <a href="/letsget"><Button /></a>
           
            </div>
            </Fade> */}
            
            </li>
            </ul>
                    )
                }
            )
        }

            
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
    padding-top: 5rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 1rem;
        margin-bottom: 4rem;
        padding: 2rem ;
        z-index: 10;
        .white{
            color:white;
        }
        h1{
          font-size: 5rem;
            letter-spacing: 1rem;
            font-weight: 800;
            margin-top:5.2rem;
            font-family: futura;
            margin-left: -12.2rem;
            margin-right: -12.2rem;
            z-index: 20;
        }

        h2{
          font-size: 5rem;
            margin-top: -1.9rem;
            margin-left: -12.2rem;
            z-index: 20;
        }

        .white{
            position: absolute;
            top: 25.7rem;
            margin: -10rem;
            right: 6rem;
            padding: 20px;
            font-style: italic;
            line-height: 24px;
            font-size: 23px;
            z-index: 5;
        }
        .white11{
          position: absolute;
            top: 33.7rem;
            text-align: right; 
            right: -28rem;
            margin: -12rem;
            line-height: 1rem;
            font-size: 11px;
            z-index: 10; 
        }
        .white22{
          position: absolute;
            top: 50rem;
            text-align: right; 
            right: -42rem;
            margin: -12rem;
            line-height: 1rem;
            font-size: 11px;
            z-index: 10; 
        }

        .sub1{
            position: absolute;
            top: 62.3rem; 
            color: white;
            right: 27rem;
            font-weight: 800;
            font-style: bold; 
            margin: -17rem;
            
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            padding: 20px;
            line-height: 1rem;
            font-size: 36px;
            z-index: 10; 
        }
        .desc1{
            position: absolute;
            top: 63.9rem;
            color: white;
            left: 1rem;
            margin: -13rem;
            line-height: 1rem;
            font-size: 15px;
            z-index: 10; 
        }

        .sub2{
          position: absolute;
            top: 79.9rem; 
            color: white;
            right: 26rem;
            font-weight: 800;
            font-style: bold; 
            margin: -17rem;
            
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            padding: 20px;
            line-height: 1rem;
            font-size: 36px;
            z-index: 10; 
        }
        .desc2{
          position: absolute;
            top: 91.4rem;
            color: white;
            left: 10rem;
            margin: -23rem;
            line-height: 1rem;
            font-size: 15px;
            z-index: 10; 
        }

        .sub3{
          position: absolute;
            top: 93.4rem; 
            color: white;
            right: 26rem;
            font-weight: 800;
            font-style: bold; 
            margin: -17rem;
            
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            padding: 20px;
            line-height: 1rem;
            font-size: 36px;
            z-index: 10; 
        }
        .desc3{
          position: absolute;
            top: 105.4rem;
            color: white;
            left: 10rem;
            margin: -23rem;
            line-height: 1rem;
            font-size: 15px;
            z-index: 10; 
        }








        .but1{
            position: absolute;
            top: 101.4rem; 
            color: white;
            margin: -11rem; 
           padding-left: 20px;
           padding-right: 20px;
            background-color: white;
            line-height: 1.3rem;
            font-size: 17px;
            color: black;
            font-weight: 900;
            border-radius: 30px;
            z-index: 100;
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
  transform: scale(1.2);
}
          
            
        }

        .but2{
          position: absolute;
            top: 101.4rem; 
            right: 16rem;
            color: white;
            margin: -11rem; 
           padding-left: 20px;
           padding-right: 20px;
            background-color: white;
            line-height: 1.3rem;
            font-size: 17px;
            color: black;
            font-weight: 900;
            border-radius: 30px;
            z-index: 100;
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
  transform: scale(1.2);
}
            
        }

        .but3{
          position: absolute;
            top: 101.4rem; 
            right: 7rem;
            color: white;
            margin: -11rem; 
           padding-left: 20px;
           padding-right: 20px;
            background-color: white;
            line-height: 1.3rem;
            font-size: 17px;
            color: black;
            font-weight: 900;
            border-radius: 30px;
            z-index: 100;
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
  transform: scale(1.2);
}
            
        }
        .but4{
          position: absolute;
            top: 101.4rem; 
            right:-1rem;
            color: white;
            margin: -11rem; 
           padding-left: 20px;
           padding-right: 20px;
            background-color: white;
            line-height: 1.3rem;
            font-size: 17px;
            color: black;
            font-weight: 900;
            border-radius: 30px;
            z-index: 100;
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
  transform: scale(1.2);
}
        }
        
    }

    .text1{
        position: absolute;
        top: 57.8rem;
        display: flex;
        align-items: center;
        margin-right: 33rem;
        padding-right: 1rem;
        padding-bottom: -20rem;
        z-index: 10;
        .white1{
            color:white;
        }
        h2{  position: absolute;
            top: -5.5rem;
            right: 27rem;
            font-size: 34px;
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
        .white11{
            position: absolute;
            top: 20rem;
            text-align: right;
            right: 12rem;
            padding: 20px;
            line-height: 1rem;
            font-size: 11px;
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
    
    .right-content1{
      position: absolute;
      z-index: 100;
      top: 9.3rem;
      right: 26rem;
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
            top: -26rem;
            right: -35rem;
            left: auto;
            width: 40rem;
            z-index: 101;
            animation: ${rotate} infinite 20s linear;
        }

        .team{
            position: absolute;
            top: 23rem;
            right: -30rem;
            left: auto;
            width: 25rem;
           
            z-index: 11;
            
        }

        .bg{
            position: absolute;
            top: 1rem;
            right: -35rem;
            left: auto;
            width: 60rem;
            z-index: 2; 
            
        }
        .astro{
            position: absolute;
            top: -33rem;
            right: -32rem;
            left: auto;
            width: 50rem;
            z-index: 5;
            transition: all .15s ease-in-out;
            animation: move 20s infinite;
        }

        .batu1{
            position: absolute;
            top: -31rem;
            right: -2rem;
            left: auto;
            width: 12rem;
            z-index: 16;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            
        }
        .garis{
            position: absolute;
            top: -15.7rem;
            right: 21.7rem;
            left: auto;
            width: 16rem; 
            z-index: 0;
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
            top: -2rem;
            right: -2rem;
            left: auto;
            width: 10rem;
            z-index: 6;
            animation: ${rotate} infinite 50s linear;
           
        }

        .batu3{
            position: absolute;
            top: -27rem;
            right: -35rem;
            left: auto;
            width: 10rem;
            z-index: 6;
            animation: ${rotate} 25s ease infinite;
           
        }
        
        .pla{
            position: absolute;
            top: 15rem;
            right: -15rem;
            left: auto;
            width: 8rem;
            z-index: 20;
            
            
        }
        .tumb1{
            position: absolute;
            top: -25rem;
            right: -40rem;
            left: auto;
            width: 8rem;
            z-index: 20; 
            transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.2);
  }
        
        }

        .tumb2{
            position: absolute;
            top: -19rem;
            right: -40rem;
            left: auto;
            width: 8rem;
            z-index: 20; 
            transition: transform 0.2s;
            img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.2);
  } 
        }

        .tumb3{
            position: absolute;
            top: -13rem;
            right: -40rem;
            left: auto;
            width: 8rem;
            z-index: 20;  
            transition: transform 0.2s;
            img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.2);
  }
        }

        .tumb4{
            position: absolute;
            top: -7rem;
            right: -40rem;
            left: auto;
            width: 8rem;
            z-index: 20;  
            transition: transform 0.2s;
            img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.2);
  }
        }

        .tumb5{
            position: absolute;
            top: -1rem;
            right: -40rem;
            left: auto;
            width: 8rem;
            z-index: 20;  
            transition: transform 0.2s;
            img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.2);
  }
        }
        

        .pla2{
            position: absolute;
            top: 68rem;
            right: 20rem;
            left: auto;
            width: 11rem;
            z-index: 20;
            
            
        }

        .r{
            position: absolute;
            top: 71rem; 
            right: 6rem;
            left: auto;
            width: 8rem;
            z-index: 2;
            
            
        }
        .down{
            position: absolute;
            top: 2rem;
            right: 25.9rem;
            left: auto;
            width: 20rem;
            z-index: 6;
        }
        .ig{
            position: absolute;
            bottom: 27.8rem;
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
            bottom: 28rem;
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
        .up{
            position: absolute;
            top: 80rem;
            right: 35.9rem;
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

        
        .logo{
            position: absolute;
            top: -29rem;
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
        .wire{
            position: absolute;
            top: -17.8rem;
            right: 34.2rem;
            left: auto;
            width: 8.9rem;
            z-index: 6;
        }

//anjayy
        .putih1{
            position: absolute;
            top: 32rem;
            right: 31rem;
            left: auto;
            width: 18rem;
            z-index: 100;
              
        }

        .putih2{
            position: absolute;
            top: 45.4rem;
            right: 31rem;
            left: auto;
            width: 18rem;
            z-index: 100;
              
        }
        
        .putih3{
            position: absolute;
            top: 14.5rem;
            right: 31rem;
            left: auto;
            width: 18rem;
            z-index: 100;
              
        }
        .kecil1{
            position: absolute;
            top: 59.3rem;
            right: 20rem;
            left: auto;
            width: 29rem;
            z-index: 10;
        }
        

      
        .message1{
            position: absolute;
            top: -40rem;
            right: -42rem;
            left: auto;
            width: 60rem;
            
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

export default MatContent2;
