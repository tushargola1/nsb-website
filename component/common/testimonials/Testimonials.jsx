"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./css/HeroBanner.css";
import { TestimonialData } from "../../../data/TestimonialData";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import styles from "./recruiters.module.css";

export default function Testimonials({ isShow }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const testimonials = Array.from({ length: 14 }, (_, index) => {
    let id = index + 102;
    let extension = "webp";
    return {
      id,
      img: `/assets/images/testimonials/${id}.${extension}`,
    };
  });
  return (
    <section
      className="hero-banner section-space pt-0"
      style={{ background: "#f7f9fb" }}
    >
      <div className={isShow ? "" :"pt-50"}>
        {isShow && (
          <div className="section-space-bottom">
            <div className="section-title-wrapper text-center">
              <h2 className="section-title rs-split-text-enable split-in-left has-theme-blue mb-1">
                Testimonials
              </h2>
            </div>
          </div>
        )}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          // spaceBetween={20}
          loop
          speed={1000}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 600000000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="heroSwiperd"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => {
                setIndex(index);
                setOpen(true);
              }}
              style={{ cursor: "pointer" }}
            >
              <div style={{ width: "100%", height: "400px" }}>
                <Image
                  src={item.img}
                  alt="Placement"
                  width={500}
                  height={400}
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
          slides={testimonials.map((item) => ({
            src: item.img,
            //   title: item.title,
            //   description: item.description,
          }))}
        />
      </div>
    </section>
  );
}
