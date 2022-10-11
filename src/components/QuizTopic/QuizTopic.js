import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const QuizTopic = ({ quizTopic }) => {
    const { id, name, logo, total } = quizTopic;
    return (
        <div className='flex flex-wrap'>

            <div className='flex flex-col justify-center items-center mb-5 border-2 border-black-700 w-80'>
                <img className='h-64 w-64 rounded-lg' src={logo} alt="" />
                <div>
                    <h2 className='text-xl text-cyan-900 font-bold'>{name}</h2>
                    <h3>Total Questions: {total}</h3>
                    <button className='flex justify-evenly items-center ml-2 mt-3 p-2 border-2 border-lime-700 bg-lime-600 rounded-2xl mb-5'>
                        <Link to={`/home/${id}`}>Start Quiz</Link>
                        <ArrowSmallRightIcon className='h-4 w-4'></ArrowSmallRightIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default QuizTopic;