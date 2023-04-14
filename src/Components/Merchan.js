import React from 'react'
import styled from 'styled-components';
import PageMerchan from './PageMerchan';
import Card from './Card';

function Merchan() {
    return (
        <MerchanStyled>
            <div className="header-content">
                <PageMerchan />
                <Card />
            </div>
        </MerchanStyled>
    )
}

const MerchanStyled = styled.header`
    width: 100%;
    height: 150vw;
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

export default Merchan;
