import React, { useState } from 'react';
import { useEffect } from 'react';

const DadJokeComponent=()=> {

    const [joke, setJoke] = useState('');

const fetchJoke = async () => {
    try {
      const response = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': "b5e892b6abmsh21c7215beb4fc40p19d633jsn9b0fadd6d271",
          'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJoke(data[0].joke);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    fetchJoke();
  }, []);

 return (
<div>
   
   
       <h1>Dad Joke of the Day:</h1>
       {fetchJoke && joke}
     
    
</div>
);
};
export default DadJokeComponent;