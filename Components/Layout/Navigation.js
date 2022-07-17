import { useState } from 'react';
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


//DESSTOP NAV COMPONENT

//Destop Nav Styles
const StyledDestopNav = styled.ul`
    display: none;
   

    @media(min-width: ${({ theme }) => theme.tablet} ){
        display: flex;
        align-items: center;
    }

    .navLinks{
        color: ${({ theme }) => theme.primaryColor};
        font-size: ${(theme) => theme.medium};
        font-weight: 400;
        letter-spacing: 0.5px;
        width: 100%;
        cursor: pointer;
        margin: 0 0.5rem;
        padding: 0.1rem 0;
        transition: all 0.3s ease-in;

        &:hover{
            color: ${({ theme }) => theme.accentColor};
        }
        &.active{
             border-bottom: 2px solid ${({ theme }) => theme.accentColor};
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

//MobileNav Togler Animation
const fadeInAnimation = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;


const StyledMobileNavWrapper = styled.div`
    display: block;

    @media(min-width: ${({ theme }) => theme.tablet}){
        display: none;
    }

    .navTogler{
        color: ${({ theme }) => theme.primaryColor};
        font-size: ${({theme}) => theme.large};
        position: absolute;
        right: 1rem;
        top: 0.8rem;
        cursor: pointer;
        animation: ${fadeInAnimation} 0.2s ease-in-out;


        &:hover {
           color:  ${({ theme }) => theme.accentColor};

        }
    }
`;

const StyledMobileNav = styled.ul`
    z-index: 999;
    position: absolute;
    right: 0;
    top: 3.45rem;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.black};
    color: #fff;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.2s ease-in;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100vw)'};
    
   
    
    
    .navLinks{
        padding-top: 1rem;
        padding-bottom: 0.8rem;
        color: ${({ theme }) => theme.primaryColor};
        font-size: ${({ theme }) => theme.medium};
        font-weight: 500;
        letter-spacing: 2px;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
        cursor: pointer;
        transition: all 0.2s ease-in;


        &:hover,
        &.active {
           color:  ${({ theme }) => theme.accentColor};

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


export { MobileNav, DestopNav };