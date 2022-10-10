import React from 'react';

const Options = ({option}) => {
    return (
        <div>
           <div className='p-4 shadow-md bg-gray-300'>
            <input type="radio" value={option}/>
            <label className='ml-2'>{option}</label>
           </div>
        </div>
    );
};

export default Options;