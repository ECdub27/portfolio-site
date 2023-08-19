import React from 'react';
import Container from '@mui/material/Container';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import propic from './propic.png';
import uchihaSymbol from './uchihaSymbol 1.svg'
import { CenterFocusStrong } from '@mui/icons-material';
import Paper from '@mui/material/Paper';

const Home = () =>(
   <div className='Home'>
    <Container >
    <ContactMailIcon>
      <Typography>
        ewiegand51@gmail.com
      </Typography>
    </ContactMailIcon> 
</Container>
<Box >
  <Typography variant="h2" component="h2" sx={{}}>
    Elijah-Christian "EC" Wiegand 
  </Typography>
  
</Box>
<Avatar alt="Elijah-Christian"  src={propic} sx={{
  width: 200,
  height: 200,
  marginTop: 10,
  left:500
}}>
  
  </Avatar>
  <Paper variant='outlined' elevation={2} sx={{marginTop: 5}}>
   <Typography>
      I am a Front- End Developer, from NY
      but I am based in San Diego, CA. 
      I have been developing websites and projects independently 
      for 2 years. I frequently work out of React, MUI, Python and SQL.
      I graduated from Buffalo State University in 2019, after a stop in HR 
      I knew Web Development was my passion. Please peruse through my site to learn more!
   </Typography>
  </Paper>
  </div>
)
export default Home;