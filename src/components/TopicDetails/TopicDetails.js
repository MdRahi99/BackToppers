import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const TopicDetails = () => {
    const topic = useLoaderData();

    return (
        <div>
            <h1 className='text-3xl p-4 mt-6'>Selected Topic: <span className='font-semibold text-4xl'>{topic.data.name}</span></h1>
            <p className='text-2xl'>Total Questions: {topic.data.total}</p>

            <div className='shadow-md bg-gray-100 p-4 w-5/6 mx-auto my-12'>
                <p className='font-semibold text-2xl'>Select correct answers:</p>
            {
                topic.data.questions.map(question => <Details
                    key={question.id}
                    question={question}
                ></Details>)
            }
            </div>
        </div>
    );
};

export default TopicDetails;