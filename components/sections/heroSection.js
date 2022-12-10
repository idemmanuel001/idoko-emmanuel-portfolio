import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Container, Section } from '../styles/sharedStyles';
import { gsap } from 'gsap';
import { Link, animateScroll as scroll } from "react-scroll";



const StyledHeroSection = styled(Section)`
    height: fit-content;
    overflow: hidden;
    background: ${({ theme }) => theme. secondaryColor};
    color: ${({ theme }) => theme.lightGray};
    display: flex;
    align-items: center;


    .innerContainer{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
        opacity: 0;
        transform: translateY(100px);


        @media(min-width: ${({ theme }) => theme.desktop}){
            height: 60vh;
            flex-direction: row;
            justify-content: between;
            align-items: center;
            padding-top: 2rem;
            overflow: hidden;

        }

        #firstContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;


             @media(min-width: ${({ theme }) => theme.desktop}){
                padding-top: 1rem;
                justify-content: center;
                overflow: hidden;

                }

            h1{
                margin-bottom: 1rem;
                span{
                    color: ${({ theme }) => theme.primaryColor};
                }

                @media(min-width: ${({ theme }) => theme.desktop}){
                    margin-bottom: 1rem;
                    margin-right: 0.3rem;
                    justify-content: flex-start;

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
                transition: all 0.3s ease-in;
                outline: none;
                border: 2px solid ${({ theme }) => theme.primaryColor};
                border-radius: 10px;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
                cursor: pointer;

                @media(min-width: ${({ theme }) => theme.desktop}){
                    width: 14rem;
                   
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
                        <h1>Detail-Oriented <span>Frontend Developer </span> focused on timely value delivery</h1>
                        <Link
                        activeClass="active"
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >
                                Hire Me
                            </Link>
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