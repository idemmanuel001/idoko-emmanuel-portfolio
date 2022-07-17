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
    justify-content: space-between;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 2px -2px 5px  ${({ theme }) => theme.darkGray};
    background: ${({ theme }) => theme.primaryColor};
    
    color: ${({ theme }) => theme.black};

    @media(min-width: ${({ theme }) => theme.tablet}){
        margin: 2rem 0;
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

        .description{

            span{
                margin-left: 0.5rem;
                cursor: pointer;
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
                    <span>Stack: </span>
                    {stack.join(', ')}
                </p>

                <p className='description'> {isOpen ? content : description + '...'}
                    <span onClick={() => setIsOpen(!isOpen)} >
                        {isOpen ? 'view less' : 'view more'}
                    </span>
                </p>

                <div className="view">
                    <a href={live} className="href"> live site</a>
                    <a href={code} className="href"> view code</a>
                </div>
            </div>


        </StyledProJectItem>
    );
}


export default Projects;