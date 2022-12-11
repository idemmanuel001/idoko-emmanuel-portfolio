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
    margin-top: 0.5rem;

    h3{
        margin-top: 1rem;
        margin-bottom: 1.5rem;
      
    }
    .technologies{
        display: flex;
        flex-wrap: wrap;
        align-content: stretch;
        justify-content: center;
        align-items: flex-start;

        div{
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
            padding: 0.2rem;

            svg{
                margin-top: 0.2rem;
                background: ${({ theme }) => theme.secondaryColor};
                color: ${({ theme }) => theme.lightGray};
                font-size: ${({ theme }) => theme.largeX3};
                padding: 0.8rem;
                width: 100%;
                height: 80%;
                border-radius: 15px;

            }

            p{
                font-size: ${({ theme }) => theme.verySmall};
                font-weight: 700;
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