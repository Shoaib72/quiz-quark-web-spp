import React from 'react';

const Questions = ({ quizQuestion }) => {
    const options = quizQuestion.options;
    console.log(quizQuestion)
    return (
        <div>
            <h1 className='text-2xl text-bold mt-8 sm:ml=5 sm:mr-5'>{quizQuestion.question}</h1>
            {
                options.map(option => <div className='border-2 md:w-1/2 ml-10 mr-20 md:ml-80 mt-5 rounded-lg p-8 hover:bg-slate-500 text-xl text-bold mb-10'>{option}</div>)
            }
        </div>
    );
};

export default Questions;