import Avatar from '@mui/material/Avatar';
import propic from '../../public/imgs/propic.png';
import refreshedNews from '../../public/imgs/refreshedNews.png';
import groupChatGen from '../../public/imgs/GroupChatNameGen.png';
import Liverpool from '../../public/imgs/Liverpoolshield.jpg';
import ProjectCard from './projectCard';  
import ContactForm from './contactForm';

// palette colors 1AB7FF -blue bright chartruese - 2CF000 202827
const Home = () => (
  <div className="Home  bg-[#f0f4f8]">
  
  {/* nav bar section uses the introduce my name with Elijah-Christian "EC" Wiegand  #212121'*/}
<nav className='fixed start-0 top-0 z-20 hidden w-full border-b border-[#212121]-200 bg-[#267FF3] sm:block'>
  <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
 {/* logo here */}
 <button data-collapse-toggle="navbar-default"
type="button"
className='inline-flex- h-10 w-10 items-center bg-[#white] justify-center rounded-lg p-2 text-sm text-gray hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black-200 md:hidden'>
  <span className='sr-only'>Menu</span>
</button>
<div className='hidden w-full md:block md:w-auto' id="navbar-default">
 <ul className='mt-4 flex flex-col rounded-lg border border-red-500 bg-[#1AB7FF]-50 p-4 font-medium md:mt:0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse'>
    <li className="bg-[#267FF3]">
      <a href='#home' className='text-white'>Home</a>
    </li>
    <li className="bg-[#267FF3]">
      <a className='text-white'  href='#about'>About</a>
    </li>
    <li className="bg-[#267FF3]">
      <a className='text-white' href='#projects'>Projects</a>
    </li>
    <li className="bg-[#267FF3]">
      <a className='text-white' href='#contact'>Contact</a>
    </li>
  </ul>
  </div>
  </div>
</nav>




{/* Hero Section */}
<section className="flex flex-col md:flex-row bg-[#161616] justify-center items-center h-screen relative">
  <div className="order-2 md:order-1 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:relative md:left-16 md:top-40 lg:left-24 lg:top-48 lg:space-y-8">
    <div className="text-white text-4xl md:text-6xl lg:text-8xl font-normal font-['League Spartan']">
      Hi, I’m
    </div>
    <div className="text-white text-3xl md:text-5xl lg:text-7xl font-normal font-['League Spartan']">
      Elijah-Christian
    </div>
    <div className="text-white text-xl md:text-3xl lg:text-5xl font-normal font-['League Spartan']">
      A Passionate Software Developer
    </div>
  </div>
  <div className="order-1 md:order-2 mt-8 md:mt-0 lg:ml-16">
    <Avatar className='mx-auto justify-center place-self-end' alt='Elijah-Christian Wiegand' src={propic} sx={{ width: 400, height: 400 }} /> 
  </div>
</section>

{/* About Section */}
<section id="about" className="h-auto mt-12 flex flex-col p-8 w-full bg-[#f0f4f8]">
  <h2 className="mx-auto text-2xl justify-center items-center font-bold">About Me</h2>

  <p className='flex-col mt-5 font-league-spartan text-xl text-pretty leading-7 px-5'>
    I am a Full-Stack Developer, from NY! I am just a tech geek, who has some experience in the field of web development. 
    I bring a refreshing perspective to projects that epitomizes satisfied clients and the Organization. 
    I am a believer, that sometimes "Haste is Waste" and sometimes Less is More. 
    Projects and people develop overtime, this portfolio is a living document please check back to see anything new that I am working on!
  </p>
  <div className="flex flex-col mt-5 font-league-spartan text-xl text-pretty leading-7 px-5">
    <p>Here are some of the technologies I have experience with:</p>
    <ul className="list-disc list-inside">
      <li>React Frameworks(React, Vite, NextJs)</li>
      <li>PostgreSQL</li>
      <li>JavaScript</li>
      <li>Microsoft SQL Server Management Studio (SSMS)</li>
      <li>Node.js</li>
      <li>Express</li>
      <li>PostgreSQL</li>
      <li>Git</li>
      <li>.NET</li>
    </ul> 
    </div>
</section>


    {/* Projects Section */}
    <section id="projects" className="projects mt-8 h-auto w-screen bg-[#161616] flex flex-col items-center">
        <h2 className="text-4xl font-bold leading-10 text-center text-[#1AB7FF]">Here are some of my projects:</h2>
        <div className=" inline-flex justify-center space-x-4 bg-[#161616] ">
          <ProjectCard title="Liverpool FC" description="A project to show my love for the Reds! Click the image to see more!" image={Liverpool} link="https://psychedelic-observation-production.up.railway.app/" />
          <ProjectCard title="Group Chat Name Generator" description="Group Chat generator with a fun lottie file" image={groupChatGen} link="https://660f580d21f957209c188d87--groupchatnamegenerator.netlify.app/" />
          <ProjectCard title="Refreshed News" description="A new Refreshing feel to a News website" image={refreshedNews} link="https://vite-refreshed-news-kscixfsrp-ecdub27s-projects.vercel.app/#main" />
        </div>
      </section>

    {/* Contact Section */}
    <section id="contact" className="contact h-auto w-screen bg-[#161616] flex flex-col items-center">
  
  <div className="w-full max-w-2xl">
    <ContactForm />
  </div>
</section>
  </div>

 
  
)
export default Home;