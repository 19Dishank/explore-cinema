import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../components/UI/MovieCard';

const Movie = () => {
    const getMoviesData = useLoaderData();
    
    return (
        <div className='bg-slate-950 min-h-screen'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-10 py-10 max-w-7xl mx-auto place-items-center'>
                {getMoviesData?.Search?.map((ele) => (
                    <MovieCard key={ele.imdbID} ele={ele}/>
                ))}
            </div>
        </div>
    );
};

export default Movie;