import React from 'react'
import styled from 'styled-components';
import PageContent2 from './PageConten2';
import Secondarybutton from './SecondaryButton';

function Page2() {
    return (
        <Page2Styled>
            <div className="header-content">
                
                <PageContent2 />
                <a href="#showmore">
                    <Secondarybutton name={'Show more'}/>
                    </a>
            </div>
        </Page2Styled>
    )
}

const Page2Styled = styled.header`
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
export default Page2;
