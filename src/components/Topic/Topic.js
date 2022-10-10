import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {logo, name, id} = topic;
    return (
        <div className='p-4 shadow-lg bg-gray-200 h-80'>
            <img className='h-40 w-52 mx-auto' src={logo} alt="" />
            <h1 className='text-2xl font-semibold mt-4'>{name}</h1>
            <button className='font-bold bg-gray-300 hover:bg-gray-400 w-2/4 py-2 my-3 rounded'><Link to={`/topic/${id}`}>Start</Link></button>
        </div>
    );
};

export default Topic;