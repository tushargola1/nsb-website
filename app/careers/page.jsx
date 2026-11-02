"use client";

import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import DownloadCard from "@/component/Cards/DownloadCard";

const Career = () => {
  const careerOpportunities = [
    {
      id: 1,
      name: "NewsPaper Advertisement",
      url: "/assets/files/NSB_Director_QR.pdf",
    },
    {
      id: 2,
      name: "Detailed Advertisement",
      url: "/assets/files/NSB_Director_Recruitment_Advertisement.pdf",
    },
    {
      id: 3,
      name: "Application Form",
      url: "/assets/files/Application_Form_for_Director_NSB.pdf",
    },
  ];

  return (
    <div>
      <Breadcrump currentPage="Careers" parentPage="Careers" />

      <section className="career-section py-5">
        <div className="container">
          <div className="section-space-bottom">
            <div className="section-title-wrapper">
              <div className="rs-about-wrapper margin-15">
                <h3
                  className="section-title has-theme-blue mb-20 ps-0"
                  id="governing-board-section"
                  style={{
                    fontSize: "30px",
                    fontWeight: "600",
                  }}
                >
                  Advertisement for the post of Director, NSB
                </h3>
              </div>
            </div>
          </div>

          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="stat-card h-100 row g-4 align-items-center justify-content-center">
                {careerOpportunities.map((item) => (
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 col-12"
                    key={item.id}
                  >
                    <DownloadCard
                      item={item}
                      enablePdfModal={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .career-section {
            background: linear-gradient(135deg, #f8fbff, #eef5ff);
            position: relative;
            overflow: hidden;
          }

          .career-section:before {
            content: "";
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: rgba(13, 110, 253, 0.06);
            top: -100px;
            left: -80px;
            pointer-events: none;
          }

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

          @media (max-width: 768px) {
            .stat-card {
              padding: 35px 20px;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Career;
