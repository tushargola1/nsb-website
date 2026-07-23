"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/HeroBanner.css";

export default function HeroBanner() {
  const videos = [
    "/assets/video/NSB.mp4",
    // "/assets/video/NSB.mp4",
    // "/assets/video/NSB.mp4",
  ];

  return (
    <section className="hero-banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1000}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="heroSwiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="video-slide">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="banner-video"
              >
                <source src={video} type="video/mp4" />
              </video>

              {/* <div className="overlay"></div>

              <div className="content">
                <h1>National School of Business</h1>
                <p>Empowering Future Business Leaders</p>

                <button className="hero-btn">
                  Explore Programs
                </button>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}