import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/solid'
import NavBarMenu from '../NavBarMenu/NavBarMenu';

const Header = () => {
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div className='w-full h-20 md:h-36 border-stone-500 rounded-lg flex justify-around items-center bg-gray-200'>
            <div>
                <h1 className='text-6xl font-bold'>Quiz<span className='text-orange-600'>Q</span>uark</h1>
            </div>
            <nav>
                <div className='h-8 w-8 absolute'>
                    <Bars3Icon onClick={showMenu} className='md:hidden relative bottom-2 text-orange-600'></Bars3Icon>
                </div>
                <ul className='hidden ml-8 lg:flex md:flex gap-10 text-orange-600 font-bold'>
                    <li><Link to="/home">Topics</Link></li>
                    <li><Link to="/statistics">Statistics</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
                <NavBarMenu showMenu={showMenu} active={active} />
            </nav>
        </div>
    );
};

export default Header;