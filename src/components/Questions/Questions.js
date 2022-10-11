import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({ quizQuestion }) => {
    const options = quizQuestion.options;
    console.log(quizQuestion)
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl text-bold mt-8'>{quizQuestion.question}</h1>
                <EyeIcon className='h-5 w-5 mt-5 hover:bg-red-600'></EyeIcon>
            </div>
            {
                options.map(option => <div className='border-2 md:w-1/2 ml-10 mr-20 md:ml-80 mt-5 rounded-lg p-8 hover:bg-slate-500 text-xl text-bold mb-10'>{option}</div>
                )
            }
        </div>
    );
};

export default Questions;