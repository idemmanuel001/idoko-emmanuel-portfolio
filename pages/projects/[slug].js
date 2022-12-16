import { Container } from '../../styles/sharedStyles';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { IoMdArrowBack } from 'react-icons/io';



const StyledProject = styled.div`
      background: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.lightGray};

      h2{
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      p{
        font-size: ${({ theme }) => theme.medium};
        margin-bottom: 0.3rem;
        line-height: 1.5;
      }
      a{
        text-decoration: underline;
        color: inherit;
      }

      .back-home{
        display: flex;
        width: fit-content;
        align-items: center;
        height: 1rem;

        span{
          margin-right: 0.2rem;
          height: 100%;
        }
      }


      .image-container{
        position: relative;
        width: 100%;
        height: 13rem;
        overflow: hidden;
        margin-top: 2rem;
        margin-bottom: 2rem;

         @media(min-width: ${({ theme }) => theme.tablet}){
            height: 25rem;
         }

         .overlay{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          background: ${({ theme }) => theme.secondaryColor};
          z-index: 10;
          opacity: 0.2;
         }
      }

    .project-body{
      h3{
        margin-top: 2rem;
        margin-bottom: 0.5rem;
      }
    }
`;


const Project = ({ frontmatter, content }) => {

  const { title, stack, description, image, live, code
  } = frontmatter;

  return (
    <StyledProject>
      <Container>
        <Link href='/' passhref>
          <a className='back-home'>
            <span><IoMdArrowBack /> </span>
            go back home
          </a>
        </Link>

        <h2>{title}</h2>

        <p>
          stack: {stack.join(', ')}
        </p>

        <p>
          code: <a href={code} target='_blank' rel='noreferrer noopener'>github repo</a>
        </p>

        <p>
          code: <a href={live} target='_blank' rel='noreferrer noopener'>live site</a>
        </p>



        <div className='image-container'>
          <div className='overlay'></div>
          <Image
            src={image}
            alt={title}
            layout='fill'
            objectFit='fill'
            placeholder='blur'
            blurDataURL={image}
          />

        </div>

        <dv className='project-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} ></div>
        </dv>
      </Container>
    </StyledProject>
  );
};

export default Project;



export async function getStaticPaths() {

  //Get markdown files from the projects directory
  const files = fs.readdirSync(path.join('projects'));

  //Get slug and frontmatter from posts
  const projects = files.map((filename) => {

    //Create a slug by removing the file extension 
    const slug = filename.replace('.md', '');

    return {
      slug,
    };
  });

  const paths = projects.map(project => {
    return {
      params: { slug: project.slug }
    };
  });

  return {
    paths,
    fallback: false
  };
}


export async function getStaticProps({ params: { slug } }) {

  //Read the file data using the file system module
  const markdownWithMeta = fs.readFileSync(path.join('projects', slug + '.md'), 'utf-8');

  //Destructure the data as frontmatter and content from using the gray matter library
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content
    },
  };
}