
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import Secondarybutton from './SecondaryButton';
import Button from './button';
import logo from "../img/Logok.png"
import ring1 from '../img/OJ287.png';
import astro from '../img/Asteroids.png';
import ig from "../img/IG.png";
import yt from "../img/YT.png";
import message1 from '../img/shade.png';
import message2 from '../img/message_blue.svg';
import batu1 from "../img/Stone 1.png"
import batu2 from "../img/Stone 2.png"
import batu3 from "../img/Stone 3.png"
import kecil from "../img/kecil.png"
import kecil1 from "../img/kecil1.png"
import bg from "../img/BG Star.png"
import pla from "../img/Cygnus.png"
import garis from "../img/garis.png";
import pla2 from "../img/Cygnus.png"
import r from "../img/Rocket Body.png"
import asap from "../img/Rocket Fire.png"
import { Fade } from 'react-reveal';
import back from "../img/Back or Up Button.png"
import up from "../img/up.png"

function KlikPage() {
    const URL = ('http://127.0.0.1:8000/api/work');
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

        <KlikPageStyled id="up">
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
                    <h4>{user.desc}</h4>
                    <p className="white"> 
                    </p>
                    <p className="white1"> 
                    OJ 287 Black Hole
                    </p>
                </div>
            </div>

            <div className="text1">
                <div className="tex1-container">
                    <h2> 2020 </h2>
                    <p className="mont1">
                     April
                    </p>
                    <p className="p1">
                     GIZ Global - Resiliensi
                    </p>

                    <p className="mont2">
                     May
                    </p>
                    <p className="p2">
                    OXFAM - ICDRC
                    </p>

                    <p className="mont3">
                     July
                    </p>
                    <p className="p3">
                     WHO Indonesia - KIE Limbah Medis
                    </p>

                    <p className="mont4">
                     Agust
                    </p>
                    <p className="p4">
                     WHO Indonesia - Polusi Udara
                    </p>

                    <p className="mont5">
                     September
                    </p>
                    <p className="p5">
                    PSB IPB - Sistem Investasi Pulau Kecil
                    </p>

                    <p className="mont6">
                     October
                    </p>
                    <p className="p6">
                    IPB University - Ketahanan Keluarga 
                    </p>
                    <p className="pp6">
                    BNPB - Pendampingan Ekonomi di Wilayah Pasca Bencan 
                    </p>
                    
                    <p className="mont7">
                     November
                    </p>
                    <p className="p7">
                    WHO Indonesia - Desa Desi
                    </p>
                    <p className="pp7">
                    GIZ Global - Loss and Damage
                    </p>
                    </div>
            </div>

            

            <div className="text2">
                <div className="tex2-container">
                    <h2> 2021 </h2>
                    <p className="mont8">
                     March
                    </p>
                    <p className="p8">
                    PIAREA - Visual Identity for survey system “Plodot.id”
                    </p>
                    <p className="pp8">
                    GIZ Indonesia - KIE for Regulation Review
                    </p>

                    <p className="mont9">
                    May
                    </p>
                    <p className="p9">
                    GIZ Global - KIE Loss and Damage
                    </p>

                    <p className="mont10">
                    June
                    </p>
                    <p className="p10">
                    BNPB - Pendampingan dan Pengembangan Ekonomi Pascabencana
                    </p>
            </div>
            </div>

            

           
 </Fade>


 
            <Fade right>
            <div className="right-content">
                
               
                <img src={bg} alt="" className="bg" />
                <img src={pla} alt="" className="pla" />
                <img src={pla2} alt="" className="pla2" />
                <img src={r} alt="" className="r" />
                <img src={ring1} alt="" className="ring1" />
                <img src={asap} alt="" className="asap" />
                <img src={kecil} alt="" className="kecil" />
                <img src={kecil1} alt="" className="kecil1" />
                <img src={batu1} alt="" className="batu1" />
                <img src={ig} alt="" className="ig" />
                <a href="https://www.youtube.com/channel/UCmMLu-mGr6a1CTD1lV3RtPQ"><img src={yt} alt="" className="yt" /> </a>
                <img src={batu2} alt="" className="batu2" />
                <img src={garis} alt="" className="garis" />
                <img src={batu3} alt="" className="batu3" />
                <img src={astro} alt="" className="astro" />
                <a href="/">
                <img src={back} alt="" className="back" />
                </a>
                <a href="#up">
                <img src={up} alt="" className="up" />
                </a>
                <img src={message1} alt="" className="message1" />
                <a href="/">  <img src={logo} alt="" className="logo" /> </a>
                
            </div>
            </Fade> 

            </li>
            </ul>
                    )
                }
            )
        }

            
            
        </KlikPageStyled>

        
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

const KlikPageStyled = styled.div`
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
            font-size: 5rem;
            letter-spacing: 1rem;
            font-weight: 800;
            margin-top:14.2rem;
            font-family: futura;
            margin-left: -12.2rem;
            margin-right: -12.2rem;
            font-style: bold; 
            z-index: 20;
        }

        h4{
            position: relative;
            font-size: 5rem;
            margin-top: -1.9rem;
            margin-left: -12.2rem;
            z-index: 20;
           
        }

        .white{
            padding: 1px; 
            line-height: 1rem;
            font-size: 12px;
            z-index: 10;
        }
        .white1{
            position: absolute;
            top: 3.7rem;
            text-align: right; 
            right: 9rem;
            margin: -12rem;
            line-height: 1rem;
            font-size: 11px;
            z-index: 10; 
        }
    }

    .text1{
        position: absolute;
        top: 50rem;
        display: flex;
        align-items: center; 
        margin-right: 20rem;
        padding-right: 1rem;
        padding-bottom: -20rem;
        z-index: 10;
        .white1{
            color:white;
        }
        h2{ position: absolute;
            right: 34rem;
            top: -1rem;
            font-size: 40px;
            font-weight: bold;
            z-index: 10;
          
        }

        .mont1{
            
            color: white;
            font-style: italic;
            right: 3rem;
            margin-top: 60px;
            margin-left: -11rem;
    
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }
        .p1{
            color: white;
            right: 3rem;
            margin-left: -11rem;
            margin-top: 15px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }

        .mont2{
            color: white;
            font-style: italic;
            right: 3rem;
            margin-left: -11rem;
            margin-top: 30px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }
        .p2{
            color: white;
            right: 3rem;
            margin-left: -11rem;
            margin-top: 15px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }

        .mont3{
            color: white;
            font-style: italic;
            right: 3rem;
            margin-left: -11rem;
            margin-top: 25px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }
        .p3{
            color: white;
            right: 3rem;
            margin-left: -11rem;
            margin-top: 13px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }

        .mont4{
            color: white;
            font-style: italic;
            right: 3rem;
            margin-left: -11rem;
            margin-top: 25px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }
        .p4{
            color: white;
            right: 3rem;
            margin-left: -11rem;
            margin-top: 13px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }

        .mont5{
            color: white;
            font-style: italic;
            right: 3rem;
            margin-left: -11rem;
            margin-top: 25px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }
        .p5{
            color: white;
            right: 3rem;
            margin-top: 13px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;
            margin-left: -11rem;

        
        }

        .mont6{
            color: white;
            font-style: italic;
            right: 3rem;
            margin-left: -11rem;
            margin-top: 25px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }
        .p6{
            color: white;
            right: 3rem;
            margin-top: 13px;
            margin-left: -11rem;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }

        .pp6{
            color: white;
            right: 3rem;
            margin-top: 13px;
            line-height: 1.3rem;
            font-size: 22px;
            margin-left: -11rem;
            z-index: 10;

        
        }

        .mont7{
            color: white;
            font-style: italic;
            right: 3rem;
            margin-top: 25px;
            line-height: 1rem;
            font-size: 22px;
            margin-left: -11rem;
            z-index: 10;

        
        }
        .p7{
            color: white;
            right: 3rem;
            margin-top: 13px;
            line-height: 1rem;
            font-size: 22px;
            margin-left: -11rem;
            z-index: 10;

        
        }

        .pp7{
            color: white;
            right: 3rem;
            margin-top: 13px;
            line-height: 1.3rem;
            font-size: 22px;
            margin-left: -11rem;
            z-index: 10;

        
        }
        
    }
    .text2{
        position: absolute;
        top: 95rem;
        display: flex;
        align-items: center;
        margin-right: 10rem;
        padding-right: 1rem;
        padding-bottom: -20rem;
        margin-left: -11rem;
        z-index: 10;
        
        }
        h2{ 
            position: absolute;
            right: 41rem;
            top: -3rem;
            font-size: 40px;
            font-weight: bold;
            margin-left: -11rem;
            z-index: 10;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        
        }
        .mont8{
            color: white;
            font-style: italic;
            right: 3rem;
            margin-left: 0rem;
            margin-top: 25px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }
        .p8{
            color: white;
            right: 3rem;
            margin-top: 13px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }

        .pp8{
            color: white;
            right: 3rem;
            margin-top: 13px;
            line-height: 1.3rem;
            font-size: 22px;
            z-index: 10;

        
        }

        .mont9{
            color: white;
            font-style: italic;
            right: 3rem;
            margin-top: 25px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }
        .p9{
            color: white;
            right: 3rem;
            margin-top: 13px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        }

        .mont10{
            color: white;
            font-style: italic;
            right: 3rem;
            margin-top: 25px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

        
        }
        .p10{
            color: white;
            right: 3rem;
            margin-top: 13px;
            line-height: 1rem;
            font-size: 22px;
            z-index: 10;

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
            top: -36rem;
            right: -42rem;
            left: auto;
            width: 65rem;
            z-index: 6;
            
        }

        .bg{
            position: absolute;
            top: 30rem;
            right: -30rem;
            left: auto;
            width: 50rem;
            z-index: 2;
            
        }
        .astro{
            position: absolute;
            top: -27rem;
            right: -30rem;
            left: auto;
            width: 45rem;
            z-index: 8;
            transition: all .15s ease-in-out;
            animation: move 20s infinite;
            
        }

        .batu1{
            position: absolute;
            top: -25rem;
            right: -1rem;
            left: auto;
            width: 12rem;
            z-index: 16;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            
            
            
        }

        .logo{
            position: absolute;
            top: -24rem;
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

       

        .back{
            position: absolute;
            top: -18.4rem;
            right: 37rem;
            left: auto;
            width: 2.4rem;
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

        .up{
            position: absolute;
            top: 101rem;
            right: 35.3rem;
            left: auto;
            width: 2.4rem;
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
            top: 4rem;
            right: 7rem;
            left: auto;
            width: 10rem;
            z-index: 6;
            animation: ${move} 5s ease infinite; 
           
        }

        .batu3{
            position: absolute;
            top: -1rem;
            right: -34rem;
            left: auto;
            width: 10rem;
            z-index: 20;
            animation: ${rotate} infinite 50s linear;
           
        }

        .garis{
            position: absolute;
            top: -6.8rem; 
            right: 25.5rem;
            left: auto;
            width: 14rem;
            z-index: 10;
        }

        .kecil{
            position: absolute;
            top: -30.6rem;
            right: 32rem;
            width: 20rem;
            z-index: 4;
        }

        .kecil1{ 
            position: absolute;
            top: 82.5rem;
            right: 21.5rem;
            left: auto;
            width: 25rem;
            z-index: 10;
        }

        .ig{
            position: absolute;
            bottom: 23rem;
            right: -38.5rem;
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

        .yt{
            position: absolute;
            bottom: 23.4rem;
            right: -35rem;
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
            right: 2rem;
            left: auto;
            width: 13rem;
            z-index: 20;
            
            
        }

        .asap{
            position: absolute;
            top: 67rem;
            right: -15rem;
            left: auto;
            width: 16rem;
            z-index: 20;
         
            
            
        }

        .r{
            position: absolute;
            top: 55rem;
            right: -27.2rem;
            left: auto;
            width: 23rem;
            z-index: 20;
            
            
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
            top: -36rem;
            right: -42rem;
            left: auto;
            width: 60rem;
            
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

export default KlikPage;
