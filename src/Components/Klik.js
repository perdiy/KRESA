import React from 'react'
import styled from 'styled-components';
import KlikPage from './KlikPage';

function Klik() {
    return (
        <KlikStyled>
            <div className="header-content">
                
                <KlikPage />
            </div>
        </KlikStyled>
    )
}

const KlikStyled = styled.header`
    
    width: 100%;
    height: 149vw;
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
export default Klik;
