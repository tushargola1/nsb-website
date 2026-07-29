"use client";

import Link from "next/link";
import Image from "next/image";

const ProgramCard = ({ programData }) => {
  console.log(programData);
  return (
    <div className="container section-spaced pt-0">
      <div className="row justify-content-center ">
        <div className="">
          <div className="section-title-wrapper text-center">
            <h2
              className="section-title rs-split-text-enable split-in-left has-theme-blue "
              style={{ marginBottom: "40px" }}
            >
              Program Pedagogy
            </h2>
          </div>
        </div>
      </div>
      <div className="rs-program-three has-theme-cyan program-cards">
        {programData.map((item, index) => {
          return (
            <div className="rs-program-item col" key={item.id}>
              <div className="rs-program-thumb">
                <a href="program-details.html">
                  <Image
                    src={item.image}
                    width={44}
                    height={44}
                    alt="Announcement"
                    // className={styles.updateImg}
                  />
                </a>
              </div>
              <div className="rs-program-content">
                <div className="rs-program-info">
                  <h5 className="rs-program-title">
                    <a href="program-details.html">{item.title}</a>
                  </h5>
                  <p className="rs-program-desc">
                    {item.description.slice(0, 265)}...
                  </p>
                  <div className="rs-program-btn">
                    <a
                      className="rs-btn has-icon has-theme-cyan hover-cyan"
                      href="program-details.html"
                    >
                      <span className="btn-text-wrap">
                        <span className="text-default">View Program</span>
                        <span className="text-hover">View Program</span>
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
                    </a>
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

export default ProgramCard;
