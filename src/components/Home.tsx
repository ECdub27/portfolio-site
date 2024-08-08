
import Container from '@mui/material/Container';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import propic from '../../public/imgs/propic.png';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ContactForm from '../components/contactForm';
import refreshedNews from '../../public/imgs/refreshedNews.png';
import groupChatGen from '../../public/imgs/GroupChatNameGen.png';
import Liverpool from '../../public/imgs/Liverpoolshield.jpg';
import ProjectCard from './projectCard';  
import { Children } from 'react';

// palette colors 1AB7FF -blue bright chartruese - 2CF000 202827
const Home = () => (
  
  <div className="Home">
  
  {/* nav bar section uses the introduce my name with Elijah-Christian "EC" Wiegand  #212121'*/}
<nav className='fixed start-0 top-0 z-20 hidden w-full border-b border-[#212121]-200 bg-[#1AB7FF] sm:block'>
  <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
 {/* logo here */}
 <button data-collapse-toggle="navbar-default"
type="button"
className='inline-flex- h-10 w-10 items-center bg-[#202827] justify-center rounded-lg p-2 text-sm text-gray hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'>
  <span className='sr-only'>Menu</span>
</button>
<div className='hidden w-full md:block md:w-auto' id="navbar-default">
 <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-[#1AB7FF]-50 p-4 font-medium md:mt:0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse'>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/projects'>Projects</Link>
    </li>
    <li>
      <Link to='/contact'>Contact</Link>
    </li>
  </ul>
  </div>
  </div>
</nav>


{/* Hero Section */}
<section className=" flex hero bg-stone-300 justify-center items-center h-screen">
      <div className="flex-col px-6  mx-auto">
        <h1 className='px-5 font-bold text-5xl'>Hello, I'm Elijah-Christian</h1>
        <p className='px-5 font-bold text-3xl'>A passionate developer</p>
        {/* 3d fun here?  */}
      </div>
    </section>
  
    {/* About Section */}
    <section id="about" className="about">
      <div>
        <h2>About Me</h2>
        <p> I am a Front- End Developer, from NY! 
      I am just a tech geek, who has some experience in the field of web development. 
      I bring a refreshing perspective to projects that epitomizes satisfied clients 
      and the Organization. Projects and people develop overtime, this portfolio is a living document 
      please check back to see anything new that I am working on! </p>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="projects">
    <div>

<h2>Here are some of my projects:</h2>

<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
<h2 className='text-4xl font-bold mb-4'>Liverpool FC</h2>
  <ProjectCard title='Liverpool FC' description='A project to show my love for the Reds! Click the image to see more!' image={Liverpool} link={'https://psychedelic-observation-production.up.railway.app/'} />
<ProjectCard title={'Refreshed News'} description={'A new Refreshing feel to a News website'} image={refreshedNews} link={'https://www.loom.com/share/2a91706e4ca141858de41a3bf2a612ba'} />
<ProjectCard title={'Group Chat Name Generator'} description={'Group Chat generator with a fun lottie file'} image={groupChatGen} link={'https://660f580d21f957209c188d87--groupchatnamegenerator.netlify.app/'} />
</section>
</div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="contact py-20 bg-[#1AB7FF]-100">
      <div>
        <h2 className='text-4xl font-bold mb-4'>Contact</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
    <p>Made with love</p><p>Made with love</p>
  </div>

 
  
)
export default Home;