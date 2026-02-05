import React from 'react';

const About = () => {
    // Array to keep the code clean and manageable
    const placeholders = [1, 2, 3, 4];

    return (
        <div className='min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500/30'>
            {/* Header Section */}
            <header className="relative min-h-[60vh] md:h-[70vh] flex items-center px-6 md:px-10 overflow-hidden border-b border-slate-800">
                
                {/* Background Glow - Adjusted size for mobile */}
                <div className="absolute top-[-5%] right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-indigo-600/20 blur-[80px] md:blur-[120px] rounded-full"></div>
                
                <div className="w-full max-w-7xl mx-auto py-12">
                    {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
                        {placeholders.map((item) => (
                            <div 
                                key={item} 
                                className='group relative h-64 md:h-80 w-full border rounded-xl border-slate-800 bg-slate-900/40 flex justify-center items-center text-slate-500 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/60'
                            >
                                {/* Subtle hover effect inside the card */}
                                <span className="group-hover:text-indigo-400 transition-colors font-medium tracking-wide">
                                    Coming soon...
                                </span>
                                
                                {/* Inner glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/5 to-transparent rounded-xl pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </header>
            
            {/* Content Section placeholder to show responsiveness */}
            <section className="px-6 md:px-10 py-20 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 italic tracking-tight">
                    OUR <span className="text-indigo-500">STORY</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                    We are dedicated to exploring the intersection of technology and cinema. 
                    This space is currently being built to bring you the best movie data 
                    with a seamless user experience.
                </p>
            </section>
        </div>
    );
};

export default About;