import React from 'react';
import Img from '../../bg.jpg';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 w-5/6 mx-auto my-8'>
                <div>
                    <img className='h-92' src={Img} alt="" />
                </div>
                <div className='text-left p-4 my-24'>
                    <h1 className='text-2xl'>Test & Grow</h1>
                    <p className='text-3xl'>Attempt Tests & develop your Skills!!!</p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 w-5/6 my-20 mx-auto gap-8'>
            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
            </div>
        </div>
    );
};

export default Home;