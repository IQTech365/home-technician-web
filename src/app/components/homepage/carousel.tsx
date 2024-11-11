"use client";

import Image from "next/image";

import { images } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";

//for swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousal() {
  return (
    <section className="">
      <div>
        <Swiper
          navigation
          // pagination={{ type: "bullets" }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{delay:3000, disableOnInteraction: false}}
          speed={1000}
          loop={true}
          // loopAdditionalSlides={6}
          onSwiper={(Swiper) => console.log(Swiper)}
          className="md:h-[460px] w-full "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
