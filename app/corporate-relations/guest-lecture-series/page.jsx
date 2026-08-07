"use client";

import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const page = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
const GuestLectureGallery = Array.from({ length: 42 }, (_, index) => {
  let id = index + 1;

  if (id >= 11) id += 1; // Skip 11
  if (id >= 33) id += 1; // Skip 33

  let extension = "webp";

  if (id === 38) extension = "jpg";

  return {
    id,
    img: `/assets/images/guestlecture/${id}.${extension}`,
  };
});
  return (
    <div>
      <Breadcrump
        currentPage="Guest Lecture Series"
        parentPage={"Corporate Relations"}
      />
      <div className="container mt-50">
        <div className="rs-postbox-text">
          <p>
            NSB guest lecture series named as VYAAKHYA. The Objective of
            VYAAKHYA is to invite industry leaders from different domains and
            share their corporate and personal journey with NSB students. These
            sessions aim to acquaint the students with real-life organizational
            challenges through the experience and journey of the invited
            industry leaders and entrepreneurs. Such sessions provide an
            opportunity for students to links the theoretical concepts learned
            in the class with the practical experiences of the industry.
          </p>
        </div>
        <div
          className="rs-quote-wrapper row align-items-center flex-lg-row flex-md-column flex-column gap-lg-0 gap-md-4 gap-4 mt-40"
          style={{ background: "#ffdead" }}
        >
          <div className="col-md-12 col-lg-5 col-12">
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "5 / 3",
              }}
            >
              <Image
                src="/assets/images/guestlecture/16.webp"
                alt="NSB Logo"
                fill
                priority
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 992px) 80vw, 40vw"
              />
            </div>
          </div>

          <div className="col-md-12 col-lg-7 col-12">
            <h3 className="mb-20">Upcoming Lecture</h3>

            <p className="rs-quote-desc position-relative mb-20">
              <div className="text-warning">
                <span className="blue-color fw-bold">
                  Shri Vinod Kumar Tripathi,
                </span>
                <span className="text-dark">
                  {" "}
                  Former Joint Secretary, Parliament of India
                </span>
              </div>
            </p>

            <p className="rs-quote-desc mb-30">
              <strong>Date:</strong> 20/10/2023
            </p>

            <p className="rs-quote-desc">
              With immense pleasure, NTPC School of Business (#NSB) welcomes
              <strong> Shri Vinod Kumar Tripathi</strong>, Former Joint
              Secretary, Parliament of India, as a Guest Speaker at the
              <strong> VYAAKHYA</strong> lecture series on
              <strong> October 20, 2023</strong>.
            </p>
          </div>
        </div>
        <div className="container py-5">
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
