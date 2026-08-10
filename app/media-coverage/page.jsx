"use client";

import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const page = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
const GuestLectureGallery = Array.from({ length: 12 }, (_, index) => {
  let id = index + 102;

  if (id >= 109) {
    id += 1;
  }

  let extension = "png";

  if (id === 112) {
    extension = "webp";
  }

  if (id === 113 || id === 114) {
    extension = "jpeg";
  }

  return {
    id,
    img: `/assets/images/mediaCoverage/${id}.${extension}`,
  };
});
  return (
    <div>
      <Breadcrump
        currentPage="Media Coverage"
        parentPage={"Corporate Relations"}
      />
      <div className="container mt-50">
       <div className="row g-4 align-items-center justify-content-center">
            {GuestLectureGallery.map((item, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <div
                  className="border rounded shadow-sm p-2 h-100"
                  style={{
                    cursor: "pointer",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.03))",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: "12px",
                  }}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={`Guest Lecture ${item.id}`}
                      fill
                      className="rounded"
                      style={{
                        objectFit: "contain",
                      }}
                      sizes="(max-width:768px) 100vw, (max-width:992px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={GuestLectureGallery.map((item) => ({
            src: item.img,
          }))}
        />
      </div>
    </div>
  );
};

export default page;
