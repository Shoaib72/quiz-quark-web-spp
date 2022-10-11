import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quizTopicsData = useLoaderData();
    const quizTopics = quizTopicsData.data;
    console.log(quizTopics);
    return (
        <div>
            <img></img>
        </div>
    );
};

export default Home;