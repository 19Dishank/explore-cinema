import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../components/UI/MovieCard';

const Movie = () => {
    const getMoviesData = useLoaderData();
    console.log(getMoviesData);
    return (
        // <div className='grid grid-cols-4 gap-4 px-10 py-5 place-items-center'>
        //     <MovieCard getMoviesData={getMoviesData}/>    
        // </div>
        <div className=' bg-slate-950 grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-1 md:grid-cols-2 gap-4 px-10 py-5 place-items-center'>
            {getMoviesData.Search.map((ele) => <MovieCard key={ele.imdbID} ele={ele}/>)}
        </div>
    );
};

export default Movie;