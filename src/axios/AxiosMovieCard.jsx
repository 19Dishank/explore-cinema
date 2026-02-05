import React from 'react';
import { NavLink } from 'react-router-dom';

const AxiosMovieCard = ({ ele }) => {
    const { Poster, Title, Year, imdbID } = ele;

    return (
        /* Removed w-72 for a responsive width */
        <div className="w-full max-w-[300px] bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-800 flex flex-col transition-transform hover:scale-[1.02]">
            
            <div className="aspect-[2/3] overflow-hidden">
                <img
                    src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"}
                    alt={Title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
                        {Year}
                    </span>
                </div>

                <h3 className="text-white text-lg font-bold leading-tight mb-6 line-clamp-2 h-12">
                    {Title}
                </h3>
                
                <NavLink to={`/movie/${imdbID}`} className="mt-auto">
                    {/* Removed disabled={true} and adjusted padding */}
                    <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-lg transition-all active:scale-95 text-sm">
                        Movie Details
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default AxiosMovieCard;