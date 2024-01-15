import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Loader from './Loader';
const CareerForm = () => {
    const [state, handleSubmit] = useForm("xnqenbjz");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form className='text-xl max-sm:text-base flex flex-col gap-8' onSubmit={handleSubmit}>
            <div className='flex justify-between max-md:flex-col gap-x-4' >
                <div className='w-[470px] max-md:w-auto h-50 flex flex-col justify-between'>
                    <label htmlFor='full-name'>Full Name:</label>
                    <input type="text" name='full-name' id='full-name' className='block w-full p-2' />
                    <ValidationError
                        prefix="Fullname"
                        field="full-name"
                        errors={state.errors}
                    />
                    <label htmlFor='email'>Email:</label>
                    <input type="email" id='email' name='email' className='block w-full p-2' />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor='phone-number'>Phone Number:</label>
                    <input type="number" name='phone-number' id='phone-number' className='block w-full p-2' />
                    <ValidationError
                        prefix="Number"
                        field="phone-number"
                        errors={state.errors}
                    />
                </div>
                <div className='w-[470px] max-md:w-auto'>
                    <label htmlFor='about-yourself' className='h-fit'>About Yourself:</label>
                    <textarea id='about-yourself' name='about-yourself' className='block h-60 w-full resize-none'></textarea>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='self-end'>
                <button href="" className={`border-2 border-yellow-400 text-yellow-400 duration-200 ease-in-out w-36 px-6 py-2 text-2xl max-md:text-xl max-sm:text-base ${state.submitting ? 'bg-yellow-400' : 'hover:bg-yellow-400 hover:text-white '}`} disabled={state.submitting}>
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