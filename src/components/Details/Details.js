import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Details = ({ques}) => {

    const {options, question, correctAnswer} =ques;
    console.log(ques)
    const [ansBtn, setAnsBtn] = useState([]);
    const handleBtn = () => {
        setAnsBtn(<h1 className='bg-gray-500 text-white py-3 w-5/6 lg:w-3/6 mx-auto mt-12 rounded'>correct Answer: <span className='font-bold'>{correctAnswer}</span></h1>)
    }

    return (
        <div className='shadow-lg bg-gray-200 p-4 my-8'>
            <div className='flex justify-between mx-3 lg:mx-20'>
                <h1 className='text-1xl lg:text-2xl font-semibold mb-6'>{question}</h1>
                <EyeIcon onClick={() => handleBtn()} className="h-6 w-6 text-gray-800"/>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-5/6 mx-auto'>
                <div className='flex w-5/6 mx-auto'>
                    <input type="radio" name="radio" className="radio radio-secondary"/>
                    <p className='ml-4'>{options[0]}</p> 
                </div>

                <div className='flex w-5/6 mx-auto'>
                    <input type="radio" name="radio" className="radio radio-secondary"/>
                    <p className='ml-4'>{options[1]}</p> 
                </div>

                <div className='flex w-5/6 mx-auto'>
                    <input type="radio" name="radio" className="radio radio-secondary"/>
                    <p className='ml-4'>{options[2]}</p> 
                </div> 

                <div className='flex w-5/6 mx-auto'>
                    <input type="radio" name="radio" className="radio radio-secondary"/>
                    <p className='ml-4'>{options[3]}</p> 
                </div> 
            </div>

            {ansBtn}
        </div>
    );
};

export default Details;