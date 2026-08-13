"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import "./css/HeroBanner.css";

import { HomeBannerData } from "../data/HomeBannerData";

export default function HeroBanner() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const lightboxSlides = HomeBannerData.map((item) => ({
    src: item.src,
    title: item.title,
    description: item.description,
  }));

  return (
    <section className="hero-banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="homebanner-swiper"
        slidesPerView={1}
        loop={true}
        spaceBetween={0}
        speed={1000}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}  
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {HomeBannerData.map((item, slideIndex) => (
          <SwiperSlide key={item.id || slideIndex}>
            <div
              className="video-slidej video-slide-glass"
              onClick={() => {
                setIndex(slideIndex);
                setOpen(true);
              }}
      >
              <Image
                src={item.src}
                alt={item.title || `Banner ${slideIndex + 1}`}
                fill
                sizes="
                  (max-width: 767px) 100vw,
                  (max-width: 991px) 50vw,
                  (max-width: 1199px) 33vw,
                  25vw
                "
                className="hero-banner-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={lightboxSlides}
      />
    </section>
  );
}