"use client";
import Head from "next/head";
import Image from "next/image";
import Axiosrequest from "@/utils/Axiosrequest";
import React, { useRef, useState, useEffect } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/swiper-bundle.css";

import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.css';

// // Install Swiper modules\

export function Ratingsection({ sheetdata }: any) {
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides

  const [slides, setSlides] = useState(
    Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`)
  );

  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const updateNavigationButtons = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  const HandlefetchRate = async () => {
    try {
      const res = await Axiosrequest.get(
        `${process.env.NEXT_PUBLIC_RATESHEET}`
      );
      if (res.status === 200) {
        console.log(res.data);
      }
      console.log(res.status);
    } catch (error) {}
  };
  useEffect(() => {
    HandlefetchRate();
  });

  return (
    <>
      <div className="  w-full lg:px-8 px-2">
        <div>
          <h4 className="text-[17px] font-[600] text-white mb-[30px] lg:text-start text-center">
            Recommendations
          </h4>
        </div>
        <div className="  ">
          {/* <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
     
       breakpoints={{
        768:{
          slidesPerView: 0,
          spaceBetween:8
        }
       }}

        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index} className="w-[377px] ">
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper> */}

          <div className=" w-full  ">
            <Swiper
              modules={[Virtual, Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1400}
              spaceBetween={20}
              slidesPerView={1}
              ref={swiperRef}
              onSlideChange={updateNavigationButtons}
              virtual
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              // navigation
              // pagination={{ clickable: true }}
              className=" py-6"
            >
              {/* testimonial */}
              {slides.map((slideContent, index) => (
                <SwiperSlide
                  key={slideContent}
                  virtualIndex={index}
                  className=" "
                >
                  <div className="relative p-[30px] bg-[#2D2D39]">
                    {/* testimonial body */}
                    <div className="testimonial-body">
                      {/* photo */}
                      <img
                        className="absolute object-cover w-[65px] h-[65px] rounded-full right-[30px] top-[-15px] shadow-md"
                        src="https://miller.bslthemes.com/arter-demo/img/testimonials/face-1.jpg"
                        alt="face"
                      />
                      {/* name */}
                      <h5 className="text-[14px] font-[600] text-[#fafafc]">
                        Paul Trueman
                      </h5>
                      <div className="mb-[15px] text-[#646466] text-[11px] italic mt-[5px]">
                        Template author
                      </div>
                      {/* text */}
                      <div className="mb-[15px] text-[13.5px]">
                        Working with Artur has been a pleasure. Better yet - I
                        alerted them of a minor issue before going to sleep. The
                        issue was fixed the next morning. I couldnt ask for
                        better support. Thank you Artur! This is easily a 5 star
                        freelancer.
                      </div>
                    </div>
                    {/* testimonial body end */}
                    {/* testimonial footer */}
                    <div className="relative overflow-hidden flex justify-between">
                      <div className="">
                        {/* star rate */}
                        <ul className="flex bg-[#20202a] mt-[5px] text-[15px] rounded-[30px] text-[#FFC107] py-[5px] px-[15px]">
                          <li className="mr-[5px]">
                            <FaStar className="font-[900]" />
                          </li>
                          <li className="mr-[5px]">
                            <FaStar className="font-[900]" />
                          </li>
                          <li className="mr-[5px]">
                            <FaStar className="font-[900]" />
                          </li>
                          <li className="mr-[5px]">
                            <FaStar className="font-[900]" />
                          </li>
                          <li className="mr-[5px]">
                            <FaStar className="font-[900]" />
                          </li>
                        </ul>
                        {/* star rate end */}
                      </div>
                      <div className="art-right-side"></div>
                    </div>
                    {/* testimonial footer end */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* testimonial end */}

            {/* Add more SwiperSlides for additional testimonials */}
          </div>

          <div className="">
            {/* slider navigation */}
            <div className="pt-[15px] flex justify-between">
              {/* left side */}
              <div className="art-sn-left">
                {/* slider pagination */}
                <div className="absolute text-center transition-opacity duration-300 transform translate-x-0 translate-y-0 translate-z-0">
                  <span
                    className="mr-[10px] bg-[#8c8c8e] opacity-[0.5] h-[4px]"
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 1"
                  />
                  <span
                    className="w-[20px] bg-[#FFC107]"
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 2"
                  />
                  <span
                    className="mr-[10px] bg-[#8c8c8e] opacitiy-[0.5] h-[4px]"
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 3"
                  />
                </div>
              </div>
              {/* left side end */}
              {/* right side */}
              <div className="art-sn-right">
                {/* slider navigation */}
                <div className="flex gap-2">
                  {/* prev */}
                  <div
                    className={`art-slider-nav art-testi-swiper-prev ${
                      isBeginning
                        ? "text-[#35353D] cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    onClick={handlePrevSlide}
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                    aria-disabled={isBeginning}
                  >
                    <FaChevronLeft />
                    <i className="fas fa-chevron-left" />
                  </div>
                  {/* next */}
                  <div
                    className={`art-slider-nav art-testi-swiper-next ${
                      isEnd
                        ? "text-[#35353D] cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                    aria-disabled={isEnd}
                    onClick={handleNextSlide}
                  >
                    <FaChevronRight />
                  </div>
                </div>
                {/* slider navigation */}
              </div>
              {/* right side end */}
            </div>
            {/* slider navigation end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ratingsection;
