import TeamCard2 from "@/component/Cards/TeamCard2";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import EventsCalendar from "@/component/events-calendar/EventsCalendar";
import Maintenance from "@/component/Maintenance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrump currentPage="Executive education" parentPage="Education" />
      <section className="rs-postbox-area section-space-top">
        <section className="rs-scholarships-area rs-scholarships-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h2 className="section-title text has-theme-blue mb-10">
                  Management Development Programme
                </h2>
                <p className="rs-scholarships-description mb-3">
                  NTPC School of Business conducts faculty development program
                  for the faculty members of the management institutions. The
                  areas of these programmes varies from subject specific to
                  research specific needs of the education industry.
                </p>
              </div>
            </div>

            <div className="text-center mt-40 mb-50">
              <a
                className="rs-btn has-icon has-theme-cyan hover-cyan"
                href="https://drive.google.com/file/d/18IksDLRWQPmJH0ZIsrUduvgvOtsYkfkc/view?usp=sharing"
                target="_blank"
              >
                <span className="btn-text-wrap">
                  <span className="text-default">
                    Click to view MDP Calender 2026-2027
                  </span>
                  <span className="text-hover">
                    Click to view MDP Calender 2026-2027
                  </span>
                </span>
                <span className="icon-box has-rotate">
                  <i className="fa-regular fa-calendar-days"></i>
                </span>
              </a>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row g-5 ">
            <div className=" rs-blog-two has-theme-green">
              <div className="rs-postbox-wrapper row">
                <div className="col-md-12 col-lg-6 col-12">
                  <h3 className="section-title text has-theme-blue mb-10">
                    <span className="blue-color">Program</span> Overview
                  </h3>
                  <article className="rs-postbox-item  ">
                    <div
                      className="position-relative overflow-hidden rounded-4"
                      style={{
                        height: "400px",
                      }}
                    >
                      {/* Blurry Background Image */}
                      <Image
                        src="/assets/images/education/1.webp"
                        alt="background"
                        fill
                        style={{
                          objectFit: "cover",
                          filter: "blur(20px)",
                          transform: "scale(1.1)",
                          opacity: 0.7,
                        }}
                      />

                      {/* Main Full Image */}
                      <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
                        <Image
                          src="/assets/images/education/1.webp"
                          alt="PGDM Energy Management"
                          fill
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>

                    <div className="rs-postbox-content px-2 pt-10">
                      <div className="rs-postbox-text mt-10">
                        <p>
                          Executive Education at NSB includes both short and
                          long term programs. The aim of executive education is
                          to provide specific tailor made programs to the
                          corporate and government officials. Each Programme is
                          designed considering the changing trends of the
                          industry as well as specific needs of the executives
                          at different levels of their careers.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-md-12 col-lg-6 col-12">
                  <h3 className="section-title text has-theme-blue mb-10">
                    <span className="blue-color">MDP</span> Calender
                  </h3>
                  <EventsCalendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
