import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
   const chart = useLoaderData();
   console.log(chart.data)
   const data = chart.data;
    return (
        <div className='m-2 p-8 bg-gray-200'>
            <LineChart className='w-full mx-auto' width={350} height={400} data={data}>
                <Line type='monotone' dataKey='total' stroke='#82ca9d'></Line>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis dataKey=''></YAxis>
                    <Tooltip></Tooltip>
           </LineChart>
           <h1 className='bg-gray-300 mt-6 p-2 font-bold w-3/6 mx-auto'>All topic Quiz Chart</h1>
        </div>
    );
};

export default Statistics;