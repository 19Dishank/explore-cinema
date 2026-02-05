import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AxiosMovieCard = ({ ele }) => {
    const { Poster, Title, Year, imdbID } = ele;

    return (
        <div className=" w-72 bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-slate-800 ">

            <img
                src={Poster}
                alt="Movie Poster"
                className="w-full aspect-2/3]object-cover"
            />

            <div className="p-5 ">
                <div className="flex flex-col justify-between items-start mb-2">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{Year} </span>
                    {/* <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{Genre}  </span> */}
                </div>
                {/* <span className="text-yellow-500 text-xs font-black"> {imdbRating} ★</span> */}

                <h3 className="text-white text-xl font-black leading-tight mb-4">
                    {Title}
                </h3>
                <div className="flex flex-col justify-between items-start mb-2">
                    {/* <span className="text-slate-400 text-xs font-bold capitalize tracking-wider"> BoxOffice {BoxOffice} </span> */}
                </div>
                <NavLink to={`/movie/${imdbID}`}>
                    <button disabled={true} className=" left-0 disabled:bg-gray-400 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 rounded-lg transition-colors text-sm">
                        Movie Details
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default AxiosMovieCard;