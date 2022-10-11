import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';


const Quiz = () => {
    const quizDetails = useLoaderData();
    const quiz = quizDetails.data;
    const quizName = quiz.name;
    const quizQuestions = quiz.questions;
    return (
        <div>
            <h1 className='text-3xl text-bold md:mt-10 mt-36'>Quiz Of {quizName}</h1>
            {
                quizQuestions.map(quizQuestion => <Questions key={quizQuestion.id} quizQuestion={quizQuestion}></Questions>)
            }
        </div>
    );
};

export default Quiz;