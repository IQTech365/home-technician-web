"use client";

import Image from "next/image";

import { testimonialimages } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

//for swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <section className="">
      <h2 className="text-center text-2xl font-medium text-gray-700 mb-3">Testmonials</h2>
      <div>
        <Swiper
          navigation
          // pagination={{ type: "bullets" }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={900}
          loop={true}
          onSwiper={(Swiper) => console.log(Swiper)}
          className="h-[300px] w-full md:w-[800px] shadow-lg my-2"
        >
          {testimonialimages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col h-full w-full items-center justify-center px-2">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className=" h-[150px] w-[150px] object-cover rounded-[50%]"
                />
                <h3 className="text-2xl font-medium text-gray-700">{item.title}</h3>
                <p className="text-bold text-gray-700 p-4 text-center mb-2">
                  {item.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
