import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl w-5/6 mx-auto p-6 bg-gray-200 my-4'>Blogs</h1>
            <div className='grid grid-cols-3 gap-8 w-5/6 mx-auto text-left p-4'>
                <div className='bg-gray-200 p-4 rounded'>
                <h1 className='text-2xl font-semibold mb-3'>What is the purpose of react router?</h1>
                <p>Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>

                <div className='bg-gray-200 p-4 rounded'>
                <h1 className='text-2xl font-semibold mb-3'>How does context api works?</h1>
                <p>Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.</p>
                </div>

                <div className='bg-gray-200 p-4 rounded'>
                <h1 className='text-2xl font-semibold mb-3'>What is useRef?</h1>
                <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;