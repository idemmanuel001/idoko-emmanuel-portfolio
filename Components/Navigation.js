import { useState, useEffect, useCallback } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { IoMenuSharp, IoClose } from 'react-icons/io5';
import styled, { keyframes } from 'styled-components';


//NAV LINK ITEMS
const links = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
];


const fadeInAnimation = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

//NAV BAR STYLES
const StyledNavigaion = styled.nav`
    font-family: 'Roboto Condensed','Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;
const Navigation = () => {

    // Check if window is defined (so if in the browser or in node.js) to prevent webpack error when compiling.
    const isBrowser = typeof window !== "undefined";
    let size;

    if (isBrowser) {
        size = window.innerWidth;
    }
    const [screenSize, setScreenSize] = useState(size);

    const handleScreenResize = useCallback(() => {
        if (isBrowser) {
            setScreenSize(window.innerWidth);
        }

    }, [isBrowser]);

    useEffect(() => {

        window.addEventListener('resize', handleScreenResize);
        return () => window.removeEventListener('resize', handleScreenResize);
    }, [screenSize, handleScreenResize]);

    return (
        <StyledNavigaion>
            {screenSize > 680 ?
                <DestopNav /> :
                <MobileNav />}
        </StyledNavigaion>
    );
};


//DESSTOP NAV COMPONENT

//Destop Nav Styles

const StyledDestopNav = styled.ul`
    display: flex;
    align-items: center;
    
    .navLinks{
        color: #BBCBC1;
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.5px;
        width: 100%;
        cursor: pointer;
        margin: 0 0.5rem;
        padding: 0.1rem 0;
        transition: all 0.3s ease-in;
        &:hover{
            color: #0BCE5A;
        }
        &.active{
             border-bottom: 2px solid #0BCE5A;
        }
    }
`;
const DestopNav = () => {

    return (
        <StyledDestopNav>
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
        </StyledDestopNav>
    );
};


//MOBILE NAV COMPONENT

//Mobile Nav Styles

//mobile nave panelanimation

const SlideIn = keyframes`
     from {
    width: 0vw;
  }
    to {
    width: 100vw;
    }
`;
const SlideOut = keyframes`
     from {
    width: 0vw;
  }
    to {
    width: 100vw;
    }
`;





const StyledMobileNavWrapper = styled.div`
    .navTogler{
        color: #BBCBC1;
        font-size: 1.8rem;
        position: absolute;
        right: 1rem;
        top: 0.8rem;
        cursor: pointer;
         animation: ${fadeInAnimation} 0.2s ease-in-out;
    }
`;

const StyledMobileNav = styled.ul`
    z-index: 999;
    position: absolute;
    right: 0;
    top: 3.45rem;
    width: 100%;
    height: 100vh;
    background: #060809;
    color: #fff;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.2s ease-in;
    transform: ${(props) => props.isOpen ? 'translateX(0)' : 'translateX(-100vw)'};
    
   
    
    
    .navLinks{
        padding-top: 1rem;
        padding-bottom: 0.8rem;
        color: #BBCBC1;
        font-size: 1.3rem;
        font-weight: 500;
        letter-spacing: 2px;
        width: 100%;
        border-bottom: 1px solid #C9CFD4;
        cursor: pointer;
        transition: all 0.2s ease-in;
        &:hover{
           color: #0BCE5A;
    
        }
        &.active{
             color: #0BCE5A;
        } 
    }
`;

//MobileNAv Markup
const MobileNav = () => {
    const [isOpen, setIopen] = useState(false);

    return (
        <StyledMobileNavWrapper >
            {isOpen ?
                <IoClose
                    className='navTogler'
                    onClick={() => setIopen(!isOpen)} /> :
                <IoMenuSharp
                    className='navTogler'
                    onClick={() => setIopen(!isOpen)} />}

            (<StyledMobileNav
                isOpen={isOpen}>
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
                            onClick={() => setIopen(false)}

                            className='navLinks'>

                            {link.name}
                        </Link>
                    );
                })}
            </StyledMobileNav>)
        </StyledMobileNavWrapper>
    );
};


export default Navigation;