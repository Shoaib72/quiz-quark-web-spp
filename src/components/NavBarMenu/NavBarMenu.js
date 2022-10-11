import React from 'react';
import { Link } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/24/solid'

const NavBarMenu = ({ showMenu, active }) => {
    return (
        <div className='absolute'>
            <ul className={active ? 'flex flex-col items-center top-10  text-orange-600 font-bold relative lg:hidden md:hidden right-96' : 'hidden'}>
                <XCircleIcon onClick={showMenu} className='text-orange-600 h-6 w-6'></XCircleIcon>
                <li className='border-2 border-gray-300 rounded-2xl w-full px-48'><Link to="/home">Topics</Link></li>
                <li className='border-2 border-gray-300 rounded-2xl w-full'><Link to="/statistics">Statistics</Link></li>
                <li className='border-2 border-gray-300 rounded-2xl w-full mb-20'><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    );
};

export default NavBarMenu;