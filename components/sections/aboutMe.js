import styled from 'styled-components';
import { Container, Section } from '../../styles/sharedStyles';
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
          
        }
    }

    .background{
        h3{
            margin-bottom: 0.5rem;
        }

        p{
            margin-bottom: 0.5rem;
            text-align: left;
            font-weight: 400;
            line-height: 1.6;
            margin-top: 0.2rem;

        }

    }

    .title{
        max-height: 4.2rem;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 1rem;
        margin-bottom: 2.5rem;

        h2{
            z-index: 10;

            @media(min-width: ${({ theme }) => theme.desktop}){
                 margin-bottom: 1.5rem;

            }

            span{
                color: ${({ theme }) => theme.primaryColor};
            }
        }

        hr{
            position: absolute;
            right: 0;
            bottom: 0.2rem;
            width: 90%;
            height: 3px;
            background: ${({ theme }) => theme.secondaryColor};

            @media(min-width: ${({ theme }) => theme.desktop}){
                     bottom: 0;
                }

        }
    }
   
 
`;

const AboutMe = () => {
    return (
        <StyledAbout id='about' >
            <Container>
                <div className="title">
                    <h2> About <span>Me</span></h2>
                   <hr />
                </div>

                <div className="about-me">

                    <div className='background'>
                        <h3>
                            Hello! <Emoji symbol={'👋'} arial-label='waving hand' />
                        </h3>
                        <p>
                            I am Emmanuel, a frontend developer living on the blue planet <Emoji symbol={'🌍'} arial-label='earth' />.  My curiosity for knowledge led me into the tech sector, and learning has been amazing. 
                            I pay attention to user needs and use my knowledge to produce user-friendly websites.
                        </p>

                        <p>
                            My goal is to keep learning to improve my technical and team skills while building web apps that are reliable, scalable, and efficient based on the requirements.
                        </p>
                    </div>
                    <Skills />

                </div>

            </Container>
        </StyledAbout>
    );
};

export default AboutMe;