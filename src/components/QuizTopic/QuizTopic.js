import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const QuizTopic = ({ quizTopic }) => {
    const { id, name, logo, total } = quizTopic;
    return (

        <div className='md:flex md:flex-row md:justify-evenly md:mx-[150px]'>
            <div className='flex flex-col md:flex-row md:gap-[50px] justify-center items-center mb-5 md:mb-8 w-80 md:w-screen rounded-xl ml-[65px] md:rounded-xl md:py-3 md:ml-[-2px] bg-orange-600 md:bg-orange-600 md:hover:bg-red-400'>

                <img className='h-64 w-64 rounded-lg' src={logo} alt="" />

                <div className='md:flex md:flex-row md:justify-center md:items-center'>
                    <h2 className='text-xl md:text-4xl text-cyan-900 font-bold'>{name}</h2>
                    <h3 className=' md:ml-[30px]'>Total Questions: {total}</h3>
                    <button className='flex justify-evenly items-center md:ml-8 ml-2 mt-3 p-2 border-2 border-lime-700 bg-lime-600 rounded-2xl mb-5 md:hover:bg-gray-300 hover:bg-gray-300'>
                        <Link to={`/home/${id}`}>Start Quiz</Link>
                        <ArrowSmallRightIcon className='h-4 w-4 ml-2'></ArrowSmallRightIcon>
                    </button>

                </div>
            </div>
        </div>

    );
};

export default QuizTopic;