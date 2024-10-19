import React, { useState, useEffect } from 'react'
import { RiAiGenerate } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeStyle = "text-lime-500 font-bold";
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location]);

    const handleNavLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className='h-24 w-full bg-gradient-to-r from-lime-200 via-lime-100 to-emerald-200 flex justify-between items-center px-4 md:px-8 sticky top-0 z-50'>
            <div className="logo">
                <NavLink to="/" onClick={handleNavLinkClick}>
                    <img src="../../assets/Images/Logo.png" className='w-28 md:w-36 hover:opacity-80 transition-opacity duration-300' alt="Logo" />
                </NavLink>
            </div>
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-700 focus:outline-none hover:text-lime-700 transition-colors duration-300">
                    <svg className={`h-6 w-6 fill-current transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} viewBox="0 0 24 24">
                        {isOpen ? (
                            <path
                                className="transition-opacity duration-300"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                            />
                        ) : (
                            <path
                                className="transition-opacity duration-300"
                                fillRule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        )}
                    </svg>
                </button>
            </div>
            <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-24 md:top-0 left-0 right-0 bg-lime-200 md:bg-transparent py-4 md:py-0 items-center gap-4 md:gap-8 text-zinc-700 font-medium`}>
                <li>
                    <NavLink to="/" className={({ isActive }) => `block  w-full md:w-auto text-center py-2 md:py-0 hover:text-lime-700 transition-colors duration-300 ${isActive ? activeStyle : ''}`} onClick={handleNavLinkClick}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/generate-password" className={({ isActive }) => `block w-full md:w-auto text-center py-2 md:py-0 hover:text-lime-700 transition-colors duration-300 ${isActive ? activeStyle : ''}`} onClick={handleNavLinkClick}>
                        <span className='flex items-center justify-center md:justify-start gap-1 whitespace-nowrap'><RiAiGenerate /> Generate Passwords</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-passwords" className={({ isActive }) => `block w-full md:w-auto text-center py-2 md:py-0 hover:text-lime-700 transition-colors duration-300 ${isActive ? activeStyle : ''}`} onClick={handleNavLinkClick}>
                        My Passwords
                    </NavLink>
                </li>
                <li className="md:hidden lg:block">
                    <NavLink to="/about-us" className={({ isActive }) => `block w-full md:w-auto text-center py-2 md:py-0 hover:text-lime-700 transition-colors duration-300 ${isActive ? activeStyle : ''}`} onClick={handleNavLinkClick}>
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => `block w-full md:w-auto text-center py-2 md:py-0 ${isActive ? activeStyle : ''}`} onClick={handleNavLinkClick}>
                        <button className='rounded-xl bg-emerald-500 py-3 px-10 text-white w-full md:w-auto hover:bg-emerald-600 hover:outline hover:outline-2 hover:outline-emerald-700 transition-all duration-300 transform hover:scale-105'>Login</button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar