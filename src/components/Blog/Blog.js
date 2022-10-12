import React from 'react';

const Blog = () => {
    return (
        <div className='mt-36 md:mt-10'>
            <div className='flex flex-col justify-center items-center mx-20 mb-10'>
                <h1 className='text-3xl text-red-400 mb-5'>What is the purpose of React Router?</h1>
                <p> React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='flex flex-col justify-center items-center mx-20 mb-10'>
                <h1 className='text-3xl text-red-400 mb-5'>How does context API works?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='flex flex-col justify-center items-center mx-20 mb-10'>
                <h1 className='text-3xl text-red-400 mb-5'>What is useRef hook?</h1>
                <p>The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;