import React from 'react';
import reactImg from "../assets/react.svg"
const Loading = () => {
    return (
        <div className='grid grid-cols-1 place-items-center h-lvh'>
            <img src={reactImg} className='h-30 animate-spin'/>
        </div>
    );
};

export default Loading;