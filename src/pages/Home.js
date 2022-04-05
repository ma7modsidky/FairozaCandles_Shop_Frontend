import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductList from '../components/Products/ProductList';
import products from "../utils/Data";
import img1 from "../assets/images/slider/1.jpg";
import img2 from "../assets/images/slider/2.jpg";
import img3 from "../assets/images/slider/3.png";
import img4 from "../assets/images/slider/4.jpg";
import img5 from "../assets/images/slider/5.jpg";
import img6 from "../assets/images/slider/6.jpg";
import img7 from "../assets/images/slider/7.jpg";

import axiosInstance from "../axios"

function Home() {

  return (
    <div className="">
      <Swiper
        // spaceBetween={}
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade]}
        // className="mySwiper max-w-[100%] h-auto max-h-[85vh]"
        className="mySwiper aspect-[16/9]"
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide className="">
          <img
            src={img1}
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
        <h2 className="text-secondary uppercase font-medium text-xl my-2">
          Top Products
        </h2>
        <ProductList products={products}/>
      </div>
    </div>
  );
};

export default Home;
