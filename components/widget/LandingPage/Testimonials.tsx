'use client';
import Image from 'next/image';
import React, { useState, useReducer, useRef, useCallback } from 'react';
import leftArrow from '/public/assets/swipe-left-icon.svg';
import rightArrow from '/public/assets/swipe-right-icon.svg';
import testimonialImage from '/public/assets/testimonial-image.webp';


import { A11y, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const testimonials = [
    {
        image: testimonialImage,
        name: 'Mrs. Chiamaka Edozie',
        testimonial: `I couldn't be happier with the service delivery.
        Got my son's medication and everything was
        well packaged and sealed.`,
        posted: '2 days ago'
    },
    {
        image: testimonialImage,
        name: 'Mr Livinus Umeh',
        testimonial: `Pharmabolt has been a lifesaver for my family. 
        Their team is responsive, and the medications are always 
        in perfect condition. I trust them for all our health 
        requirements`,
        posted: '1 year ago'
    },
    {
        image: testimonialImage,
        name: 'Miss Joyce Gift',
        testimonial: `Exceptional service! I received my order promptly, 
        and the quality of the products exceeded my expectations. 
        Pharmabolt is my go-to choice for healthcare needs.`,
        posted: '4 months ago'
    },
    {
        image: testimonialImage,
        name: 'Dr. Frank Roberts',
        testimonial: `As a healthcare professional, I demand 
        the best for my patients. Pharmabolt consistently 
        delivers top-notch service. Their attention to detail 
        in packaging and quality assurance is commendable.`,
        posted: '1 month ago'
    }
]

const Testimonials = () => {
    const swiper = useSwiper();
    const swiperRef: any = useRef(null);


    const slidePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const slideNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    return (
        <section className='border-t pt-10 mt-32 md:mt-40'>
            <div className='md:w-1/2 w-5/6 mx-auto text-center'>
                <h3 className='text-2xl font-bold'>
                    Enjoy and benefit from true care
                    and great service delivery with <span className='text-primary'> no boundaries. </span>
                </h3>
                <p className='text-sm mt-2'>
                    Read some of our customer reviews and feedback.
                </p>
            </div>

            <div className='mt-10 mx-auto w-full'>

                <div className='grid grid-cols-6 gap-x-10'>
                    <div style={{ background: "#f2f9ff" }} className='rounded-2xl flex justify-end'>
                        <button onClick={slidePrev}>
                            <Image src={leftArrow} alt="left swipe icon" />
                        </button>
                    </div>

                    <div className='col-span-4'>
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={30}
                            slidesPerView={1}
                        >
                            {
                                testimonials.map((item) => (
                                    <SwiperSlide key={item.name}>
                                        <div className=' border-4 p-1 rounded-2xl border-dashed '>
                                            <div
                                                style={{ background: "#008bff" }}
                                                className="text-white py-10 px-8 flex 
                                            justify-between items-center space-x-10 rounded-2xl"
                                            >
                                                <div>
                                                    <Image src={item.image} alt="Profile of testimonial" />
                                                </div>

                                                <div>
                                                    <div className='flex justify-between items-end'>
                                                        <h3 className='text-2xl font-bold'> {item.name} </h3>
                                                        <p className='text-xs'> {item.posted} </p>
                                                    </div>

                                                    <p className='pt-2 text-xl'>
                                                        {item.testimonial}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                ))
                            }                            
                        </Swiper>
                    </div>

                    <div style={{ background: "#f2f9ff" }} className='rounded-2xl flex justify-start'>
                        <button onClick={slideNext}>
                            <Image src={rightArrow} alt="right swipe icon" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonials