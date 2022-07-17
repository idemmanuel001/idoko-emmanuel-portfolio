import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Container, Section } from '../styles/sharedStyles';


//Project Style
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
    }

`;


//Project Markup
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

                            <ProjectItem key={index} project={project} />


                        ))}
                    </div>

                </Container>
            </div>
        </StyledProject>
    );
};



//ProjectItem styles
const StyledProJectItem = styled.div`
    width: 320px;
    height: fit-content;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 4px -3px 4px -1px rgb(181,181,181), -3px 3px 4px -1px rgb(181,181,181);
    background: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.black};

    @media(min-width: ${({ theme }) => theme.tablet}){
        margin: 2rem 0;
    }

    .projectBody{
        padding: 0.5rem 1rem 1rem 1rem;
        margin: 0 auto;
        font-size: ${({ theme }) => theme.small};

        h3{
            font-weight: bold;
            font-size: ${({ theme }) => theme.medium};
            margin-bottom: 0.1rem;
        }

        p{
            font-weight: 400;
            font-size: ${({ theme }) => theme.small};
        }

        span{
            font-weight: 600;
            font-size: ${({ theme }) => theme.small};
            text-decoration: underline;
            margin-right: 0.3rem;
        }

        .stack{
            margin-bottom: 0.3rem;
        }

        .description{


            button{
                background: transparent !important;
                border: none;
                color: ${({ theme }) => theme.accentColor};
                margin-left: 0.3rem;
                cursor: pointer;
                text-decoration: underline;
            }
        }

       
    }

     .links{
            display: flex;
            justify-content: center;
            height: fit-content;
            width: 100%;
            justify-content: flex-start;
            align-items: center;
            background: ${({ theme }) => theme.black};
            padding: 0.3rem 1rem;
            

        }
        a{
            text-decoration: underline;
            color: ${({ theme }) => theme.white};
            margin-right: 1rem;

        }


`;

//ProjectItem Markup
function ProjectItem({ project }) {
    const [isOpen, setIsOpen] = useState(false);


    const { frontmatter: { title, description, image, stack, code, live }, content } = project;
    return (
        <StyledProJectItem>

            <div className='projectImage'>
                <Image
                    src={image}
                    alt={title}
                    width='320'
                    height='180'
                    objectFit='fill' />
            </div>

            <div className="projectBody">

                <h3> {title} </h3>

                <p className='stack'>
                    <span>stack: </span>
                    {stack.join(', ')}
                </p>

                <p className='description'>
                    <span>description:</span>

                    {isOpen ? content : description + '...'}

                    <button onClick={() => setIsOpen(!isOpen)} >
                        {isOpen ? 'view less' : 'view more'}
                    </button>
                </p>

            </div>
            <div className="links">
                <a href={live} className="href" target="_blank" rel="noopener noreferrer" > live site</a>
                <a href={code} className="href" target="_blank" rel="noopener noreferrer"> view code</a>
            </div>


        </StyledProJectItem>
    );
}


export default Projects;