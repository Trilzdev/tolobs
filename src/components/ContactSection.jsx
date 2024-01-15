import React from 'react'
import ContactForm from './ContactForm';


const contactsArray = [
    {
        category: 'Office',
        emails: [
            'info@tolobsmarine.com',
            'info@tolobsmarinegrp.com',
            'legal@tolobsmarine.com',
            'accounts@tolobsmarine.com'
        ]
    },
    {
        category: 'Operation',
        emails: [
            'opsphc@tolobsmarine.com',
            'opsphc@tolobsmarinegrp.com',
            'opswarri@tolobsmarine.com',
            'opswarri@tolobsmarinegrp.com',
            'opscalabar@tolobsmarine.com',
            'opslagos@tolobsmarine.com',
            'opsabuja@tolobsmarine.com',
            'opsbonny@tolobsmarine.com'
        ]
    },
    {
        category: 'Contact',
        emails: [
            'osaki.j.braide@tolobsmarinegrp.com',
            'matthew@tolobsmarinegrp.com',
            'alafa@tolobsmarinegrp.com',
            'silas.j@tolobsmarine.com',
            'biambo@tolobsmarine.com'
        ]
    }
];

const ContactSection = () => {
    return (
        <div className='flex justify-between text-[#286189] px-96 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 max-md:flex-col gap-y-8 gap-x-8 py-8'>
            <div className='flex flex-col gap-8'>

                <div>
                    <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
                        CONTACT US
                    </h1>
                </div>
                <div className='text-xl max-sm:text-base flex flex-col gap-4'>
                    <div className=' flex flex-col gap-8'>
                        <address className=' not-italic'>
                            <h1 className=' font-semibold'>Head Office</h1>
                            <p>198 Bank Anthony Avenue</p>
                            <p>Trans-Amadi Industrial Layout</p>
                            <p>Port Harcourt</p>
                            <p>Rivers State</p>
                            <p>Nigeria</p>
                            <p>Tel: +234(0)84 775 480</p>
                            <p>Email: <a href="mailto:opsphc@tolobsmarine.com">opsphc@tolobsmarine.com</a></p>
                            <p>Inquiry: <a href="mailto:info@tolobsmarine.com">info@tolobsmarine.com</a></p>
                        </address>
                        <address className=' not-italic'>
                            <h1 className=' font-semibold'>Lagos Office</h1>
                            <p>1, Commercial Road,</p>
                            <p>1st Floor Left Wing, Aries Block, Eleganza Plaza,</p>
                            <p>Apapa Lagos- Nigeria.</p>
                            <p>Tel:  +234(0)1 741 9076</p>
                            <p>Email: <a href="mailto:opslagos@tolobsmarine.com">opslagos@tolobsmarine.com</a></p>
                        </address>
                        <div className=' flex flex-col gap-4'>
                            {
                                contactsArray.map((item) => {
                                    return (
                                        <div>
                                            <h1 className='font-semibold'>{item.category} E-mails</h1>
                                            {
                                                item.emails.map((arrayItem) => {
                                                    return (
                                                        <a href={`mailto:${arrayItem}`} className=' block cursor-pointer'>{arrayItem}</a>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm/>
        </div>
    )
}

export default ContactSection