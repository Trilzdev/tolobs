import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Loader from './Loader';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xleqdwjo");

    if (state.succeeded) {
        return (
        <div className="text-xl max-sm:text-base w-[450px] max-sm:w-auto ">
        <p className="flex items-center">
          <AiOutlineCheckCircle className="mr-2 " /> Mail sent successfully! We'll get back to you soon.
        </p>
      </div>)
    }

    return (
        <form className='text-xl max-sm:text-base w-[450px] max-sm:w-auto flex flex-col gap-4 mt-10 max-sm:mt-2' onSubmit={handleSubmit}>
            <div className='w-full flex flex-col gap-1' >
                <label className='text-neutral-200' htmlFor='full-name'>Full Name:</label>
                <input type="text" id='full-name' name='full-name' className='block w-full p-2 inputbg text-neutral-300' />
                <ValidationError prefix="Full Name" field="full-name" errors={state.errors} />

                <label className='text-neutral-200' htmlFor='email'>Email:</label>
                <input type="text" id='email' name='email' className='block w-full p-2 inputbg text-neutral-300' />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label className='text-neutral-200' htmlFor='phone-number'>Phone Number:</label>
                <input type="number" id='phone-number' name='phone-number' className='block w-full p-2 inputbg text-neutral-300' />
                <ValidationError prefix="Phone Number" field="phone-number" errors={state.errors} />

                <label className='text-neutral-200' htmlFor='message'>Message:</label>
                <textarea id='message' name='message' className='block w-full p-2 inputbg text-neutral-300 resize-none' rows={10}></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />

            </div>
            <button
                type="submit"
                className={` self-end bg-yellow-400 text-neutral-500 duration-200 ease-in-out w-36 px-6 py-2 text-2xl max-md:text-xl max-sm:text-base ${state.submitting ? 'bg-yellow-400' : 'hover:bg-yellow-500 active:bg-yellow-600 '}`} disabled={state.submitting}
            >
                {state.submitting ? <Loader /> : "SUBMIT"}
            </button>
        </form>
    );
}

export default ContactForm;
