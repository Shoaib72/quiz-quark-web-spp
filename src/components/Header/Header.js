import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full h-20 border-stone-500 rounded-lg flex justify-around items-center bg-gray-200'>
            <div>
                <h1 className='text-5xl font-bold'>Quiz<span className='text-orange-600'>Q</span>uark</h1>
            </div>
            <nav>
                <ul className='px-3 py-3 lg:flex md:flex gap-10 text-orange-600 font-bold'>
                    <li><Link to="/home">Topics</Link></li>
                    <li><Link to="/statistics">Statistics</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;