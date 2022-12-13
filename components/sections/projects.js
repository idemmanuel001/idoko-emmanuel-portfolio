import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Container, Section } from '../styles/sharedStyles';
import { IoMdArrowRoundForward } from 'react-icons/io';


//Project Style
const StyledProject = styled(Section)`
    color:  ${({ theme }) => theme.lightGray};
    background:  ${({ theme }) => theme.secondaryColor};


    .outerContainer{
        width: 100%;
        color: inherit;
        background: inherit;

       .title{
            height: fit-content;
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 1rem;
            margin-bottom: 2.5rem;

            @media(min-width: ${({ theme }) => theme.tablet}){
                margin-bottom: 5rem;
            }

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

            hr{
                position: absolute;
                right: 0;
                bottom: 0.2rem;
                width: 90%;
                height: 3px;
                background: ${({ theme }) => theme.lightGray};

                @media(min-width: ${({ theme }) => theme.desktop}){
                     bottom: 0;
                }

        }

    
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
                    <div className="title">
                        <h2>Some Things <span>I&rsquo;ve Built</span></h2>
                        <hr />
                    </div>

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
    position: relative;
    width: 100%;
    height: fit-content;
    margin: 2rem auto;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.lightGray};
    cursor: pointer;
    

    @media(min-width: ${({ theme }) => theme.tablet}){
        margin: 2rem 0;
        display: flex;
        flex-direction: row-reverse;
        position: static;
        align-items: center;
        justify-content: space-between;
        border: none;
        border-radius: 0;
    }

    .projectImage{
        position: relative;
        width: 100%;
        height: 15rem;

        @media(min-width: ${({ theme }) => theme.tablet}){
            border-radius: 15px;
            overflow: hidden;
        }
    }

    .projectBody{
        margin: 0 auto;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.white};
        background: ${({ theme }) => theme.secondaryColor};
        opacity: 0.8;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-in;


        @media(min-width: ${({ theme }) => theme.tablet}){
            position: static;
            color: ${({ theme }) => theme.lightGray};
            background: ${({ theme }) => theme.black};
            opacity: 0.5;
            padding: 3.5rem 0;
            border-radius: 10px;
            margin-right: -15%;

        }

        &:hover{
            color: ${({ theme }) => theme.primaryColor};
        }

        h3{ 
            font-weight: bold;
            text-decoration: underline;
            text-transform: capitalize;
            font-size: ${({ theme }) => theme.large};

            @media(min-width: ${({ theme }) => theme.tablet}){
                font-size: ${({ theme }) => theme.largeX2};
            }
        }

        span{
            width: 4rem;
            height: 3rem;
        }

        svg{
            width: 100%;
            height: 100%;
        }

         
    }

`;


//ProjectItem Markup
function ProjectItem({ project }) {


    const { frontmatter: { title, image }, slug } = project;
    return (
        <StyledProJectItem>

            <div className='projectImage'>
                <Image
                    src={image}
                    alt={title}
                    layout='fill'
                    objectFit='fill'
                    placeholder='blur'
                    blurDataURL={image}
                />
            </div>

            <Link href={`projects/${slug}`} passhref>
                <div className="projectBody">

                    <h3> {title} </h3>
                    <span>
                        <IoMdArrowRoundForward />
                    </span>

                </div>
            </Link>



        </StyledProJectItem>
    );
}


export default Projects;