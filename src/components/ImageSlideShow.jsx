import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../public/contact_ship.png'
import image2 from '../../public/ship-our_company.png'
import image3 from '../../public/shipping-depot.jpg'
import image4 from '../../public/ship-careers.png'
const imageList = [image1,image2,image3,image4]
const ImageSlideShow = () => {
  var settings = {
    arrows:false,
    dots:true,
    speed:900,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 3,
    centerMode:true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container" data-aos="fade-up">
      <Slider {...settings}>
        {
            imageList.map((image)=>{
                return(
                    <div className="   px-1 w-[900px] aspect-[16/8.5]  overflow-hidden max-md:w-full ">
                        <img src={image} className=" w-full " alt="ks;d" />
                    </div>
                )
            })
        }
      </Slider>
    </div>
  );
}

export default ImageSlideShow;