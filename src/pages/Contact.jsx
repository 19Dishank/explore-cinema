import React from 'react';
import { Form } from 'react-router-dom';

export const contactData = async ({ request }) => {
    try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data);
        return { success: true }; // Actions must return a value
    } catch (error) {
        console.log(error);
        return { error: "Failed to submit" };
    }
}

const Contact = () => {
    return (
        <div className='min-h-[calc(100vh-60px)] py-10 md:py-20 flex flex-col justify-center items-center bg-slate-950 px-4'>
            
            {/* Form Container */}
            <div className='w-full max-w-md'> 
                <div className='border border-fuchsia-700/50 p-2 rounded-2xl bg-slate-900/40 backdrop-blur-sm shadow-2xl shadow-indigo-900/30'>
                    
                    <div className='text-2xl md:text-3xl font-bold text-indigo-400 uppercase text-center py-6 tracking-widest'>
                        Contact <span className='text-white'>Us</span>
                    </div>

                    <Form method='POST' action='/contact' className='space-y-4 pb-6'>
                        <div className='px-4 md:px-6'>
                            <label className='block text-xs font-semibold text-slate-400 uppercase mb-1 ml-1'>Username</label>
                            <input type="text"
                                placeholder='Enter your name'
                                name="username"
                                id='username'
                                className='bg-slate-950/50 text-slate-200 border rounded-xl border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none px-4 py-3 w-full placeholder:text-slate-600 transition-all'
                                required
                                autoComplete='off' />
                        </div>

                        <div className='px-4 md:px-6'>
                            <label className='block text-xs font-semibold text-slate-400 uppercase mb-1 ml-1'>Email Address</label>
                            <input type="email"
                                placeholder='email@example.com'
                                name="email"
                                id='email'
                                className='bg-slate-950/50 text-slate-200 border rounded-xl border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none px-4 py-3 w-full placeholder:text-slate-600 transition-all'
                                required
                                autoComplete='off' />
                        </div>

                        <div className='px-4 md:px-6'>
                            <label className='block text-xs font-semibold text-slate-400 uppercase mb-1 ml-1'>Message</label>
                            <textarea
                                placeholder='How can we help you?'
                                name="message"
                                id='message'
                                className='bg-slate-950/50 text-slate-200 border rounded-xl border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none px-4 py-3 w-full h-32 placeholder:text-slate-600 transition-all resize-none'
                                required />
                        </div>

                        <div className='px-4 md:px-6 pt-2'>
                            <button
                                type="submit"
                                className='bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-xl w-full transition-all active:scale-[0.98] shadow-lg shadow-indigo-600/20'
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </Form>
                </div>
            </div>

            
        </div>
    );
};

export default Contact;