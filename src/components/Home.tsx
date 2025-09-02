import Avatar from "@mui/material/Avatar";
import propic from "/imgs/propic.png";
import refreshedNews from "/imgs/refreshedNews.jpeg";
import groupChatGen from "/imgs/GroupChatNameGen.png";
import recipeFinder from "/imgs/recipeFinder.jpeg";
import ProjectCard from "./projectCard";
import Technologies from "./technologies";
import {
  FaAddressCard,
  FaExclamation,
  FaHome,
  FaScrewdriver,
} from "react-icons/fa";
import MainNav from "./mainNav";
import MainSection from "./MainSection";
import ContactSection from "./contact";
import Footer from "./footer";

// palette colors 1AB7FF -blue bright chartruese - 2CF000 202827
const Home = () => (
  <div id="home" className="Home  bg-[#f0f4f8]">
    {/* nav bar section uses the introduce my name with Elijah-Christian "EC" Wiegand  #212121'*/}
    <MainNav />

    {/* Hero Section */}
    <section className="flex flex-col md:flex-row bg-[#161616] justify-center items-center h-screen relative">
      <div className="order-2 md:order-1 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:relative md:left-16 md:top-40 lg:left-24 lg:top-48 lg:space-y-8">
        <div className="text-white text-4xl md:text-6xl lg:text-8xl font-normal font-['League Spartan']">
          Hi, I&apos;m
        </div>
        <div className="text-white text-3xl md:text-5xl lg:text-7xl font-normal font-['League Spartan']">
          Elijah-Christian
        </div>
        <div className="text-white text-xl md:text-3xl lg:text-5xl font-normal font-['League Spartan']">
          Full-Stack Developer — enterprise roots, modern web focus
        </div>
      </div>
      <div className="order-1 md:order-2 mt-8 md:mt-0 lg:ml-16">
        <Avatar
          className="mx-auto justify-center place-self-end"
          alt="Elijah-Christian Wiegand"
          src={propic}
          sx={{ width: 400, height: 400 }}
        />
      </div>
    </section>

    {/* About Section */}
    <MainSection title="About Me" altBackground>
      <div
        id="about-section"
        className="h-auto px-10 py-6 bg-[#292f36] rounded-[40px] flex-col justify-start items-start gap-4"
      >
        {/* add like styled spans of name in a cool way */}
        <div className="flex-col mt-2 font-league-spartan text-xl text-white text-pretty leading-7 px-5 border-[#E0607E] shadow-lg h-auto ">
          <p className=" hover:focus text-lg ">
            I’m Elijah-Christian Wiegand, a Full-Stack Developer from New York.
            By day I configure and extend Guidewire for complex policy workflows
            in enterprise insurance. By night I build clean, scalable apps with
            .NET, Next.js, and friends.
            <br />
            My sweet spot is bridging <strong>legacy enterprise systems</strong>{" "}
            with <strong>modern engineering practices</strong>—untangling brittle
            logic, improving reliability, and shipping user-friendly features.
            <br />
            I believe “haste makes waste,” and that less can be more. This
            portfolio is a living document—check back for what I’m shipping next.
          </p>
          <p className=" hover:focus text-lg">
            Here are some of the technologies I work with:
          </p>
        </div>
        <Technologies />
      </div>
    </MainSection>

    <MainSection title="Projects" altBackground={true}>
      <div
        id="project-section"
        className=" inline-flex justify-center space-x-4 bg-[#161616] "
      >
        <ProjectCard
          title="RecipeFinder"
          description="Turn leftover ingredients into dinner—save money, reduce waste."
          image={recipeFinder}
          link="https://recipedia-six.vercel.app/"
        />
        <ProjectCard
          title="Group Chat Name Generator"
          description="Generate fun, memorable names—plus a playful Lottie animation."
          image={groupChatGen}
          link="https://660f580d21f957209c188d87--groupchatnamegenerator.netlify.app/"
        />
        <ProjectCard
          title="Refreshed News"
          description="A clean, fast news experience with a refreshed, modern feel."
          image={refreshedNews}
          link="https://vite-refreshed-news.vercel.app/"
        />
      </div>
    </MainSection>

    <MainSection title=''>
      <ContactSection />
      <Footer />
    </MainSection>
  </div>
);
export default Home;
