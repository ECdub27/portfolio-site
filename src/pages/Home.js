
import Container from '@mui/material/Container';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import propic from './propic.png';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DadJokeSimpleSnackbar from '../components/dadJokeSnackbar';
import './home.css';
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
      }}>
        ewiegand51@gmail.com
      </Typography>
      <Link to='mailto:ewiegand51@gmail.com' exact component={ContactMailIcon}>
      <ContactMailIcon  />
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
      I am a Front- End Developer, from NY
      but I am based in San Diego, CA. 
      I bring a refreshing perspective to projects that epitomizes satisfied clients 
      and the Organization.  
   </Typography>
  </Box>

  <Box sx={{backgroundColor:'#212121', margin:'auto'}}>
  <Typography color="white"component="body1" sx={{ fontFamily:'League Spartan',
letterSpacing: 2,
 lineHeight: 1,}}>
       <div id='Projects'>

        <h2>Here are some of my projects:</h2>

        <section>
          <h3>Music Player</h3>
          <p>Nice Clean Music Player</p>
          <a href=''> <img src=''  alt='' />  </a>
        </section>
        <section>
          <h3>Refreshed News</h3>
          <p>A News app restrained by API usage but this was an earlier projected expected to show growth </p>
          <a href=''> <img src='refreshedNews.png'  alt='Refreshed News Project' />  </a>
        </section>
        <section>
          <h3>Project 3</h3>
          <p>Simply Blog Website with my own personal touch!</p>
          <a href=''> <img src=''  alt='' />  </a>
        </section>
       </div>
       </Typography>
    </Box>

   <div> 
    <DadJokeSimpleSnackbar />
   </div>

  <Box sx={{backgroundColor:'#212121', margin:'auto'}}>
    <Typography color="white"component="body1" sx={{ fontFamily:'League Spartan',}}>
        <div id='Contact-Form'>

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