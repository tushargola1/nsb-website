"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./css/Gallary.css";

export const galleryData = [
  {
    id: 1,
    category: "All",
    image: "/assets/images/gallery/events/gallery-thumb-01.webp",
  },
  {
    id: 2,
    category: "Events",
    image: "/assets/images/gallery/events/gallery-thumb-02.webp",
  },
  {
    id: 3,
    category: "MDP Programs",
    image: "/assets/images/gallery/mdp/gallery-thumb-01.webp",
  },
  {
    id: 4,
    category: "MOU",
    image: "/assets/images/gallery/mou/gavv  23456ty76567llery-thumb-01.webp",
  },
  {
    id: 5,
    category: "Student Activities",
    image: "/assets/images/gallery/student/gallery-thumb-01.webp",
  },
];

export default function Gallery({ limit }) {
  const [activeTab, setActiveTab] = useState("All");

  const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(0);
  const tabs = ["All", "Events", "MDP Programs", "MOU", "Student Activities"];
  const images =
    activeTab === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  const displayImages = limit ? images.slice(0, limit) : images;
  return (
    <section className="rs-gallery-area section-space rs-gallery-two gallary-parent-div">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="section-title-wrapper text-center">
              <h2 className="section-title rs-split-text-enable split-in-left mb-20 has-theme-blue">
                Life at Our University
              </h2>
              <p className="section-desc">
                Explore life at our university through images and memories.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
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
                      <Image src={item.image} alt="" width={300} height={350} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((item) => ({
          src: item.image,
        }))}
      />
    </section>
  );
}
