import React from 'react'
import './Spinner.css';

const Spinner = () => {
    return (
        <div className='flex flex-col items-center mt-32 gap-10'>
            <div className='spinner'></div>
            <p className='text-white text-lg font-semibold'>Loading.... </p>
        </div>
    )
}

export default Spinner