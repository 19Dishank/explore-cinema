import React from 'react';
import { Form } from 'react-router-dom';

export const contactData = async ({ request }) => {
    try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
const Contact = () => {

    return (
        <div className='h-full py-15 flex flex-row justify-center items-center  text-black bg-slate-950  '>
            <div className=''> 
                <div className='border border-fuchsia-700 px-4 py-2 rounded-lg h-105 w-100  bg-transparent shadow-lg shadow-indigo-800/50'>
                <div className='text-3xl font-bold text-indigo-400 uppercase text-center py-5'>
                    Contact Form
                </div>
                <div>
                    <Form method='POST' action='/contact'>
                        <div className='py-1.5 px-6'>
                            <input type="text"
                                placeholder='Username'
                                name="username"
                                id='username'
                                className=' text-slate-200 border rounded-lg border-slate-100 px-4 py-2 w-full placeholder:text-slate-400'
                                required
                                autoComplete='off' />
                        </div>
                        <div className='py-1.5 px-6'>
                            <input type="email"
                                placeholder='Email'
                                name="email"
                                id='email'
                                className=' text-slate-200 border rounded-lg border-slate-100 px-4 py-2 w-full placeholder:text-slate-400'
                                required
                                autoComplete='off' />
                        </div>
                        <div className='py-1.5 px-6'>
                            <textarea
                                placeholder='Message'
                                name="message"
                                id='message'
                                className='text-slate-200 border rounded-lg h-35 border-slate-100 px-4 py-2 w-full placeholder:text-slate-400'
                                required />
                        </div>
                        <div className='py-1.5 px-6'>
                            <button
                                className='border rounded-lg border-indigo-500 w-full px-4 py-2 text-white hover:bg-indigo-700 '
                            >Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Contact;