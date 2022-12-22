import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link, animateScroll as scroll } from "react-scroll";
import { IoMenuSharp, IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { Button } from '../../styles/sharedStyles';



//NAV LINK ITEMS
const links = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
];


//DESSTOP NAV COMPONENT

//Destop Nav Styles
const StyledDestopNav = styled.div`
    display: none;
   
    .innerContainer{

        @media(min-width: ${({ theme }) => theme.tablet} ){
            display: flex;
            align-items: center;
           
            
        }
    }

    @media(min-width: ${({ theme }) => theme.tablet} ){
        display: block;
    }

    button{
        margin-left: 1rem;
    }

    .navLinks{
        color: ${({ theme }) => theme.lightGray};
        font-size: ${(theme) => theme.medium};
        font-weight: 400;
        letter-spacing: 0.5px;
        width: 100%;
        cursor: pointer;
        margin: 0 0.5rem;
        padding: 0.1rem 0;
        opacity: 0;
        transform: translate(100vw, -100vh);


        &:hover{
            color: ${({ theme }) => theme.darkGray};
        }
        &.active{
            color: ${({ theme }) => theme.primaryColor};
            border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
        }
    }
`;
const DestopNav = () => {
    const destopnavRef = useRef(null);


    useLayoutEffect(() => {
        const timeline = gsap.timeline();

        timeline.to(destopnavRef.current.children, { opacity: 1, x: 0, y: 0, duration: 2, ease: 'power4.inOut', stagger: 0.15 });

        return () => timeline.kill();
    }, []);

    return (
        <StyledDestopNav>
            <div
                ref={destopnavRef}
                className="innerContainer">
                {links.map(link => {
                    return (
                        <Link
                            activeClass="active"
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            key={link.name}
                            className='navLinks'
                        >
                            {link.name}
                        </Link>
                    );
                })}

                <Button>
                    <a href='/idoko-emmanuel-resume.pdf' target='_blank' rel='noreferrer noopener'>
                        Resume
                    </a>
                </Button>
            </div>
        </StyledDestopNav>
    );
};


//MOBILE NAV COMPONENT

//Mobile Nav Styles


const StyledMobileNavWrapper = styled.div`
    display: block;

    @media(min-width: ${({ theme }) => theme.tablet}){
        display: none;
    }

    .navTogler{
        color: ${({ theme }) => theme.primaryColor};
        font-size: ${({ theme }) => theme.large};
        position: absolute;
        right: 1rem;
        top: 0.8rem;
        cursor: pointer;
        opacity: 0;
        transform: translateY(-100vh);
        


        &:hover {
           color:  ${({ theme }) => theme.darkGray};

        }
    }
`;

const StyledMobileNav = styled.div`
    z-index: 999;
    position: absolute;
    right: 0;
    top: 3.45rem;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.secondaryColor};
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.2s ease-in;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100vw)'};
    
   
    
    
    .navLinks{
        padding-top: 1rem;
        padding-bottom: 0.8rem;
        color: ${({ theme }) => theme.lightGray};
        font-size: ${({ theme }) => theme.medium};
        font-weight: 500;
        letter-spacing: 2px;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.lightGray};
        cursor: pointer;
        transition: all 0.2s ease-in;


        &:hover{
            color:  ${({ theme }) => theme.darkGray};
        }
        &.active {
           color:  ${({ theme }) => theme.primaryColor};

        }
    
    }

    button {
        margin-top: 2rem;
        margin-bottom: 1rem;
        width: 100%;
        display: flex;

        a{
            width: 100%;
            height: 100%;
        }
    }
`;

//MobileNAv Markup
const MobileNav = () => {
    const [isOpen, setIopen] = useState(false);
    const mobilenavRef = useRef(null);

    useLayoutEffect(() => {
        const timeline = gsap.timeline();
        timeline.to(mobilenavRef.current, { opacity: 1, y: 0, duration: 2, ease: 'power4.inOut' });

        return () => timeline.kill();
    }, []);

    return (
        <StyledMobileNavWrapper >
            <div
                ref={mobilenavRef}
                className="navTogler">
                {isOpen ?
                    <IoClose
                        onClick={() => setIopen(!isOpen)} /> :
                    <IoMenuSharp
                        onClick={() => setIopen(!isOpen)} />}
            </div>

            (<StyledMobileNav
                isOpen={isOpen}>
                {links.map(link => {
                    return <Link
                        activeClass="active"
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        key={link.name}
                        onClick={() => setIopen(false)}

                        className='navLinks'>

                        {link.name}
                    </Link>;


                })}
                <Button>
                    <a href='/idoko-emmanuel-resume.pdf' target='_blank' rel='noreferrer noopener'>
                        Resume
                    </a>
                </Button>
            </StyledMobileNav>)
        </StyledMobileNavWrapper>
    );
};


export { MobileNav, DestopNav };