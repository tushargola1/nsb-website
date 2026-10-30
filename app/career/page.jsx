"use client";

import DownloadCard from "@/component/Cards/DownloadCard";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import { useEffect, useState, useRef } from "react";
const page = () => {
  const careerOpportunities = [
    {
      id: 1,
      name: "NewsPaper Advertisement",
      url: "",
    },
    {
      id: 2,
      name: "Detailed Advertisement",
      url: "",
    },
    {
      id: 3,
      name: "Application Form",
      url: "",
    },
  ];

  return (
    <div>
      <Breadcrump currentPage={"Career"} parentPage={"Career"} />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="section-space-bottom">
            <div className="section-title-wrapper">
              <div className="rs-about-wrapper margin-15">
                <h3
                  className="section-title has-theme-blue mb-20 ps-0"
                  id="governing-board-section"
                  style={{ fontSize: "30px", fontWeight: "600" }}
                >
                  Advertisement for the post of Director, NSB
                </h3>
              </div>
            </div>
          </div>
          <div className="row g-4 align-items-center justify-content-center">
            {/* {stats.map((item, index) => ( */}
            <div className="col-lg-12 col-md-12">
              <div className="stat-card h-100 row g-4 align-items-center justify-content-center">
                {careerOpportunities.map((item) => (
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 col-12"
                    key={item.id}
                  >
                    <DownloadCard item={item} />
                  </div>
                ))}
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>

        <style jsx>{`
          section {
            background: linear-gradient(135deg, #f8fbff, #eef5ff);
            position: relative;
            overflow: hidden;
          }

          section:before {
            content: "";
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: rgba(13, 110, 253, 0.06);
            top: -100px;
            left: -80px;
          }

          // section:after {
          //   content: "";
          //   position: absolute;
          //   width: 250px;
          //   height: 250px;
          //   border-radius: 50%;
          //   background: rgba(102, 16, 242, 0.05);
          //   bottom: -80px;
          //   right: -70px;
          // }

          .stat-card {
            position: relative;
            overflow: hidden;
            background: #fff;
            border-radius: 24px;
            padding: 20px 25px;
            text-align: center;
            transition: 0.45s ease;
            box-shadow:
              0 8px 25px rgba(0, 0, 0, 0.05),
              0 20px 45px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(0, 0, 0, 0.05);
          }

          .stat-card:hover {
            transform: translateY(-12px);
            box-shadow:
              0 20px 40px rgba(0, 0, 0, 0.08),
              0 35px 70px rgba(0, 0, 0, 0.12);
          }

          .stat-card::before {
            content: "";
            position: absolute;
            top: -70px;
            right: -70px;
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background: rgba(13, 110, 253, 0.06);
            transition: 0.4s;
          }

          .stat-card:hover::before {
            transform: scale(1.2);
          }

          .stat-card::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(
              90deg,
              transparent,
              #ffca08,
              transparent
            );
            transform: scaleX(0);
            transition: 0.4s;
          }

          .stat-card:hover::after {
            transform: scaleX(1);
          }

          .icon-box {
            width: 88px;
            height: 88px;
            border-radius: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            color: #fff;
            margin: auto auto 28px;
            box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);
            transition: 0.45s;
          }

          .stat-card:hover .icon-box {
            transform: rotate(-8deg) scale(1.08);
          }

          h2 {
            margin-bottom: 10px;

            letter-spacing: -2px;
          }

          p {
            font-size: 17px;
            color: #5b6572;
            font-weight: 600;
            margin: 0;
          }

          .stat-card .bg-number {
            position: absolute;
            right: 15px;
            bottom: 0;
            font-size: 90px;
            font-weight: 900;
            color: rgba(0, 0, 0, 0.03);
            line-height: 1;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .stat-card {
              padding: 35px 20px;
            }

            .icon-box {
              width: 75px;
              height: 75px;
              font-size: 34px;
            }

            h2 {
              font-size: 42px;
            }

            p {
              font-size: 16px;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default page;
