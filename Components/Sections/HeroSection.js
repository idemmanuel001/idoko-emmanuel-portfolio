import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Container, Section, Button } from '../styles/sharedStyles';


const StyledHeroSection = styled(Section)`
   max-height: fit-content;
   background: ${({ theme }) => theme.black};
   color: ${({ theme }) => theme.primaryColor};
   display: flex;
   align-items: center;


    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;

        @media(min-width: ${({ theme }) => theme.desktop}){
            flex-direction: row;
            justify-content: between;
            align-items: center;
            padding-top: 3rem;

        }

        #firstContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;

            h1{
                margin-bottom: 1rem;
                @media(min-width: ${({ theme }) => theme.desktop}){
                    margin-bottom: 1.6rem

                }

            }
            a{
                margin-top: 0.8rem;
                width: 25%;
                min-width: fit-content;
                align-self: flex-start;
                font-size: ${({ theme }) => theme.medium};
                font-weight: bold;
                text-align: center;
                padding: 0.5rem ;
                background: transparent;
                color: ${({ theme }) => theme.secondaryColor};
                transition: all 0.3s ease-in;
                outline: none;
                border: 2px solid ${({ theme }) => theme.secondaryColor};
                border-radius: 10px;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
                cursor: pointer;
                

                &:hover{
                    background: ${({ theme }) => theme.secondaryColor};
                    color: ${({ theme }) => theme.primaryColor};
                    border: 2px solid ${({ theme }) => theme.black};
                }

                @media(min-width: ${({ theme }) => theme.desktop}){
                    width: 14rem;
                   
                }
            }
        }


        #img{
            display: none;

            @media(min-width: ${({ theme }) => theme.desktop}){
                display: flex;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
            }
    }
    }

`;


//MARKUP
const Herosection = () => {
    return (
        <StyledHeroSection id='home'>
            <Container >

                <div id='firstContainer'>
                    <h1>Frontend Developer with a special interest in Shopify Development</h1>
                    <a href='#' >Resume</a>
                </div>

                <div id="img">
                    <Image
                        src='/images/developer-img.svg'
                        alt="developer"
                        priority
                        layout='fill'
                        objectFit='fill'
                        objectPosition='50% 50%'
                    />
                </div>
            </Container>
        </StyledHeroSection>
    );
};

export default Herosection;