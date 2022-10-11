import React from 'react';
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-3 mx-auto my-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-40 h-40 text-red-600'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                </svg>

                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-bold text-8xl text-gray-600'>
                        <span className='sr-only'>Error</span>404
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        Sorry! we couldn't find the page you are looking for.
                    </p>
                    <Link
                        to='/home'
                        className='px-8 py-3 font-semibold rounded bg-cyan-200 text-red-600'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;