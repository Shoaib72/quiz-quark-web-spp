import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizDetails = useLoaderData();
    const quiz = quizDetails.data;
    return (
        <div>

        </div>
    );
};

export default Quiz;