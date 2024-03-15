import { useGetRandomDadJokeQuery } from "../api/api";


const RandomDadJoke = () => {
   
    const {data, error, isLoading} = useGetRandomDadJokeQuery('');
return (
    <div className='dad-joke-div'>
    <h3> Random Dad Joke of The Day!</h3>
    {error ? (
        <>
        <p>Something went wrong</p>
        </>
    ) : isLoading ? (
        <>
        <p>Loading...</p>
        </>
    ) : (
        <>
        <h5>{data.setup} </h5>
        <p>{data.punchline}</p>
        </>
    
    )}
    </div>
   
);
};
export default RandomDadJoke;