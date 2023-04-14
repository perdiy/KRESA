import React from 'react'
import styled from 'styled-components';
import PageContent1 from './PageConten1';
import Secondarybutton from './SecondaryButton';

function Page1() {
    return (
        <Page1Styled>
            <div className="header-content">
                
                <PageContent1 />
                <a href="/video">
                    <Secondarybutton name={'Watch Now'}/>
                    </a>
            </div>
        </Page1Styled>
    )
}

const Page1Styled = styled.header`

    width: 100%;
    height: 65vw;
    background-color:#0a0b10;
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

export default Page1;
