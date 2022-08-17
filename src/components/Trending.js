import React from 'react'
import Slider from "react-slick"
import './trending.css'

const Trending = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:5000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
        <>

                <div className='container-fluid shadow-lg mt-5 mb-3 py-5'>
                    <Slider {...settings}>
                        <div>
                            <img src='/images/Card_Images/1.jpg' alt='' className='img-fluid custom-slide' />
                        </div>
                        <div>
                            <img src='/images/Card_Images/2.jpg' alt='' className='img-fluid custom-slide' />
                        </div>
                        <div>
                            <img src='/images/Card_Images/3.jpg' alt='' className='img-fluid custom-slide' />
                        </div>
                        <div>
                            <img src='/images/Card_Images/4.jpg' alt='' className='img-fluid custom-slide' />
                        </div>
                        <div>
                            <img src='/images/Card_Images/5.jpg' alt='' className='img-fluid custom-slide' />
                        </div>
                        <div>
                            <img src='/images/Card_Images/3.jpg' alt='' className='img-fluid custom-slide' />
                        </div>
                        <div>
                            <img src='/images/Card_Images/1.jpg' alt='' className='img-fluid custom-slide' />
                        </div>
                        <div>
                            <img src='/images/Card_Images/5.jpg' alt='' className='img-fluid custom-slide' />
                        </div>
                    </Slider>
                </div>

        </>
    )
}

export default Trending
