"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import styles from "./recruiters.module.css";

const LogoCarousel = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        loop
        speed={1000}
        navigation
        autoplay={{
          delay: 6000,
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
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="heroSwiperd"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              // Only open Lightbox if there is no URL
              if (!item.url) {
                setIndex(index);
                setOpen(true);
              }
            }}
            style={{ cursor: item.url ? "pointer" : "pointer" }}
            className="d-flex align-items-center justify-content-center"
          >
            <div className={styles.recuitersrow}>
              <div className={styles.recuitersrowsecond}>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={item.image}
                      alt="Placement"
                      width={100}
                      height={150}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                ) : (
                  <Image
                    src={item.image}
                    alt="Placement"
                    width={100}
                    height={150}
                    style={{ objectFit: "contain" }}
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={data.map((item) => ({
          src: item.image,
        }))}
      />
    </div>
  );
};

export default LogoCarousel;