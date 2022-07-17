import AboutMe from '../Components/Sections/AboutMe';
import Herosection from '../Components/Sections/HeroSection';
import Projects from '../Components/Sections/Projects';
import ContactMe from '../Components/Sections/ContactMe';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';



export default function Home({ projects }) {

  return (
    <>
      <Herosection />
      <AboutMe />
      <Projects projects={projects} />
      <ContactMe />
    </>
  );
}


export async function getStaticProps() {
  //Get markdown files from the projects dir
  const files = fs.readdirSync(path.join('projects'));

  //Get slug and frontmatter from posts
  const projects = files.map((filename) => {
    //Create slug
    const slug = filename.replace('.md', '');

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('projects', filename),
      'utf-8'
    );

    //Destructure the data as frontmatter and content from using the gray matter library
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
      content
    };
  });

  return {
    props: {
      projects
    },
  };
}