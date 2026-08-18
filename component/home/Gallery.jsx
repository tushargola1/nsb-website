"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./css/Gallary.css";
import EventsCalendar from "../events-calendar/EventsCalendar";
import { galleryData } from "@/component/data/galleryData";
import Link from "next/link";

export const galleryDataMain = Object.entries(galleryData).flatMap(
  ([category, images]) =>
    images.map((img, i) => ({
      id: `${category}-${i}`,
      category,
      image: img.src,
      title: img.title,
      description: img.description,
    })),
);

export default function Gallery({ limit, showEvent }) {
  const [activeTab, setActiveTab] = useState("All");

  const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(0);
  const tabs = ["All", "Events", "MDP Programs", "MOU", "Student Activities"];
  const images =
    activeTab === "All"
      ? galleryDataMain
      : galleryDataMain.filter((item) => item.category === activeTab);

  const displayImages = limit ? images.slice(0, limit) : images;
  return (
    <section className="rs-gallery-area section-space rs-gallery-two gallary-parent-div ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="">
            <div className="section-title-wrapper text-center">
              <h2 className="section-title rs-split-text-enable split-in-left has-theme-blue mb-1">
                Events At NSB
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className={`col-md-12 col-lg-12  col-12 ${showEvent ? "col-xl-8" : "col-xl-12"}`}
          >
            <div className="rs-gallery-tab-wrapper">
              <ul className="nav nav-pills">
                {tabs.map((tab) => (
                  <li key={tab} className="nav-item">
                    <button
                      className={`nav-link ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rs-gallery-content-wrapper">
              <div className="rs-gallery-wrapper d-flex flex-wrap gap-0 gy-2">
                {displayImages.map((item, i) => (
                  <div key={item.id} className="rs-gallery-item col-md-4 ">
                    <div
                      className="rs-gallery-thumb p-2"
                      onClick={() => {
                        setIndex(i);
                        setOpen(true);
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title || ""}
                        width={300}
                        height={300}
                      />
                      <div className="rs-gallery-overlay">
                        <h4 className="rs-gallery-overlay-title">
                          {item.title}
                        </h4>
                        <p className="rs-gallery-overlay-desc">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {showEvent && (
              <>
                <div className="rs-about-btn d-flex justify-content-center align-items-center mt-20">
                  <Link
                    className="rs-btn has-icon has-theme-red"
                    href="/gallery"
                  >
                    <span className="btn-text-wrap">
                      <span className="text-default">View More</span>
                      <span className="text-hover">View More</span>
                    </span>
                    <span className="icon-box has-rotate">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 15"
                      >
                        <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z"></path>
                        <path d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z"></path>
                        <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z"></path>
                        <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z"></path>
                        <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </>
            )}
          </div>
          {showEvent && (
            <>
              <div className="col-md-12 col-lg-12 col-xl-4 col-12">
                <EventsCalendar />
              </div>
            </>
          )}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={displayImages.map((item) => ({
          src: item.image,
          title: item.title,
          description: item.description,
        }))}
      />
    </section>
  );
}
