import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='min-h-screen bg-slate-950 text-white font-sans'>
            
          
            <header className="relative h-[60vh] flex items-center px-10 overflow-hidden border-b border-slate-800">
               
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
                
                <div className="relative z-10 max-w-4xl">
                    <span className="text-indigo-400 font-black tracking-[0.3em] uppercase text-sm mb-4 block">
                        Now Streaming
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.9] tracking-tighter mb-6">
                        Explore <br /> 
                        <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>Cinema</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-md border-l-2 border-indigo-500 pl-6 italic">
                        Discover the latest blockbusters and hidden gems. Your next favorite story is just a click away.
                    </p>
                </div>
            </header>

          
            

            
            
        </div>
    );
};

export default Home;