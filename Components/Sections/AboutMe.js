import styled from 'styled-components';
import { Container, Section } from '../styles/sharedStyles';
import Emoji from '../../Components/Emoji';




const StyledAbout = styled(Section)`
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.black};

    h2{
        margin-bottom: 1rem;

        @media(min-width: ${({ theme }) => theme.desktop}){
            margin-bottom: 1.5rem;

        }
    }
    h3{
        color: ${({ theme }) => theme.accentColor};
    }
    p{
        margin-bottom: 0.5rem;
        text-align: left;

        span{
            color:  ${({ theme }) => theme.accentColor};
            font-weight: 500;
        }
    }


`;

const AboutMe = () => {
    return (
        <StyledAbout id='about' >
            <Container>
                <div className="about-me">
                    <h2> About Me</h2>

                    <div id='background'>
                        <h3>
                            Hello there! <Emoji symbol={'👋'} arial-label='waving hand' />
                        </h3>
                        <p>
                            I am <span>Idoko Emmanuel</span>, a Frontend Developer developer focused on the Javascript side of the decoupled architecture of JamStack webapps, 
                             I enjoy converting designs to pixel perfect code implementations, either alone or as part of a team. 
                             My goal is to continue learning to improve my technical and team skills while building applications that are reliable, scalable and efficient based on the neccessary requirements. 
                        </p>


                        <p id='skills'>
                            My Technical Skills includes: <span>html, css, sass, tailwindcss, javascript, styled-components, react, nextjs, graphql, git/github, shopify, etc. </span>
                        </p>

                    </div>

                </div>

            </Container>
        </StyledAbout>
    );
};

export default AboutMe;