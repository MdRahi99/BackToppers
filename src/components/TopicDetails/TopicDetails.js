import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const TopicDetails = () => {
    const topic = useLoaderData();
    const quiz = topic.data;
    const {questions} = quiz;

    return (
        <div>
            <h1 className='text-3xl p-4 mt-6'>Selected Topic: <span className='font-semibold text-4xl'>{quiz.name}</span></h1>
            <p className='text-2xl'>Total Questions: {quiz.total}</p>

            <div className='shadow-md bg-gray-100 p-4 w-5/6 mx-auto my-12'>
                <p className='font-semibold text-2xl'>Select correct answers:</p>
                {
                questions.map(ques => <Details
                    key={ques.id}
                    ques={ques}
                ></Details>)
                }
            </div>
        </div>
    );
};

export default TopicDetails;