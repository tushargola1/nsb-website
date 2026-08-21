"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./SwiperEventCard.css";

const SwiperEventCard = ({ programData }) => {
  return (
    <div className="container section-spaced mt-40">
    

      <div className="rs-program-three has-theme-cyan program-cards d-flex align-items-center justify-content-center">
        {programData.map((item) => {
          return (
            <div
              className="rs-program-item col-lg-4 col-md-6 col-12"
              key={item.id}
            >
              {/* IMAGE CAROUSEL */}
              <div className="rs-program-thumb executive-cards">
                <Swiper
                  modules={[Navigation, Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={item.images?.length > 1}
                  speed={800}
                  navigation={{
                    nextEl: `.swiper-next-${item.id}`,
                    prevEl: `.swiper-prev-${item.id}`,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 6000000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  // className="homebanner-swiper"
                >
                  {(item.images || [item.image]).map(
                    (image, imageIndex) => (
                      <SwiperSlide key={imageIndex}>
                        <Link href={item.url}>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Image
                              src={image}
                              width={44}
                              height={44}
                              alt={item.title}
                            />
                          </div>
                        </Link>
                      </SwiperSlide>
                    )
                  )}

                  {/* Custom Previous Button */}
                  {item.images?.length > 1 && (
                    <>
                      <button
                        type="button"
                        className={`swiper-custom-btn swiper-custom-prev swiper-prev-${item.id}`}
                        aria-label="Previous image"
                      >
                        <i className="ri-arrow-left-s-line"></i>
                      </button>

                      {/* Custom Next Button */}
                      <button
                        type="button"
                        className={`swiper-custom-btn swiper-custom-next swiper-next-${item.id}`}
                        aria-label="Next image"
                      >
                        <i className="ri-arrow-right-s-line"></i>
                      </button>
                    </>
                  )}
                </Swiper>
              </div>

              {/* CONTENT */}
              <div className="rs-program-content">
                <div className="rs-program-info">
                  <h5 className="rs-program-title" style={{ fontSize:"17px" }}>
                    <Link href={item.url}>{item.title}</Link>
                  </h5>

                {/* <p className="rs-program-desc">
                      {item.description}
                    </p> */}

                  <div className="rs-program-btn d-none">
                    <Link
                      className="rs-btn has-icon has-theme-cyan hover-cyan"
                      href={item.url}
                    >
                      <span className="btn-text-wrap">
                        <span className="text-default">
                          View Program
                        </span>
                        <span className="text-hover">
                          View Program
                        </span>
                      </span>

                      <span className="icon-box has-rotate">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 18 15"
                        >
                          <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z" />
                          <path d="M10.5 13.5C10.5 14.32843 9.82843 15 9 15C8.17157 15 7.5 14.32843 7.5 12C7.5 12.67157 7.82843 12 9 12C9.82843 12 10.5 12.67157 10.5 13.5Z" />
                          <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z" />
                          <path d="M18 7.5C18 8.32843 17.32843 9 16.5 9C15.67157 9 15 8.32843 15 7.5C15 6.67157 15 7.32843 15 7.5Z" />
                          <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 7.5 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SwiperEventCard;