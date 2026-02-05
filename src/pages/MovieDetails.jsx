import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Optional icon

const MovieDetails = () => {
    const navigate = useNavigate();
    const movieData = useLoaderData();
    
    const { Poster, Title, Year, BoxOffice, Runtime, imdbRating, Genre, Director, Actors, Plot, Awards } = movieData;
    
    const handleBack = () => {
        navigate(-1);
    };

    // Safe time calculation logic
    const totalTime = Runtime ? Runtime.replace("min", "").trim() : 0;
    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;
    const timeDisplay = hours > 0 ? `${hours}hr ${minutes}min` : `${minutes}min`;

    return (
        <div className="bg-slate-950 min-h-screen text-white">
            <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
                
                {/* Back Button Container */}
                <div className="w-full max-w-2xl mb-6 flex justify-start">
                    <button 
                        onClick={handleBack} 
                        className='group flex items-center gap-2 px-5 py-2 border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white rounded-full transition-all duration-300 bg-slate-900/50 backdrop-blur-sm'
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-wider">Back</span>
                    </button>
                </div>

                {/* Movie Detail Card */}
                <div className="flex flex-col md:flex-row w-full max-w-2xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 transition-all duration-300 hover:border-slate-700">
                    
                    {/* Poster Section */}
                    <div className="relative w-full md:w-80 shrink-0">
                        <img
                            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"}
                            alt={Title}
                            className="w-full h-full object-cover aspect-[2/3] md:aspect-auto"
                        />
                        <div className="absolute top-4 left-4 bg-yellow-500 text-black px-2 py-1 rounded font-black text-xs shadow-lg">
                            {imdbRating} ★
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex flex-col">
                        <div>
                            <div className="flex flex-col mb-4">
                                <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                                    {Year} • {Genre}
                                </span>
                                <h3 className="text-white text-3xl md:text-4xl font-black uppercase italic leading-tight mb-2">
                                    {Title}
                                </h3>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold italic">
                                    <span>{timeDisplay}</span>
                                    <span className="text-emerald-400 not-italic">Box Office: {BoxOffice}</span>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3 border-l-2 border-indigo-500/30 pl-4">
                                <p className="text-xs font-bold tracking-wide">
                                    <span className="text-slate-100 uppercase mr-2 opacity-60">Director:</span>
                                    <span className="text-slate-300">{Director}</span>
                                </p>
                                <p className="text-xs font-bold tracking-wide">
                                    <span className="text-slate-100 uppercase mr-2 opacity-60">Starring:</span>
                                    <span className="text-slate-300">{Actors}</span>
                                </p>
                            </div>

                            <p className="mt-6 text-slate-400 text-sm leading-relaxed italic">
                                "{Plot}"
                            </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-800 mt-6">
                            <p className="text-xs font-bold tracking-wide">
                                <span className="text-indigo-400 uppercase mr-2">Awards:</span>
                                <span className="text-slate-400 font-medium">{Awards}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;