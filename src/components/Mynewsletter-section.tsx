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
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
// import 'swiper/swiper-bundle.css';

// // Install Swiper modules\

export function Mynewslettersection() {

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
  // useEffect(() => {
  //   HandlefetchRate();
  // });

  return (
    <>
      <div className="  w-full lg:px-8 px-2 mt-[45px]">
        <div>
          <h4 className="text-[17px] font-[600] text-white mb-[30px] lg:text-start text-center">
            Newsletter
          </h4>
        </div>
        <div className="  ">
          <div className=" w-full  ">
            <Swiper
              modules={[Virtual, Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              speed={1400}
              spaceBetween={20}
              slidesPerView={1}
              ref={swiperRef}
              onSlideChange={updateNavigationButtons}
              virtual
              breakpoints={{
                1080: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
             
              }}
              className=" py-6"
            >
              {/* testimonial */}
              {slides.map((slideContent, index) => (
                <SwiperSlide
                  key={slideContent}
                  virtualIndex={index}
                  className=" "
                >
                  <div
                    className="lg:w-[280px] w-full mr-[30px]"
                 
                  >
                    {/* blog post card */}
                    <div className=" transform scale-[1] transition ease-in-out mb-0" >
                      {/* post cover */}
                      <a href="#." className="relative pb-[60%] block">
                        {/* img */}
                        <img src="https://miller.bslthemes.com/arter-demo/img/blog/2.jpg" alt="blog post" className="w-full h-full absolute object-cover position-[center] transition ease-in-out" />
                      </a>
                      {/* post cover end */}
                      {/* post description */}
                      <div className="p-[30px] relative bottom-0 bg-[#2C2C37]">
                        {/* title */}
                        <a href="#." className="text-[#ffff]">
                          <h5 className="mb-[15px] text-[14px] font-[600]">Blog post title</h5>
                        </a>
                        {/* text */}
                        <div className="mb-[15px] text-[#8c8c8e] text-[12px]">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet!
                        </div>
                        {/* link */}
                  
                        <Link href={"#"} className="flex items-center  text-[#FFC107] gap-1 uppercase font-[600] relative text-[10px]">
                  <span>  Read more</span>
                  <IoIosArrowForward />
                </Link>
                      </div>
                      {/* post description end */}
                    </div>
                    {/* blog post card end */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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

export default Mynewslettersection;
