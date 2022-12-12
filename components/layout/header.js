import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-scroll';
import { MobileNav, DestopNav } from './navigation';
import styled from 'styled-components';
import Image from 'next/image';
import NextLink from 'next/link';
import { Container } from '../styles/sharedStyles';


const StyledHeader = styled.div`
     width: 100%;
   //  background: #060809;
    background: ${({ theme }) => theme. secondaryColor};

     position: sticky;
     top: 0;
     z-index: 100;

    >div{
        width: 100%;
        height: 3.5rem;
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
    
        @media(min-width: 680px){
            height: 4rem;
        }
        
   .logo{
        cursor: pointer;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transform: translate(-100vh);

            @media(min-width: ${({ theme }) => theme.desktop}){
                transform: translate(-100vw, -100vh);

            }
   }
    }
`;

export default function Header() {
    const logoRef = useRef(null);

    useLayoutEffect(() => {
        const timeline = gsap.timeline();
        timeline.to(logoRef.current, { opacity: 1, x: 0, y: 0, duration: 2, ease: 'power4.inOut' });
        return () => timeline.kill();
    }, []);

    return (
        <StyledHeader >
            <Container>
                <NextLink href={'/'} passHref>
                    <Link
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500} >

                    <div
                        ref={logoRef}
                        className="logo">
                        <Image
                            src='/images/logo.svg'
                            alt='logo'
                            width='50'
                            height='50'
                            priority='true'
                        />
                    </div>
                    </Link>
                </NextLink>
                <MobileNav />
                <DestopNav />
            </Container>
        </StyledHeader >
    );
}


