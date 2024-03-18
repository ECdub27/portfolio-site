import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';
import Textfield from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  FormControl  from '@mui/material/FormControl';

import  Paper  from '@mui/material/Paper';
import { styled } from '@mui/system';
import { purple  }  from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
}));

const ContactForm = () => {
 const form = useRef();

    const sendEmail =(e) =>{
        e.preventDefault();
    }

    emailjs.sendForm('service_vtsq4ae','template_gb7nefs', form.current, {
        publicKey: 'Hn5eUyliW-q9VSNSb',
    }).then(() => {
        console.log("Success!");
    }, (error) => {
        console.log('failed...', error.text);
    });


    return (
   
        <div className='form-background'>
            <h1>Contact Me</h1>
            <Paper variant='outlined' elevation={12} color='black' sx={{}}>
        <FormControl ref={form} onSubmit={sendEmail}>
            <div className="form-group">
               <Textfield  label='Name'></Textfield>
            </div>
            <div className="form-group">
            <Textfield  label='Email'></Textfield>
            </div>
            <div className="form-group">
            <Textfield   label='Message'></Textfield>
            </div>
            <ColorButton variant='outlined'  onSubmit={sendEmail} type="submit" >Submit</ColorButton>
        </FormControl>
        </Paper>
        </div>
    );

};


export default ContactForm;