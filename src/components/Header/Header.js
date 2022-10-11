import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full flex'>
            <div>
                <h1 className='text-4xl font-bold'>Quiz<span className='text-orange-600'>Q</span>uark</h1>
            </div>
            <nav>
                <ul>
                    <li><Link>Topics</Link></li>
                    <li><Link>Statistics</Link></li>
                    <li><Link>Blog</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;