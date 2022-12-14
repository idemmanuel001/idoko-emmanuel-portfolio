import styled from 'styled-components';
import Emoji from '../emoji';
import { Container } from '../styles/sharedStyles';

const StyledFooter = styled.footer`
    width: 100%;
    min-height: 20vh;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background:  ${({ theme }) => theme.secondaryColor};
    color:   ${({ theme }) => theme.lightGray};
    z-index: 1; 
    border-top: 1px solid ${({theme})=> theme.lightGray};

    p{
        height: 100%;
        width: 100%;
        text-align: justify;
        text-justify: inter-word;
        font-style: italic;

    }
    a,
    span{
        color:  ${({ theme }) => theme.primaryColor};
    }
    a{
        text-decoration: underline;
    }

`;

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <p>
                    Built by <span>Idoko Emmanuel</span> with Nextjs for static site generation and styled using styled-components, You&#39;re welcome to checkout the <a href="https://github.com/idemmanuel001/idoko-emmanuel-portfolio" target="_blank" rel="noopener noreferrer">sourcecode</a> <Emoji symbol={'😉'} arial-label='Wink' />
                </p>
            </Container>
        </StyledFooter>
    );
}