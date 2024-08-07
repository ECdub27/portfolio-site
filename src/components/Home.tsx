
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
const Home = () => (
  
  <div className="Home">
  <div className="bg-red-500 p-4">
    <p className="text-white">If this text is white and the background is red, Tailwind CSS is working!</p>
  </div> 
  {/* nav bar section uses the introduce my name with Elijah-Christian "EC" Wiegand  #212121'*/}
<nav className='fixed start-0 top-0 z-20 hidden w-full border-b border-white-200 bg-transparent sm:block'>
  <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
 
  <Avatar alt="Elijah-Christian"  src={propic} sx={{
  
  width: 400,
  height: 400,
  left:400,
  backgroundColor:'#212121',
  margin: 0,
  marginLeft: 0,
  marginBottom: 5,

}}/>
<button data-collapse-toggle="navbar-default"
type="button"
className='inline-flex- h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'>
  <span className='sr-only'>Menu</span>
</button>
<div className='hidden w-full md:block md:w-auto' id="navbar-default">
 <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt:0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse'>
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


{/* this is where I had the blurb about me and  */}
<Container sx={{backgroundColor: '#212121', flexWrap:'wrap', margin:'auto'}}>
<Avatar alt="Elijah-Christian"  src={propic} sx={{
  
  width: 400,
  height: 400,
  left:400,
  backgroundColor:'#212121',
  margin: 0,
  marginLeft: 0,
  marginBottom: 5,

}}>
  
  </Avatar>
  </Container>
 <Box sx={{backgroundColor:'#212121', margin:'auto'}}>
   <Typography color="white" sx={{
    fontWeight:'medium',
    fontColor:'white',
    fontStyle:'Oblique',
    marginTop: 20,
    fontFamily: 'Inter',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center'
    
   }}>
      I am a Front- End Developer, from NY! 
      I am just a tech geek, who has some experience in the field of web development. 
      I bring a refreshing perspective to projects that epitomizes satisfied clients 
      and the Organization. Projects and people develop overtime, this portfolio is a living document 
      please check back to see anything new that I am working on! 
   </Typography>
  </Box>

  <Box sx={{backgroundColor:'#212121', margin:'auto'}}>
  <Typography color="white"  sx={{ fontFamily:'League Spartan',
letterSpacing: 2,
 lineHeight: 1,}}>
  {/* projects section we want to have pan across in rows  */}
       <div id='Projects'>

        <h2>Here are some of my projects:</h2>

        <section>
          <span>
          <h3>LFC Information:  </h3>
          
          <p>Easy little project on my favorite footy team! 

          </p>
          </span>
         
        </section>
        
        <a href='https://psychedelic-observation-production.up.railway.app/'> <img src={Liverpool}  alt='Link To LFC Project' />  </a>
        <section>
          <h3>Refreshed News: </h3>
          <p> Click on the image to see a News app restrained by API usage but this was an earlier projected expected to show growth- 
            please be so kind to click the link to the loom to see it here on a dev server! 
          </p>
          <a href='https://www.loom.com/share/2a91706e4ca141858de41a3bf2a612ba'> <img  className='refreshed-news-photo'src={refreshedNews} alt='Refreshed News project'/>  </a>
        </section>

        <section>
          <span>
          <h3>Project 3 : </h3>
          <p>Group Chat Name Generator </p>
          </span>
          <p>Fun Little project to show some personality, click away and heres some inspo for your next groupchat name!</p>
          <a href='https://660f580d21f957209c188d87--groupchatnamegenerator.netlify.app/'> <img src={groupChatGen}  alt='Group Chat Generator by EC ' />  </a>
        </section>
       </div>
       </Typography>
    </Box>

  <div> 
    
  </div>

  <Box sx={{backgroundColor:'#212121', margin:'auto'}}>
    <Typography color="white"  sx={{ fontFamily:'League Spartan',}}>
        <div id='Contact-Form'>
         {/* <ContactForm /> */}
        </div>

    </Typography>
    </Box>
  
  <Box sx={{marginTop: 10 }}>
    
    <Typography color="#9575cd" sx={{  fontweight:'medium', textAlign:'center',}}>
  
    Made With 
    <FavoriteIcon sx={{
      color: 'red'
    }}/>
    
    </Typography>
  </Box>
  </div>
  
)
export default Home;