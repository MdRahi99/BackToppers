import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Details = ({ques}) => {

    const {options, question, correctAnswer} =ques;
    console.log(ques)
    const [, setCorrectBtn] = useState([]);
    const [ansBtn, setAnsBtn] = useState([]);

    const handleAns = (e) => {
        if(e.target.value === correctAnswer){
            alert('Correct Answer');
        }
        else{
            alert('Wrong Answer');
        }
        setCorrectBtn(e.target.value);
    }

    const handleBtn = () => {
        setAnsBtn(<h1 className='bg-gray-500 text-white py-3 w-5/6 lg:w-3/6 mx-auto mt-12 rounded'>correct Answer: <span className='font-bold'>{correctAnswer}</span></h1>)
    }

    return (
        <div className='shadow-lg bg-gray-200 p-4 my-8'>
            <div className='flex justify-between mx-3 lg:mx-20'>
                <h1 className='text-1xl lg:text-2xl font-semibold mb-6'>{question}</h1>
                <EyeIcon onClick={() => handleBtn()} className="h-6 w-6 text-gray-800"/>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-4 font-semibold gap-2 w-5/6 mx-auto'>
                <div className='flex w-5/6 mx-auto p-4 bg-gray-300 hover:bg-gray-400 rounded'>
                    <input onClick={handleAns} type="button" name="radio" value={options[0]} className="radio radio-secondary whitespace-normal w-5/6 mx-auto"/>
                </div>

                <div className='flex w-5/6 mx-auto p-4 bg-gray-300 hover:bg-gray-400 rounded'>
                    <input onClick={handleAns} type="button" name="radio" value={options[1]} className="radio radio-secondary whitespace-normal w-5/6 mx-auto"/>
                </div>

                <div className='flex w-5/6 mx-auto p-4 bg-gray-300 hover:bg-gray-400 rounded'>
                    <input onClick={handleAns} type="button" name="radio" value={options[2]} className="radio radio-secondary whitespace-normal w-5/6 mx-auto"/>
                </div> 

                <div className='flex w-5/6 mx-auto p-4 bg-gray-300 hover:bg-gray-400 rounded'>
                    <input onClick={handleAns} type="button" name="radio" value={options[3]} className="radio radio-secondary whitespace-normal w-5/6 mx-auto"/> 
                </div> 
            </div>

            {ansBtn}
        </div>
    );
};

export default Details;