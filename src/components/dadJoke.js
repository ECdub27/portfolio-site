import {useState, useEffect} from 'react';
import axios from 'axios';

const url = 'https://v2.jokeapi.dev/joke/Programming';

const GetJoke = () => {
    const [joke, setJoke] = useState('');
const  fetchJoke = async () => {
    try {
        const response = await axios(url);
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.log(error.response + 'error!');
    }
};
useEffect(() =>{
    axios.get('https://v2.jokeapi.dev/joke/Programming').then((response) =>{
        setJoke(response.data);
    })
    fetchJoke();
}, []);

return (
    <div>
    <h2 className='test-h2'>First Request </h2>
    <p>
    {Response.setup}
    {Response.punchline}
    </p>
    </div>
   
);
}
export default GetJoke;