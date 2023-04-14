import React from 'react'
import styled from 'styled-components';
import PageShow from './PageShow';

function Show() {
    return (
        <ShowStyled>
            <div className="header-content">
                
                <PageShow />
            </div>
        </ShowStyled>
    )
}

const ShowStyled = styled.header`
    min-height: 180vh;
    width: 100%;
    height: 180vw;
    background-color:#0a0b10;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        padding: 0 18rem;
        @media screen and (max-width: 1347px){
            padding: 5rem 14rem;
        }
        @media screen and (max-width: 1186px){
            padding: 5rem 8rem;
        }
        @media screen and (max-width: 990px){
            padding: 5rem 4rem;
        }
    }
`;

export default Show;
