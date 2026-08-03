"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/HeroBanner.css";
import { Placement as PlacementData } from "../../data/Placement";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
export default function Placement() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="hero-banner ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        loop
        speed={1000}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            // spaceBetween: 10,
          },
          576: {
            slidesPerView: 1,
            // spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            // spaceBetween: 10,
          },
          992: {
            slidesPerView: 1,
            // spaceBetween: 15,
          },
          1200: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        className="heroSwiperd"
      >
        {PlacementData.map((item, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setIndex(index);
              setOpen(true);
            }}
            style={{ cursor: "pointer" }}
          >
            <div
              className="video-slidej placement-banners "
           
            >
              <Image
                src={item.image}
                alt="Placement"
                fill
                sizes="0vw"
                style={{ objectFit: "contain" }}
              />
              {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="banner-video"
              >
                <source src={video} type="video/mp4" />
              </video> */}

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
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={PlacementData.map((item) => ({
          src: item.image,
          //   title: item.title,
          //   description: item.description,
        }))}
      />
    </section>
  );
}
