import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Loader from './Loader';
const CareerForm = () => {
    const [state, handleSubmit] = useForm("xnqenbjz");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form className='text-xl max-sm:text-base flex flex-col gap-[16px] ' onSubmit={handleSubmit} >
            <div className='flex justify-between max-md:flex-col gap-x-4' >
                <div className='w-[470px] max-md:w-auto h-50 flex flex-col justify-between'>
                    <label className='text-neutral-300' htmlFor='full-name'>Full Name:</label>
                    <input type="text" name='full-name' id='full-name' className='block inputbg w-full p-2 text-neutral-500' />
                    <ValidationError
                        prefix="Fullname"
                        field="full-name"
                        errors={state.errors}
                    />
                    <label className='text-neutral-300' htmlFor='email'>Email:</label>
                    <input type="email" id='email' name='email' className='block inputbg w-full p-2 text-neutral-500' />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label className='text-neutral-300' htmlFor='phone-number'>Phone Number:</label>
                    <input type="number" name='phone-number' id='phone-number' className='block inputbg w-full p-2 text-neutral-500' />
                    <ValidationError
                        prefix="Number"
                        field="phone-number"
                        errors={state.errors}
                    />
                </div>
                <div className='w-[470px] max-md:w-auto'>
                    <label htmlFor='about-yourself' className='h-fit text-neutral-300'>About Yourself:</label>
                    <textarea id='about-yourself' name='about-yourself' className='block bg-neutral-200 h-60 w-full resize-none text-neutral-500 inputbg p-2'></textarea>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='self-end'>
                <button href="" className={`bg-yellow-400 text-neutral-500 hover:bg-yellow-500 duration-200 ease-in-out w-36 px-6 py-2 text-2xl max-md:text-xl max-sm:text-base ${state.submitting ? 'bg-yellow-400' : 'hover:bg-yellow-400 hover:text-neutral-500 active:bg-yellow-600 '}`} disabled={state.submitting}>
                    {
                        state.submitting ?
                            (
                                
                                <Loader />
                            ) :
                            (
                                <>
                                    SUBMIT
                                </>
                            )
                    }
                </button>
            </div>
        </form>
    )
}

export default CareerForm