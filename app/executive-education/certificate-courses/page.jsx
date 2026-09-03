import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import LogoCarousel from "@/component/common/logoCarousel/LogoCarousel";
import Testimonials from "@/component/common/testimonials/Testimonials";
import Maintenance from "@/component/Maintenance";
import { CertificateCoursesData } from "@/data/CertificateCoursesData";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrump
        currentPage={"Certificate Courses"}
        parentPage={"Executive Education"}
      />
      <Maintenance/>

      {/* <div className="container mt-50 mb-50">
        <div className=" section-space-bottom">
          <div className="section-title-wrapper text-center">
            <h4
              className="section-title rs-split-text-enable split-in-left has-theme-blue mb-1"
              style={{ fontSize: "36px" }}
            >
              Advanced Certificate Course for Armed Forces Personnel on
              Renewable Energy and Management Systems
            </h4>
          </div>
        </div>
        <LogoCarousel data={CertificateCoursesData} />
      </div> */}
    </div>
  );
};

export default page;
