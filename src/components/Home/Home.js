import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quizTopicsData = useLoaderData();
    const quizTopics = quizTopicsData.data;
    return (
        <div>
            <h2>Length {quizTopics.length}</h2>
        </div>
    );
};

export default Home;