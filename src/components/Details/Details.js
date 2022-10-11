import React from 'react';
import Options from '../Options/Options';

const Details = ({question}) => {
    return (
        <div className='shadow-lg bg-gray-200 p-4 my-8'>
            <h1 className='text-1xl lg:text-2xl font-semibold mb-6'>{question.question}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 w-4/6 mx-auto'>
            {
                question.options.map(option => <Options
                    key={option.id}
                    option={option}
                ></Options>)
            }
            </div>
        </div>
    );
};

export default Details;