"use client";
import TeamCard2 from "@/component/Cards/TeamCard2";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import LogoCarousel from "@/component/common/logoCarousel/LogoCarousel";
import PlacementStats from "@/component/common/placement/PlacementStats";
import { StudentPlacementTeam } from "@/data/StudentPlacementTeam";
import Image from "next/image";
import React from "react";

const page = () => {
  const recruiters = Array.from({ length: 11 }, (_, index) => {
    let id = index + 109; // Start from 109

    // Skip 115
    if (id >= 115) id += 1;

    let extension = "webp";

    // PNG images
    if ([116, 120, 121].includes(id)) {
      extension = "png";
    }

    return {
      id,
      image: `/assets/images/placement-process/${id}.${extension}`,
    };
  });
  return (
    <div>
      <Breadcrump
        currentPage="Placement Process"
        parentPage={"Corporate Relations"}
      />
      <div className="container mt-50 mb-50">
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "6/2",
          }}
        >
          <Image
            src="/assets/images/placement-process/102.webp"
            alt="NSB Logo"
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 992px) 80vw, 40vw"
          />
        </div>
        <div className="rs-postbox-text mt-40">
          <p className="mb-10">
            In line to create future leaders in the field of the energy sector,
            NTPC School of Business offers its students 100 percent placement
            assistance. NSB works with a cohort-based system. This system is
            designed to provide a better student-recruiter fit. The process
            allows recruiters to evaluate students over a longer duration while
            giving them more time to delve into their desired career options.
          </p>
          <p>
            In the past, many firms of domestic and international repute have
            visited the NSB campus. Many of our students have gone on to work
            for formidable organizations such as Deloitte, KPMG, EY, and many
            more. They have been offered and are working in a variety of roles,
            ranging from analysts to consultants as well as executives.
          </p>
        </div>

        <div className="rs-program-details-tab-wrapper d-flex flex-lg-row flex-md-row flex-column gap-4 align-items-center mt-40">
          <div className="rs-program-btn  w-100">
            <h4 className="section-title has-theme-blue fs-1">
              Placement <span className="blue-color">Brochures</span>
            </h4>
          </div>
          <div className="rs-program-btn text-end w-100">
            <a
              className="rs-btn has-icon has-theme-cyan hover-cyan"
              href="https://drive.google.com/file/d/1dO30fbnBlp395qpGTtfKgtjTxJufJlLh/view?usp=sharing"
              target="_blank"
            >
              <span className="btn-text-wrap">
                <span className="text-default">
                  Download Placement Brochure
                </span>
                <span className="text-hover">Download Placement Brochure</span>
              </span>
              <span className="icon-box has-rotate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                  <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z"></path>
                  <path d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z"></path>
                  <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z"></path>
                  <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z"></path>
                  <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div>
          {/* <div>
            <h2 className="section-title has-theme-blue mb-20 ps-0 mt-30">
              <span className="blue-color">Placement</span> Committee
            </h2>
            <div className=" row align-items-center justify-content-center gap-lg-5 gy-3">
              <h3 className="mb-20 mt-40">Student Placement Team</h3>

              {StudentPlacementTeam.map((item, id) => {
                return (
                  <>
                    <div className="col-md-6 col-lg-3 col-12" key={id}>
                      <TeamCard2 data={item} />
                    </div>
                  </>
                );
              })}
            </div>
          </div> */}

          <div>
            <h3 className="mb-20 mt-40">
              Placement AY <span className="blue-color">2025-26</span>
            </h3>
            {/* <PlacementStats /> */}
          </div>
          <div>
            <h2 className="section-title has-theme-blue mb-20 ps-0 mt-30">
              <span className="blue-color">Key</span> Recruiters
            </h2>
            <LogoCarousel data={recruiters} />
          </div>
          <div className="rs-program-details-tab-wrapper d-flex flex-lg-row flex-md-row flex-column gap-4 align-items-center mt-40">
            <div className="rs-program-btn  w-100">
              <h4 className="section-title has-theme-blue fs-1">
                Placement <span className="blue-color">Flyer</span>
              </h4>
            </div>
            <div className="rs-program-btn text-end w-100">
              <a
                className="rs-btn has-icon has-theme-cyan hover-cyan"
                href="https://drive.google.com/file/d/1dO30fbnBlp395qpGTtfKgtjTxJufJlLh/view?usp=sharing"
                target="_blank"
              >
                <span className="btn-text-wrap">
                  <span className="text-default">Download Now</span>
                  <span className="text-hover">Download Now</span>
                </span>
                <span className="icon-box has-rotate">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                    <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z"></path>
                    <path d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z"></path>
                    <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z"></path>
                    <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z"></path>
                    <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
