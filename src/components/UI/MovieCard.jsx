import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = ({ ele }) => {
    const { Poster, Title, Year, imdbID } = ele;

    return (
        <div className="w-full max-w-[300px] flex flex-col bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-800 transition-transform duration-300 hover:-translate-y-2">
            
            {/* Poster Container */}
            <div className="aspect-[2/3] overflow-hidden bg-slate-800">
                <img
                    src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450?text=No+Poster"}
                    alt={Title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
                        {Year}
                    </span>
                </div>

                <h3 className="text-white text-lg font-bold leading-tight mb-6 line-clamp-2 h-12">
                    {Title}
                </h3>
                
                {/* Push button to bottom */}
                <div className="mt-auto">
                    <NavLink to={`/movie/${imdbID}`}>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-lg transition-all active:scale-95 text-sm uppercase tracking-wide">
                            Movie Details
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;