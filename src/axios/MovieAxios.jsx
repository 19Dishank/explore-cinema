import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AxiosMovieCard from './AxiosMovieCard';

const MovieAxios = () => {
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);

    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=a5a96cf7&s=titanic";

    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(API);
            setMovieData(res.data.Search || []);
        } catch (error) {
            console.error("Axios Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='bg-slate-950 min-h-screen'>
            {loading ? (
                
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
            ) : (
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-10 py-10 place-items-center max-w-7xl mx-auto'>
                    {movieData.map((ele) => (
                        <AxiosMovieCard key={ele.imdbID} ele={ele} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MovieAxios;