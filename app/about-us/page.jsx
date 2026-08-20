import TeamCard2 from "@/component/Cards/TeamCard2";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import ChairmenMessage from "@/component/common/message/ChairmenMessage";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrump currentPage={"About Us"} parentPage={"About"} />
      <section className="rs-about-area section-space bg-primary rs-about-seven">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-12 col-lg-12">
              <div className="rs-about-wrapper margin-15">
                <h2 className="section-title has-theme-blue mb-20">
                  About NTPC School of Business (NSB)
                </h2>
                <p className="section-desc pb-10 mb-0">
                  The NTPC School of Business (NSB) functions under the aegis of
                  the NTPC Education and Research Society (NEARS). The Society
                  was established by NTPC Limited, India’s largest energy
                  conglomerate; a Maharatna company of the Government of India.
                  NTPC accordingly consolidated its mission to enrich knowledge
                  capital that serves humanity’s energy centric developmental
                  aspirations.
                </p>
                <p className="section-desc">
                  The NSB delivers through two AICTE approved higher education
                  programmes, specializing in energy management. These are the,
                  Post Graduate Diploma in Management – Executive (PGDM-E) and
                  Post Graduate Diploma in Energy Management (PGDM-EM). These
                  programmes are designed to enrich management learning and
                  practice at all levels of decision making within the energy
                  landscape.
                </p>
                <h2 className="section-title has-theme-blue mb-20 ps-0">
                  Leader&apos;s Message
                </h2>
                <ChairmenMessage isReadMore={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
