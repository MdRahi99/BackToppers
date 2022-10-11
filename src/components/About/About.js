import React from 'react';
import Img from '../../bg.jpg';

const About = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto mt-20">
                <figure><img src={Img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl mt-3">Md Forhad Hossain Rahi</h2>
                    <p className='pb-4'>Learner</p>
                </div>
            </div>
        </div>
    );
};

export default About;