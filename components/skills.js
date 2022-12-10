import styled from 'styled-components';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiReact, SiGraphql, SiStyledcomponents, SiFigma, SiContentful, SiShopify } from 'react-icons/si';

import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoSass,
    IoLogoGithub,
    IoLogoNodejs,
} from 'react-icons/io';

//Styles
const StyledSkills = styled.div`
    color: ${({ theme }) => theme.secondaryColor};

    h3{
        margin: 1rem 0 1rem 0;
      
    }
    .technologies{
        display: flex;
        flex-wrap: wrap;
        align-content: stretch;
        justify-content: flex-start;
        align-items: flex-start;

        div{
            //background: ${({ theme }) => theme.primaryColor};
            color: ${({ theme }) => theme.secondaryColor};
            font-weight: bold;
            width: 5rem;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin: 0 0.8rem 0.5rem 0;
            text-align: center;

            svg{
                margin-top: 0.2rem;
                background: ${({ theme }) => theme.secondaryColor};
                color: ${({ theme }) => theme.lightGray};
                font-size: ${({ theme }) => theme.largeX3};
                padding: 0.1rem;
                width: 80%;
                height: 80%;

            }

            p{
                font-size: ${({ theme }) => theme.verySmall};
                font-weight: 500;
                text-align: center;
            }
        }
    }
`;

const technologies = [
    { title: 'HTML', icon: <IoLogoHtml5 /> },
    { title: 'CSS', icon: <IoLogoCss3 /> },
    { title: 'Javascript', icon: <IoLogoJavascript /> },
    { title: 'SASS', icon: <IoLogoSass /> },
    { title: 'TailwindCss', icon: <SiTailwindcss /> },
    { title: 'Styled Components', icon: <SiStyledcomponents /> },
    { title: 'React & Redux', icon: <SiReact /> },
    { title: 'Nextjs', icon: <TbBrandNextjs /> },
    { title: 'Graphql', icon: <SiGraphql /> },
    { title: 'Nodejs', icon: <IoLogoNodejs /> },
    { title: 'Git & Github', icon: <IoLogoGithub /> },
    { title: 'Figma', icon: <SiFigma /> },
    { title: 'Contentful CMS', icon: <SiContentful /> },
    { title: 'Shopify', icon: <SiShopify /> },
];

const Skills = () => {
    return (
        <StyledSkills>
            <h3> Tecnologies I work with</h3>
            <div className='technologies'>
                {technologies.map((tech, index) => {
                    return (
                        <div key={index} >
                            {tech.icon}
                            <p>{tech.title}</p>
                        </div>
                    );
                })}
            </div>
        </StyledSkills>
    );
};

export default Skills;