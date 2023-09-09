import React, { useState } from 'react';
import { useEffect } from 'react';

const DadJokeComponent=()=> {

    const [joke, setJoke] = useState('true');

const fetchJoke = () => {
  const getJoke =  async () => { 
    const response = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': "b5e892b6abmsh21c7215beb4fc40p19d633jsn9b0fadd6d271",
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
      }
    });
    fetch('https://dad-jokes.p.rapidapi.com/random/joke').then(
      (response) => response.json()).then((data) =>{
        setJoke(response.data.setup + '...' + response.data.punchline);
      })
   console.log(getJoke);
  };
};
 return (
<div>
   
   
       <h1>Dad Joke of the Day:</h1>
       {fetchJoke}
       
     
    
</div>
);
};
export default DadJokeComponent;