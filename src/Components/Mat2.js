import React from 'react'
import styled from 'styled-components';
import MatContent2 from './MatContent2';
import Model from './videoModal';
import Model1 from './videoModal1';
import Model2 from './videoModal2';
import Model3 from './videoModal3';
import Model4 from './videoModal4';
import Model5 from './videoModal5';
import Secondarybutton from './SecondaryButton';
import ReactPlayer from 'react-player';

function Mat2() {
    return (
        <MatStyled>
            
            <div className="header-content">
                <MatContent2 />
                
                <a href="/merchan">
                    <Secondarybutton name={'Suport Us'}/>
                    </a>
            </div>
            
                {/* <Model />
                <Model1 />
                <Model2 />
                <Model3 />
                <Model4 />
                <Model5 /> */}
               
        </MatStyled> 
    ) 
}

const MatStyled = styled.header`
     min-height: 180vh; 
    width: 100%;
    height: 133vw;
    background-color:#0a0b10;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        padding: 0 18rem;
        @media screen and (max-width: 100%){
            padding: 5rem 14rem;
        }
        @media screen and (max-width: 100%){
            padding: 5rem 8rem;
        }
        @media screen and (max-width: 100%){
            padding: 5rem 4rem;
        }
    }
`;

export default Mat2;
