import { Link } from 'react-scroll';
import {MobileNav, DestopNav} from './Navigation';
import styled from 'styled-components';
import Image from 'next/image';
import { Container } from '../styles/sharedStyles';


const StyledHeader = styled.div`
     width: 100%;
     background: #060809;
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
   }
    }
`;

export default function Header() {
    return (
        <StyledHeader >
             <Container>
            <Link
                to='home'
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="logo" >

                <div className="logo">
                    <Image
                        src='/images/logo.svg'
                        alt='logo'
                        width='50'
                        height='50'
                        priority='true'
                    />
                </div>
            </Link>
            <MobileNav />
            <DestopNav />
             </Container>
        </StyledHeader >
    );
}


