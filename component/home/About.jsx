"use client";

import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <section className="rs-about-area section-space-top rs-about-six bg-primary section-space-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-about-wrapper">
              <div
                className="position-relative overflow-hidden rounded-4"
                style={{
                  height: "450px",
                }}
              >
                {/* Blurry Background Image */}
                <Image
                  src="/assets/images/breadcrump/1.jpeg"
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
                    src="/assets/images/breadcrump/1.jpeg"
                    alt="PGDM Energy Management"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="rs-about-content-wrapper">
                <div className="section-title-wrapper">
                  <span
                    className="section-subtitle has-theme-red is-uppercase"
                    style={{ fontSize: "20px" }}
                  >
                    <div className="rs-about-counter-icon">
                      <Image
                        src="/assets/images/logo/nsblogoshort.jpg"
                        width={50}
                        height={40}
                        alt="About"
                      />
                    </div>
                    ABOUT NSB
                  </span>
                  <h2 className="section-title rs-split-text-enable split-in-left mb-3 fs-1">
                    A Center of Learning in Energy Management Domain
                  </h2>
                </div>
                <div className="rs-aobut-tab-content-wrapper">
                  <div
                    className="tab-content rs-about-tab-anim"
                    id="pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="pills-item-one"
                      role="tabpanel"
                      aria-labelledby="pills-item-one-tab"
                      tabIndex={0}
                    >
                      <div className="rs-about-tab-content">
                        <p className="pb-10 mb-0">
                          The NTPC School of Business (NSB) functions under the
                          aegis of the NTPC Education and Research Society
                          (NEARS). The Society was established by NTPC Limited,
                          India’s largest energy conglomerate; a Maharatna
                          company of the Government of India. NTPC accordingly
                          consolidated its mission to enrich knowledge capital
                          that serves humanity’s energy centric developmental
                          aspirations.
                        </p>
                        <p>
                          The NSB delivers through two AICTE approved higher
                          education programmes, specializing in energy
                          management. These are the, Post Graduate Diploma in
                          Management – Executive (PGDM-E) and Post Graduate
                          Diploma in Energy Management (PGDM-EM). These
                          programmes are designed to enrich management learning
                          and practice at all levels of decision making within
                          the energy landscape.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rs-about-info mt-4">
                  <div className="rs-about-btn">
                    <Link
                      className="rs-btn has-icon has-theme-red"
                      href="/about-us"
                    >
                      <span className="btn-text-wrap">
                        <span className="text-default">More About Us</span>
                        <span className="text-hover">More About Us</span>
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
                  <div className="rs-about-counter-wrapper">
                    {/* <div className="rs-about-counter-icon">
                      <Image
                        src="/assets/images/logo/nsblogoshort.jpg"
                        width={50}
                        height={50}
                        alt="About"
                      />
                    </div> */}
                    <div className="rs-about-counter">
                      <div className="rs-counter-number-wrapper">
                        <span
                          className="rs-counter-number odometer"
                          data-count="12"
                        >
                          12
                        </span>
                        {/* <span className="prefix">+</span> */}
                      </div>
                      <span className="rs-counter-title fs-4">
                        Years of Higher Education, Research, Advocacy & Capacity
                        Building.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
