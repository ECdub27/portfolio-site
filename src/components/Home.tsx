import Avatar from '@mui/material/Avatar';
import propic from '../../public/imgs/propic.png';
import refreshedNews from '../../public/imgs/refreshedNews.png';
import groupChatGen from '../../public/imgs/GroupChatNameGen.png';
import Liverpool from '../../public/imgs/Liverpoolshield.jpg';
import ProjectCard from './projectCard';  
import ContactForm from './contactForm';
import ThreeScene from './ThreeScene';

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
      <a href='#home'>Home</a>
    </li>
    <li>
      <a href='/about'>About</a>
    </li>
    <li>
      <a href='#projects'>Projects</a>
    </li>
    <li>
      <a href='/contact'>Contact</a>
    </li>
  </ul>
  </div>
  </div>
</nav>


{/* Hero Section */}
<section className=" flex hero bg-[#202827] justify-center items-center h-screen">
      <div className="flex-col px-6  mx-auto">
        <h1 className='px-5 font-bold text-5xl'>Hello, I'm Elijah-Christian</h1>
        <p className='px-5 font-bold text-3xl'>A passionate developer</p>
        <Avatar className='mx-auto justify-center items-center mt-10'alt='Elijah-Christian Wiegand' src={propic} sx={{ width: 400, height: 400 }} /> 
        {/* 3d fun here?  */}
      </div>
    </section>
  
    {/* About Section */}
    <section id="about" className="h-[600px] mt-12 flex flex-col">
        <h2 className="mx-auto text-2xl justify-center items-center font-bold">About Me</h2>
        <p className=' flex-col mt-5 font-league-spartan font-xl text-pretty leading-7'> I am a Front- End Developer, from NY! 
      I am just a tech geek, who has some experience in the field of web development. 
      I bring a refreshing perspective to projects that epitomizes satisfied clients 
      and the Organization. Projects and people develop overtime, this portfolio is a living document 
      please check back to see anything new that I am working on! </p>
     
    </section>

    {/* Projects Section */}
    <section id="projects" className="projects mt-8 h-full w-screen bg-[#202827] flex flex-col items-center">
        <h2 className="text-4xl font-bold leading-10 text-center text-[#1AB7FF]">Here are some of my projects:</h2>
        <div className=" inline-flex justify-center space-x-4">
          <ProjectCard title="Liverpool FC" description="A project to show my love for the Reds! Click the image to see more!" image={Liverpool} link="https://psychedelic-observation-production.up.railway.app/" />
          <ProjectCard title="Group Chat Name Generator" description="Group Chat generator with a fun lottie file" image={groupChatGen} link="https://660f580d21f957209c188d87--groupchatnamegenerator.netlify.app/" />
          <ProjectCard title="Refreshed News" description="A new Refreshing feel to a News website" image={refreshedNews} link="https://www.loom.com/share/2a91706e4ca141858de41a3bf2a612ba" />
        </div>
      </section>

    {/* Contact Section */}
   <ContactForm />  
    <p>Made with love</p><p>Made with love</p>
  </div>

 
  
)
export default Home;