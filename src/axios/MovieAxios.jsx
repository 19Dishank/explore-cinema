import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AxiosMovieCard from './AxiosMovieCard';

const MovieAxios = () => {
    const [movieData, setMovieData] = useState([]);
    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=a5a96cf7&s=titanic"
    const getData = async () => {
        try {
            const res = await axios.get(API);
            setMovieData(res.data.Search);
            console.log(res.data.Search);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className=' bg-slate-950 grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-1 md:grid-cols-2 gap-4 px-10 py-5 place-items-center'>

            {movieData.map((ele) => {
                return (
                    <AxiosMovieCard key={ele.imdbID} ele={ele} />
                )
            })}
        </div>
    );
};

export default MovieAxios;