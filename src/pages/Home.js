import React from 'react';
import Container from '@mui/material/Container';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import propic from './propic.png';

import { Link } from 'react-router-dom';


const Home = () => (
  
   <div className='Home'>
       
    <Container  sx={{textAlign:'center',
  backgroundColor:'#424242'}}>
   <Typography sx={{padding: 1,
      textTransform:'uppercase',
      fontweight: 'bold',
      fontFamily: 'League Spartan',
      backgroundColor:'#424242'}}>
        ewiegand51@gmail.com
      </Typography>
      <Link to='mailto:ewiegand51@gmail.com' exact component={ContactMailIcon}>
      <ContactMailIcon />
      </Link>
   </Container>

<Container>
<Box sx={{ flex:'flex-end',
padding: 10,
backgroundColor:'#424242'
}}>
  <Typography variant="h1" component="h2" sx={{textAlign:'center',
fontFamily:'League Spartan', backgroundColor:'#424242'
}}
>
    Elijah-Christian "EC" Wiegand 
  </Typography>
  
</Box>
</Container>
<Container sx={{backgroundColor: '#424242'}}>
<Avatar alt="Elijah-Christian"  src={propic} sx={{
  width: 400,
  height: 400,
  marginTop: 3,
  left:400,
  backgroundColor:'#424242'
}}>
  
  </Avatar>
  </Container>
 <Box sx={{backgroundColor:'#424242'}}>
   <Typography sx={{
    fontWeight:'medium',
    fontColor:'#e040fb',
    fontStyle:'Oblique',
    marginTop: 5,
    fontFamily: 'Inter',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center'
   }}>
      I am a Front- End Developer, from NY
      but I am based in San Diego, CA. 
      I have been developing websites and projects independently 
      for 2 years. I frequently work out of React, MUI, Python and SQL.
      I graduated from Buffalo State University in 2019, after a stop in HR 
      I knew Web Development was my passion. I promptly gave up the recruitment/HR space and starting learing how to code.
      I realized that this is my forever career path, and I am exci Please peruse through my site to learn more!
      
   </Typography>
  </Box>
  
  </div>
  
)
export default Home;