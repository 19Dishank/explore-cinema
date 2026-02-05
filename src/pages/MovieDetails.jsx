import React from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
    const navigate = useNavigate();
    const movieData = useLoaderData();
    
    const { Poster, Title, Year, BoxOffice, Runtime, imdbRating, Genre, Director, Actors, Plot, Awards } = movieData
    const handleBack = () => {
        navigate(-1)
    }
    const totalTime = Runtime.replace("min", "")
    const hours = Math.floor(totalTime / 60);
    const minues = totalTime % 60;
    const time = `${hours}hr ${minues}min`
    // console.log(movieData);
   

    return (
        <div>
            <div className="w-full grid  px-4 py-5 place-items-center content-start  min-h-screen">
                <div className="flex flex-col justify-between items-start  container ">
                    <button onClick={handleBack} className='px-4 py-2 bg-red-600 text-white rounded-md'>Back</button>
                </div>

                <div className="flex flex-col md:flex-row w-full max-w-2xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 transition-all duration-300 hover:border-slate-700">


                    <div className="relative w-full md:w-72 shrink-0">
                        <img
                            src={Poster}
                            alt={Title}
                            className="w-full h-full object-cover aspect-2/3 md:aspect-auto"
                        />

                        <div className="absolute top-4 left-4 bg-yellow-500 text-black px-2 py-1 rounded font-black text-xs">
                            {imdbRating} ★
                        </div>
                    </div>


                    <div className="p-6 md:p-8 flex flex-col justify-between">

                        <div>

                            <div className="flex flex-col mb-2">
                                <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                    {Year} • {Genre}
                                </span>
                                <h3 className="text-white text-3xl font-black uppercase italic leading-tight mt-1 -mb-2">
                                    {Title}
                                </h3>
                                <p className=" text-slate-400 text-xs leading-relaxed line-clamp-3 md:line-clamp-4 italic w-38.75 text-start">
                                    {time}
                                </p>
                                <span className="text-emerald-400 text-xs font-bold mt-1">
                                    Box Office: {BoxOffice}
                                </span>
                            </div>


                            <div className="mt-6 space-y-2 border-l-2 border-slate-800 pl-4">
                                <p className="text-xs font-bold tracking-wide">
                                    <span className="text-slate-100 uppercase mr-2">Director:</span>
                                    <span className="text-slate-400">{Director}</span>
                                </p>
                                <p className="text-xs font-bold tracking-wide">
                                    <span className="text-slate-100 uppercase mr-2">Starring:</span>
                                    <span className="text-slate-400">{Actors}</span>
                                </p>
                            </div>

                            <p className="mt-6 text-slate-400 text-sm leading-relaxed line-clamp-3 md:line-clamp-4 italic">
                                "{Plot}"
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-800">
                            <p className="text-xs font-bold tracking-wide">
                                <span className="text-slate-100 uppercase mr-2">Awards:</span>
                                <span className="text-slate-400">{Awards}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MovieDetails;