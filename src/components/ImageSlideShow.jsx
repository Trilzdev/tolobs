import React, { useState, useEffect } from 'react';
import image1 from '../../public/ship-our_company.png';
import image4 from '../../public/contact_ship.png';
import image3 from '../../public/ship-careers.png';
import image2 from '../../public/shipping-depot.jpg';

const ImageSlideShow = () => {
    const imageList = [image1, image2, image3, image4];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            data-aos='fade-up'
            className='w-full aspect-[16/8.5] z-40 overflow-hidden relative box bg-[#286189]'

        >
            {
                currentImage === 0 && (
                    <img
                        src={imageList[0]}
                        alt=""
                        className='w-full appear_two'
                        style={{ opacity: 1 }}
                    />
                )
            }
            {
                currentImage === 1 && (
                    <img
                        src={imageList[1]}
                        alt=""
                        className='w-full appear_two'
                        style={{ opacity: 1 }}
                    />
                )
            }
            {
                currentImage === 2 && (
                    <img
                        src={imageList[2]}
                        alt=""
                        className='w-full appear_two'
                        style={{ opacity: 1 }}
                    />
                )
            }
            {
                currentImage === 3 && (
                    <img
                        src={imageList[3]}
                        alt=""
                        className='w-full appear_two'
                        style={{ opacity: 1 }}
                    />
                )
            }
        </div>
    );
};

export default ImageSlideShow;
