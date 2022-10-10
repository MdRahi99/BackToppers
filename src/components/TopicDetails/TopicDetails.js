import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const topic = useLoaderData();
    return (
        <div>
            <h1>You are Selected: </h1>
            <p>Select correct answer:</p>
        </div>
    );
};

export default TopicDetails;