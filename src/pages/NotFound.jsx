import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    return (
        <div className='h-lvh bg-red-400 flex flex-col  justify-center items-center'>
            Opps, {error.status} {error.data}

            
                <NavLink to="/" className="px-4 py-2 border rounded-md bg-green-600 mt-5">
                Home
                </NavLink>
            
        </div>
    );
    
};

export default NotFound;