
import Container from '@mui/material/Container';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import propic from './propic.png';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './home.css';
import ContactForm from '../components/contactForm';
import refreshedNews from './refreshedNews.png';
import groupChatGen from './GroupChatNameGen.png';
import Liverpool from './Liverpoolshield.jpg';
const Home = () => (
  
   <div className='Home'>
       
    <Container  sx={{textAlign:'center',
  backgroundColor:'#212121',
padding: 0,
flexWrap:'wrap',
flex:'auto',
width: 100,
marginLeft: 20,
}}
  >
    <Grid container spacing={4}>
      <Grid item xs={8}>
<Typography color="#9575cd" sx={{
      textTransform:'uppercase',
      fontweight: 'bold',
      fontFamily: 'League Spartan',
      marginLeft:100,
      }}>
       
      </Typography>
      <Link to='mailto:ewiegand51@gmail.com' exact component={ContactMailIcon}>
      <ContactMailIcon  justifyContent='flex-end'sx={{marginLeft:100}} />
      </Link>
      </Grid>
      </Grid>
   </Container>

<Container sx={{margin: 'auto', 
justifyContent:'flex-start',
flex:'auto', 
backgroundColor:'#212121',
}}>
<Box sx={{ backgroundColor:'#212121', textAlign:'center' }}>
  <Typography variant="h1" component="h2" color="#9575cd" sx={{
fontFamily:'League Spartan',
letterSpacing: 2,
 lineHeight: 1,
 marginBottom: 4,
 }}>
    Elijah-Christian "EC" Wiegand 
  </Typography>
  </Box>
  
</Container>

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
   <Typography color="white"component="body1" sx={{
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
      please check back to see anything new tht I am working on! 
   </Typography>
  </Box>

  <Box sx={{backgroundColor:'#212121', margin:'auto'}}>
  <Typography color="white"component="body1" sx={{ fontFamily:'League Spartan',
letterSpacing: 2,
 lineHeight: 1,}}>
       <div id='Projects'>

        <h2>Here are some of my projects:</h2>

        <section>
          <span>
          <h3>LFC Information:  </h3>
          
          <p>Easy little project on my favorite footy team! </p>
          </span>
          <a href='https://psychedelic-observation-production.up.railway.app/'> <img src={Liverpool}  alt='Link To LFC Project' />  </a>
        </section>
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
    <Typography color="white"component="body1" sx={{ fontFamily:'League Spartan',}}>
        <div id='Contact-Form'>
         <ContactForm />
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