import Avatar from '@mui/material/Avatar';
import propic from '../../public/imgs/propic.png';
import refreshedNews from '../../public/imgs/refreshedNews.png';
import groupChatGen from '../../public/imgs/GroupChatNameGen.png';
import Liverpool from '../../public/imgs/Liverpoolshield.jpg';
import ProjectCard from './projectCard';  
import ContactForm from './contactForm';
import Technologies from './technologies';
import { FaAddressCard, FaExclamation, FaHome, FaScrewdriver } from 'react-icons/fa';
import MainNav from './mainNav';

// palette colors 1AB7FF -blue bright chartruese - 2CF000 202827
const Home = () => (
  <div className="Home  bg-[#f0f4f8]">
  
  {/* nav bar section uses the introduce my name with Elijah-Christian "EC" Wiegand  #212121'*/}
<MainNav /> 

<div className="w-80 h-[520px] p-6 bg-[#292f36] rounded-tl-full rounded-br-full shadow border-4 border-white flex-col justify-center items-start gap-8 inline-flex">
    <div className="flex-col justify-start items-center gap-8 flex">
        <div className="flex-col justify-start items-center gap-4 flex">
            <img className="rounded-[64px] border-2 border-[#12f7d6]" src="https://via.placeholder.com/96x96" />
            <div className="flex-col justify-start items-center flex">
                <div className="text-white text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">EC WIegand</div>
                <div className="text-white text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">Full-Stack developer</div>
            </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
            <div className="flex-col justify-start items-start gap-4 flex">
                <div className="justify-center items-center gap-4 inline-flex">
                    <div className="w-3.5 h-3.5 justify-center items-center flex">
                        <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex" />
                    </div>
                    <div className="text-white text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">ecdevdub27@outlook.com</div>
                </div>
                <div className="justify-center items-center gap-4 inline-flex">
                    <div className="w-3.5 h-3.5 justify-center items-center flex">
                        <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex" />
                    </div>
                    <div className="text-white text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">LI, NY</div>
                </div>
                <div className="justify-center items-center gap-4 inline-flex">
                    <div className="w-3.5 h-3.5 justify-center items-center flex">
                        <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex" />
                    </div>
                    <div className="text-white text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">Full-time Developer</div>
                </div>
                <div className="justify-center items-center gap-4 inline-flex">
                    <div className="w-3.5 h-3.5 justify-center items-center flex">
                        <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex" />
                    </div>
                    <div className="text-white text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">Twitter</div>
                </div>
            </div>
            <div className="justify-start items-start gap-4 inline-flex">
                <div className="px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                    <div className="text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">NextJs</div>
                </div>
                <div className="px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                    <div className="text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">.NET</div>
                </div>
                <div className="px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                    <div className="text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">PostgreSQL</div>
                </div>
                <div className="px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                    <div className="text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">Docker</div>
                </div>
            </div>
        </div>
    </div>
    <div className="flex-col justify-start items-center flex">
        <div className="px-8 py-4 bg-white rounded-[32px] justify-center items-center gap-4 inline-flex">
            <div className="text-[#292f36] text-xl font-normal font-['Ubuntu'] capitalize leading-normal">Download CV</div>
            <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
            </div>
        </div>
    </div>
</div>


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
<section id="about" className="h-autos flex flex-col p-8 w-full bg-[#f0f4f8]">

  <div className='h-[104px] px-10 py-4 bg-[#292f36] rounded-tl-[40px] rounded-br-[40px] border-4 border-[#12f7d6] justify-start items-start inline-flex"'>
  <h2 className="mx-auto text-2xl justify-center items-center font-bold">About Me</h2>

  </div>
  <div className='h-auto px-10 py-6 bg-[#292f36] rounded-[40px] flex-col justify-start items-start gap-4'>
    {/* add like styled spans of name in a cool way */}
  <div className='flex-col mt-5 font-league-spartan text-xl text-white text-pretty leading-7 px-5'>
    <p>
    I am a Full-Stack Developer, from NY! I am just a tech geek, who has some experience in the field of web development. 
    I bring a refreshing perspective to projects that epitomizes satisfied clients and the Organization. 
    I am a believer, that sometimes "Haste is Waste" and sometimes Less is More. 
    Projects and people develop overtime, this portfolio is a living document please check back to see anything new that I am working on!
    </p>
  </div>
 <Technologies /> 
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