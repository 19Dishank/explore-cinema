import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const activeLink = ({ isActive }) => {
        return {
            color: isActive ? "purpleoklch(58.5% 0.233 277.117)" : "white",
            textDecoration: isActive ? "underline" : "none"
        }
    }

    // const activeLink = ({ isActive }) => isActive ? "text-purple-500" : "text-black"

    return (
        <div className='grid grid-cols-2 h-15 px-10 place-content-between content-center bg-black'>
            <div className=" text-2xl font-black italic tracking-tighter text-slate-100">
                EXPLORE<span className="text-indigo-500">CINEMA</span>
            </div>
            <div className=''>
                <NavLinks activeLink={activeLink}  />
            </div >
        </div>
    );
};

export default Navbar;

export const NavLinks = (props) => {
    return (
        <div className='gap-5 flex flex-row justify-end  uppercase font-bold text-white'>
            <NavLink className={({ isActive }) => isActive ? "border-indigo-500  border-b px-1 py-1" : "text-white py-1 px-1  ease-in-out duration-100"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "border-indigo-500  border-b px-1 py-1" : "text-white py-1 px-1  ease-in-out duration-100"} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? "border-indigo-500  border-b px-1 py-1" : "text-white py-1 px-1  ease-in-out duration-100"} to="/contact">Contact</NavLink>
            <NavLink className={({ isActive }) => isActive ? "border-indigo-500  border-b px-1 py-1" : "text-white py-1 px-1  ease-in-out duration-100"} to="/movie/fetch">Movie(Fetch)</NavLink>
            <NavLink className={({ isActive }) => isActive ? "border-indigo-500  border-b px-1 py-1" : "text-white py-1 px-1  ease-in-out duration-100"} to="/movie/axios">Movie(Axios)</NavLink>
        </div>
    );
}