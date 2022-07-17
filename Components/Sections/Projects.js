import Image from 'next/image';
import styled from 'styled-components';
import { Container, Section } from '../styles/sharedStyles';


//STYLE
const StyledProject = styled(Section)`
    color:  ${({ theme }) => theme.primaryColor};
    background:  ${({ theme }) => theme.black};

    .outerContainer{
        width: 100%;
        color: inherit;
        background: inherit;
    }

    .projectsContainer{
        display: flex;
        flex-direction: column;
        margin: 1rem auto;

        @media(min-width: ${({ theme }) => theme.desktop}){
           margin: 2rem auto;

        }

        .projectItem{
            width: 320px;
            height: fit-content;
            margin: 1rem auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 20px;
            overflow: hidden;
            background: ${({ theme }) => theme.primaryColor};
          
            color: ${({ theme }) => theme.black};

            @media(min-width: ${({ theme }) => theme.tablet}){
                margin: 2rem 0;
            }
        }

        .projectBody{
            padding: 0.5rem 1rem 1rem 1rem;
            margin: 0 auto;

            h3{
                font-weight: bold;
                font-size: ${({ theme }) => theme.large};
            }

            p{
                font-weight: 400;
            }

            .stack{
                margin: 0.5rem 0;

                span{
                    font-weight: 600;
                    text-decoration: underline;
                }
            }

            .view{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin: 0.8rem 0;
            }
            a{
                background: ${({ theme }) => theme.black};
                color: ${({ theme }) => theme.white};
                padding: 0.3rem 0.8rem;
                margin-right: 0.8rem;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;


            }
        }


    }

`;

const Projects = ({ projects }) => {


    return (
        <StyledProject id='projects'>

            <div className="outerContainer">
                <Container>
                    <h2>Projects</h2>

                    <p>
                        Here are some of the projects I worked on recently...
                    </p>
                    <div className="projectsContainer">
                        {projects.map((project, index) => (

                            <div
                                key={index}
                                className="projectItem">

                                <div className='projectImage'>
                                    <Image
                                        src={project.frontmatter.image}
                                        alt={project.frontmatter.title}
                                        width='320'
                                        height='180'
                                        objectFit='fill' />
                                </div>

                                <div className="projectBody">

                                    <h3> {project.frontmatter.title} </h3>

                                    <p className='stack'>
                                        <span>Stack: </span>
                                        {project.frontmatter.stack.join(',')}
                                    </p>

                                    <p className='description'> {project.frontmatter.description} </p>

                                    <div className="view">
                                        <a href={project.frontmatter.live} className="href"> live site</a>
                                        <a href={project.frontmatter.code} className="href"> view code</a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                </Container>
            </div>
        </StyledProject>
    );
};

export default Projects;