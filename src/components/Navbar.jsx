import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: Install lucide-react for icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Dynamic Tailwind classes for NavLinks
    const linkStyles = ({ isActive }) =>
        `transition-all duration-300 px-1 py-1 uppercase font-bold tracking-wide ${isActive
            ? "text-indigo-500 border-b-2 border-indigo-500"
            : "text-slate-300 hover:text-white hover:border-b-2 hover:border-slate-500"
        }`;

    return (
        <nav className="bg-black border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo Section */}
                <div className="text-2xl font-black italic tracking-tighter text-slate-100 shrink-0">
                    EXPLORE<span className="text-indigo-500">CINEMA</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 items-center">
                    <NavLinks linkStyles={linkStyles} />
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-slate-100 focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden bg-zinc-950 border-t border-slate-800 py-6 px-10 transition-all">
                    <div className="flex flex-col gap-6 items-start">
                        <NavLinks linkStyles={linkStyles} onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

export const NavLinks = ({ linkStyles, onClick }) => {
    const routes = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" },
        { path: "/movie/fetch", name: "Fetch" },
        { path: "/movie/axios", name: "Axios" },
    ];

    return (
        <>
            {routes.map((route) => (
                <NavLink
                    key={route.path}
                    to={route.path}
                    className={linkStyles}
                    onClick={onClick}
                >
                    {route.name}
                </NavLink>
            ))}
        </>
    );
};