import Image from 'next/image';
import styled from 'styled-components';
import { Container, Section } from '../styles/sharedStyles';


//STYLE
const StyledProject = styled(Section)`
    color: #BBCBC1;
    background: #060809;
    
    .outerContainer{
        width: 100%;
        color: inherit;
        background: inherit;
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
                                objectFit='contain' />
                            </div> 

                            <div className="projectHeader">
                                <h3> {project.frontmatter.title} </h3>
                                <p className='stacks'> {project.frontmatter.stack} </p>
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