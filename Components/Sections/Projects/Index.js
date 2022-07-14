import React from 'react';
import styled from 'styled-components';
import {Container, Section } from '../../styles/sharedStyles'

//STYLE
const StyledProject = styled(Section)`
    color: #BBCBC1;
    background: #060809;
    
    .OuterContainer{
        width: 100%;
        color: inherit;
        background: inherit;
    }
    
`;

const Projects = () => {
    return (
        <StyledProject id='projects'>

            <div className="OuterContainer">
                <Container>
                    <h2>Projects</h2>

                    <p>
                        Here are some of the projects I worked on recently...
                    </p>

                </Container>
            </div>
        </StyledProject>
    );
};

export default Projects;