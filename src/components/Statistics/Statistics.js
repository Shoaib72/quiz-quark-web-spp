import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const dataForChartData = useLoaderData();
    const dataForChart = dataForChartData.data;
    return (
        <div>
            <h1>Statistics Part</h1>
        </div>
    );
};

export default Statistics;