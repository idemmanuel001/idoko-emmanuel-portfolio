import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Container, Section } from '../styles/sharedStyles';
import { gsap } from 'gsap';
import { Link } from "react-scroll";
import { BsLinkedin, BsGithub, BsTwitter, BsFillEnvelopeFill } from 'react-icons/bs';



const StyledHeroSection = styled(Section)`
    height: fit-content;
    overflow: hidden;
    background: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.lightGray};
    display: flex;
    align-items: center;


    .innerContainer{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 4rem;
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
        opacity: 0;
        transform: translateY(100px);


        @media(min-width: ${({ theme }) => theme.desktop}){
            height: 60vh;
            flex-direction: row;
            justify-content: between;
            align-items: center;
            margin-top: 0;
            overflow: hidden;
        }

        #firstContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            margin-bottom: 3rem;


             @media(min-width: ${({ theme }) => theme.tablet}){
                justify-content: center;
                align-items: flex-start;
                height: fit-content;
                margin-top: 3rem;

            }

            h1{
                margin-bottom: 1rem;

                span{
                    color: ${({ theme }) => theme.primaryColor};
                }

                @media(min-width: ${({ theme }) => theme.desktop}){
                    margin-bottom: 1.5rem;
                    margin-right: 0.3rem;
                    justify-content: flex-start;

                }

            }

            .hireme{
                margin-top: 0.8rem;
                width: 25%;
                min-width: fit-content;
                align-self: flex-start;
                font-size: ${({ theme }) => theme.medium};
                font-weight: bold;
                text-align: center;
                padding: 0.5rem;
                transition: all 0.3s ease-in;
                outline: none;
                border: 2px solid ${({ theme }) => theme.primaryColor};
                border-radius: 10px;
                cursor: pointer;

                @media(min-width: ${({ theme }) => theme.desktop}){
                    width: 14rem;
                    margin-top: 0;
                }
            }

            .socials{
                min-width: fit-content;
                align-self: flex-start;
                font-size: ${({ theme }) => theme.medium};
                font-weight: bold;
                text-align: center;
                margin-top: 0.8rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: start;

                @media(min-width: ${({ theme }) => theme.desktop}){
                    margin-bottom: 1.5rem;

                }


                a{
                    color: ${({ theme }) => theme.lightGray};
                    border-radius: 10px;
                    padding: 0.5rem 0;
                    margin-right: 1rem;
                    transition: all 0.3s ease-in;


                    &:hover{
                        color: ${({ theme }) => theme.primaryColor};
                         
                    }

                    svg{
                        font-size: ${({ theme }) => theme.large};
                    }

                }
            }
        }


        #imgContainer{
            display: none;

            @media(min-width: ${({ theme }) => theme.desktop}){
                display: block;
                overflow: hidden;
                position: relative;
                height: 100%;
                width: 100%;
              
            }
    }
    }

`;


//MARKUP
const Herosection = () => {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        gsap.to(heroRef.current, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.5, ease: 'power4.inOut' });
    }, []);

    return (
        <StyledHeroSection id='home'>
            <Container>
                <div
                    ref={heroRef}
                    className="innerContainer">
                    <div id='firstContainer'>
                        <h1>Detail-Oriented <span>Frontend Developer </span> focused on timely value delivery.</h1>
                        <Link
                            className='hireme'
                            activeClass="active"
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >
                            Hire Me
                        </Link>

                        <div className="socials">
                            <a href='https://github.com/idemmanuel001'><BsGithub /></a>
                            <a href='https://www.linkedin.com/in/idoko-emmanuel-a3a007203/'><BsLinkedin /></a>
                            <a href='https://twitter.com/Id__Emmanuel'><BsTwitter /></a>
                            <a href='mailto:idoko.emmanuel.dev@gmail.com'><BsFillEnvelopeFill /></a>
                        </div>
                    </div>

                    <div id="imgContainer">
                        <Image
                            src='/images/dev-illustration.svg'
                            alt="developer"
                            priority
                            layout='fill'
                            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', bottom: '0', left: '0' }}

                        />
                    </div>
                </div>
            </Container>
        </StyledHeroSection>
    );
};

export default Herosection;