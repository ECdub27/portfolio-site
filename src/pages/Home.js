import React from 'react';
import Container from '@mui/material/Container';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import propic from './propic.png';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const Home = () => (
  
   <div className='Home'>
       
    <Container  sx={{textAlign:'center',
  backgroundColor:'#212121',
padding: 0,
flexWrap:'wrap',
flex:'auto',
width: 100
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

<Container sx={{margin: 0, 
justifyContent:'flex-start',
flex:'auto', 
width: 900,
backgroundColor:'#212121',
}}>
<Box sx={{ backgroundColor:'#212121', }}>
  <Grid container rowSpacing={12}>
    <Grid item xs={8}>
  <Typography variant="h1" component="h2" color="#9575cd" sx={{
fontFamily:'League Spartan'}}>
    Elijah-Christian "EC" Wiegand 
  </Typography>
  </Grid>
  </Grid>
  </Box>
  
</Container>

<Container sx={{backgroundColor: '#212121', flexWrap:'wrap',}}>
<Avatar alt="Elijah-Christian"  src={propic} sx={{
  
  width: 400,
  height: 400,
  left:400,
  backgroundColor:'#212121',
  margin: 0,
  marginLeft: 0,

}}>
  
  </Avatar>
  </Container>
 <Box sx={{backgroundColor:'#212121'}}>
   <Typography color="#9575cd" component="body1" sx={{
    fontWeight:'medium',
    fontColor:'#212121',
    fontStyle:'Oblique',
    marginTop: 0,
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
  
  </div>
  
)
export default Home;