import React from 'react';

const About = () => {
    return (
        <div className='min-h-screen bg-slate-950 text-white font-sans'>


            <header className="relative h-[60vh] flex items-center px-10 overflow-hidden border-b border-slate-800">

                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full">

                </div>
                <div className='grid grid-cols-4  gap-5  w-full'>

                    <div className='h-80 w-50 border rounded-md border-slate-700 flex flex-row justify-center items-center text-slate-500'>
                        <span>Coming soon...</span>
                    </div>
                    <div className='h-80 w-50 border rounded-md border-slate-700 flex flex-row justify-center items-center text-slate-500'>
                        <span>Coming soon...</span>
                    </div>
                    <div className='h-80 w-50 border rounded-md border-slate-700 flex flex-row justify-center items-center text-slate-500'>
                        <span>Coming soon...</span>
                    </div>
                    <div className='h-80 w-50 border rounded-md border-slate-700 flex flex-row justify-center items-center text-slate-500'>
                        <span>Coming soon...</span>
                    </div>
                </div>
                
            </header>
        </div>
    );
};

export default About;