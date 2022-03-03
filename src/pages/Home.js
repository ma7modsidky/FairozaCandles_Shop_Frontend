import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductList from '../components/Products/ProductList';

import img1 from "../assets/images/slider/1.jpg";
import img2 from "../assets/images/slider/2.jpg";
import img3 from "../assets/images/slider/3.png";
import img4 from "../assets/images/slider/4.jpg";
import img5 from "../assets/images/slider/5.jpg";
import img6 from "../assets/images/slider/6.jpg";
import img7 from "../assets/images/slider/7.jpg";



function Home() {

  return (
    <div className="">
      <Swiper
        // spaceBetween={}
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade]}
        className="mySwiper max-w-[100%] max-h-[40rem] h-[87vh]"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="">
          <img
            src={img1}
            alt="banner"
            className="h-[100%] w-[100%] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[20rem]">
          <img
            src={img2}
            alt="banner"
            className="h-[100%] w-[100%] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[20rem]">
          <img
            src={img3}
            alt="banner"
            className="h-[100%] w-[100%] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src={img4}
            alt="banner"
            className="h-[100%] w-[100%] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src={img5}
            alt="banner"
            className="h-[100%] w-[100%] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src={img6}
            alt="banner"
            className="h-[100%] w-[100%] object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div className="container mx-auto p-2">
        <h1 className="text-secondary uppercase font-medium text-xl my-2">
          Top Products
        </h1>
        
        <ProductList/>
      </div>
    </div>
  );
};

export default Home;
