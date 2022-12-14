import { Container } from '../../components/styles/sharedStyles';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';



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
      }
`;


const Project = ({ frontmatter, content }) => {

  console.log(frontmatter);

  const { title, stack, description, image, live, code
  } = frontmatter;

  return (
    <StyledProject>
      <Container>
        <Link href='/' passhref>
          <a>go back home</a>
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
          <Image
            src={image}
            alt={title}
            layout='fill'
            objectFit='fill'
            placeholder='blur'
            blurDataURL={image}
          />

        </div>

        <p>
          {content}
        </p>
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