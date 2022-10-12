import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FunnelChart, Funnel, LabelList, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer }
    from 'recharts';

const Statistics = () => {
    const dataForChartData = useLoaderData();
    const data = dataForChartData.data;

    return (
        <div className='sm:flex sm:flex-col sm:justify-center sm:items-center'>
            <div className='mt-36 mr-[120px] ml-[90px] px-10 md:mt-[80px]'>
                <div className='flex flex-col md:flex-row md:gap-[100px] mx-20 justify-center items-center gap-4'>
                    <LineChart width={370}
                        height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    </LineChart>
                    <div className='bg-orange-500 p-10 rounded-lg mb-6'>
                        <p>A simple line chart is plotted with only a single line. A simple line chart shows the relationship between two different variables; for example, here we have shown our "Total Question" and "Quiz Topic Name" data loaded from API.</p>
                    </div>

                </div>
                <h2 className='font-bold text-2xl mt-3 mb-3 md:text-3xl md:font-extrabold'>Figure: Linechart</h2>
                <div className='mt-36 mr-[120px] ml-[90px] px-10 md:mt-[80px]'>
                    <div className='flex flex-col md:flex-row md:gap-[100px] mr-40 mx-20 justify-center items-center gap-4'>
                        <FunnelChart width={370} height={250}>
                            <Tooltip />
                            <Funnel
                                dataKey="total"
                                data={data}
                                isAnimationActive
                            >
                                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                            </Funnel>
                        </FunnelChart>
                        <div className='bg-orange-500 p-10 rounded-lg mb-6'>
                            <p>A funnel chart helps you visualize a linear process that has sequential, connected stages.</p>
                        </div>

                    </div>
                </div>
                <h2 className='font-bold text-2xl mt-3 mb-3 md:text-3xl md:font-extrabold'>Figure: Funnelchart</h2>

            </div>
        </div>
    );

};

export default Statistics;