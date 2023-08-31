import React, {useState, useEffect } from 'react';


const DadJokeComponent = async () => {
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const data = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd8488f23c0msh87fc82cac08b614p14a945jsn0d879d59d146',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, data);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
return (
    <div className='footer-div'>
        <footer className='footer'>
      
      </footer>

    </div>
);
}

export default DadJokeComponent;