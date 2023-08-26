import React from 'react';
import Container from '@mui/material/Container';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import propic from './propic.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const theme = createTheme({
  palette:{
    primary:{
      light: '#7a777b',
      main: '#c2bfc4' ,
      dark: '#252226',
      contrastText: '#f8f4fa'
    },
    secondary:{
      light: '#df86d1',
      main: '#c609b1' ,
      dark: '#67008b',
      contrastText: '#f8f4fa'
    },
    typography:{
      fontFamily: [
        'League Spartan',
        'Montserrat',
         'Inter'
      ].join(','),
    },
  }
  });

const Home = () => (
  
   <div className='Home'>
   <ThemeProvider theme={theme}>    
    <Container  sx={{textAlign:'center'}}>
   <Typography sx={{padding: 1,
      textTransform:'uppercase',
      fontweight: 'bold',
      fontFamily: 'League Spartan'}}>
        ewiegand51@gmail.com
      </Typography>
      <Link to='mailto:ewiegand51@gmail.com' exact component={ContactMailIcon}>
      <ContactMailIcon />
      </Link>
   </Container>

<Container>
<Box sx={{ flex:'flex-end',
padding: 10,
}}>
  <Typography variant="h1" component="h2" sx={{textAlign:'center',
fontFamily:'League Spartan'}}>
    Elijah-Christian "EC" Wiegand 
  </Typography>
  
</Box>
</Container>
<Avatar alt="Elijah-Christian"  src={propic} sx={{
  width: 400,
  height: 400,
  marginTop: 3,
  left:400,
  backgroundColor: 'primary.main',
}}>
  
  </Avatar>
 <Box sx={{backgroundColor:'.palette.primary'}}>
   <Typography sx={{
    fontWeight:'medium',
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
      I knew Web Development was my passion. Please peruse through my site to learn more!
      
   </Typography>
  </Box>
  </ThemeProvider> 
  </div>
  
)
export default Home;