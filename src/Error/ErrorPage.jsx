/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full h-[50vh] flex flex-col gap-9 items-center justify-center'>
            <h2 className='text-3xl font-semibold'>Page Not Found</h2>
            <Link to="/"><button className='btn bg-green-600 border text-white hover:text-green-700 hover:border-green-500 bg-transparent'>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;