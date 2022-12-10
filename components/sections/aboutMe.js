import styled from 'styled-components';
import { Container, Section } from '../styles/sharedStyles';
import Emoji from '../emoji';
import Skills from '../skills';




const StyledAbout = styled(Section)`
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.secondaryColor};

    .about-me{
        display: flex;
        flex-direction: column;
        align-items: top;

        @media(min-width: ${({ theme }) => theme.desktop}){
            flex-direction: row;

        }
    }

    .background{
        h3{
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
        }

        p{
            margin-bottom: 0.5rem;
            text-align: left;
            font-weight: 600;
            line-height: 1.6;

        }

    }

    .title{
        max-height: 3rem;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 1rem;
        margin-bottom: 2rem;

        h2{
            z-index: 10;

            @media(min-width: ${({ theme }) => theme.desktop}){
                 margin-bottom: 1.5rem;

            }

            span{
                color: ${({ theme }) => theme.primaryColor};
            }
        }
    }

    .line{
            width:80%;
            height: 100%;
            position: absolute;
            right: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            span{
                width:100%;
                height: 3px;
                display: inline-block;
                background: ${({ theme }) => theme.secondaryColor};
                opacity: 0.5;
            }
        }
   
 
`;

const AboutMe = () => {
    return (
        <StyledAbout id='about' >
            <Container>
                <div className="title">
                    <h2> About <span>Me</span></h2>
                    <div className='line'>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="about-me">

                    <div id='background'>
                        <h3>
                            Hello there! <Emoji symbol={'👋'} arial-label='waving hand' />
                        </h3>
                        <p>
                            I am Idoko Emmanuel, a Frontend Developer developer focused on the Javascript side of the decoupled architecture of JamStack webapps,
                            I enjoy converting designs to pixel perfect code implementations, either alone or as part of a team.
                            My goal is to continue learning to improve my technical and team skills while building applications that are reliable, scalable and efficient based on the neccessary requirements.
                        </p>

                    </div>
                    <Skills />

                </div>

            </Container>
        </StyledAbout>
    );
};

export default AboutMe;