"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./css/Gallary.css";
import EventsCalendar from "../events-calendar/EventsCalendar";
import {galleryData} from '@/component/data/galleryData';

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

export default function Gallery({ limit }) {
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
          <div className="col-md-12 col-lg-12 col-xl-8 col-12">
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
          </div>
          <div className="col-md-12 col-lg-12 col-xl-4 col-12">
            <EventsCalendar />
          </div>
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
