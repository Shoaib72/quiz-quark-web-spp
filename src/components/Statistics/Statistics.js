import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const dataForChartData = useLoaderData();
    const data = dataForChartData.data;
    console.log(data)
    return (
        <div className='mt-36 mr-8 p-10 md:mt-5'>
            <div className='flex flex-col md:flex-row mx-20 justify-center items-center gap-4'>
                <LineChart width={500}
                    height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
                <div>
                    <p>A simple line chart is plotted with only a single line. A simple line chart shows the relationship between two different variables; for example, here we have shown our "Total Question" and "Quiz Topic Name" data loaded from API.</p>
                </div>

            </div>
        </div>
    );
};

export default Statistics;