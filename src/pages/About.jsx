import React from 'react';

const About = () => {
    const techStack = [
        { name: "React 19", category: "Frontend", description: "Component-based UI library for building user interfaces" },
        { name: "Vite", category: "Build Tool", description: "Fast development server & bundler for modern web projects" },
        { name: "Tailwind CSS", category: "Styling", description: "Utility-first CSS framework for rapid UI development" },
        { name: "React Router", category: "Navigation", description: "Standard library for routing in React" },
        { name: "Axios", category: "Data Fetching", description: "Promise-based HTTP client for the browser and node.js" },
        { name: "Fetch API", category: "Data Fetching", description: "Native JavaScript interface for accessing and manipulating HTTP pipeline" },
    ];

    return (
        <div className='min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500/30'>
            {/* Header Section */}
            <div className="relative py-20 px-6 md:px-10 overflow-hidden border-b border-slate-800">
                
                {/* Background Glow */}
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="w-full max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        About <span className="text-indigo-500">Explore Cinema</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                        Welcome to Explore Cinema! This application was built as part of my journey to master React and modern web development technologies. It serves as a practical playground where I've implemented various concepts while learning.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-200">
                        Tech Stack & Tools Used
                    </h2>

                    {/* Tech Stack Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                        {techStack.map((tech) => (
                            <div 
                                key={tech.name} 
                                className='group relative p-6 border rounded-xl border-slate-800 bg-slate-900/40 hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all duration-300'
                            >
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                    {tech.name}
                                </h3>
                                <div className="text-xs uppercase tracking-wider text-indigo-500/80 mb-3 font-semibold">
                                    {tech.category}
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {tech.description}
                                </p>
                                
                                {/* Inner glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/5 to-transparent rounded-xl pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Learning Journey Section */}
            <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 italic tracking-tight">
                        My <span className="text-indigo-500">Learning Journey</span>
                    </h2>
                    <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                        <p>
                            Building this application has been an incredible learning experience. I've dived deep into the React ecosystem, understanding how to manage state, handle side effects, and create reusable components.
                        </p>
                        <p>
                            Throughout this project, I explored different ways to fetch data, comparing libraries like <strong>Axios</strong> with the native <strong>Fetch API</strong> to understand their differences and use cases. Implementing <strong>React Router</strong> helped me grasp the concepts of single-page application (SPA) navigation and routing.
                        </p>
                        <p>
                            Styling with <strong>Tailwind CSS</strong> allowed me to rapidly draft and refine the UI, ensuring a responsive design that looks great on all devices, from mobile phones to desktops.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;