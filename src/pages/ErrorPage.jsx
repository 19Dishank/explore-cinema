import React from 'react';
import { NavLink, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.log(error);
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div className='h-lvh bg-red-400 flex flex-col  justify-center items-center'>
            Opps, {error.status} {error.data}
            <NavLink to="/" className="px-4 py-2 border rounded-md bg-green-600 mt-5">
                Home
            </NavLink>
            <button
                className="px-4 py-2 border rounded-md bg-green-600 mt-5"
                onClick={handleBack}
            >
                Go Back
            </button>

        </div>
    );

};

export default ErrorPage;