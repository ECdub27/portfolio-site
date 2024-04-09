import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';
import Textfield from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  FormControl  from '@mui/material/FormControl';
import { styled } from '@mui/system';
import { purple  }  from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';


const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
}));

const ContactForm = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
 const form = useRef();

    const sendEmail =(e) =>{
        e.preventDefault();
        alert('I look forward to hearing from you soon!')
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
            <h1 className='contact'>Contact Me</h1>
            <div className="cards">

            
        <form ref={form} action={<Link to='/'/>}>

            <FormControl>
                <Stack spacing={2 }direction="row" sx={{marginBottom:4, paddingTop:4}}>
                <Textfield required size='large' variant='outlined'  value={name}label='Name' onChange={e => setName(e.target.value)} fullWidth sx={{mb:4}}> </Textfield>
                <Textfield required size='large' variant='outlined' value={email} label='Email' onChange={e => setEmail(e.target.value)} fullWidth sx={{mb:4}}></Textfield>
                <Textfield required size='large' variant='outlined' value={message} label='Message' onChange={e => setMessage(e.target.value)} fullWidth sx={{mb:4}}>  <TextareaAutosize/> </Textfield> 
                </Stack>
                <ColorButton variant='outlined' onSubmit={sendEmail} type="submit">Submit</ColorButton>
            </FormControl>
        </form>
        </div>
        </div>
    );

};


export default ContactForm;