import React from 'react';
import { Link } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/24/solid'

const NavBarMenu = ({ showMenu, active }) => {
    return (
        <ul className={active ? 'flex flex-col items-center inset-0 top-20 bg-black/10 backdrop-blur-lg text-orange-600 font-bold fixed lg:hidden md:hidden' : 'hidden'}>
            <XCircleIcon onClick={showMenu} className='text-orange-600 h-8 w-8'></XCircleIcon>
            <li className='border-2 border-gray-300 rounded-2xl w-full'><Link to="/home">Topics</Link></li>
            <li className='border-2 border-gray-300 rounded-2xl w-full'><Link to="/statistics">Statistics</Link></li>
            <li className='border-2 border-gray-300 rounded-2xl w-full'><Link to="/blog">Blog</Link></li>
        </ul>
    );
};

export default NavBarMenu;