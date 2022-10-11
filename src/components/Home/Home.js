import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import bg from './../Assets/bg.jpeg'

const Home = () => {
    const quizTopicsData = useLoaderData();
    const quizTopics = quizTopicsData.data;
    return (
        <div>
            <div className='mr-10 ml-10 mt-28 md:mt-10  border-white-300 mb-24'>
                <img className='h-96 rounded-lg w-full object-cover' src={bg} alt="" />
            </div>

            {
                quizTopics.map(quizTopic => <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>)
            }
        </div>
    );
};

export default Home;