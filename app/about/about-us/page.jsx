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
                <p className="section-desc">
                  Under the aegis of NTPC Education and Research Society
                  (NEARS), NTPC School of Business works towards the goal of a
                  pioneer in energy management through human capacity generation
                  and research devoted to the field of energy management.
                  Equipped with a state of the art campus the institute
                  currently runs two programs- Executive Post Graduate Diploma
                  in Management (PGDM-E) and Post Graduate Diploma in Energy
                  Management (PGDM-EM). The AICTE approved courses are oriented
                  towards training and research enrichment in the field of
                  energy sector in India. The institute also focuses on cutting
                  edge research and consultancy through its various centers of
                  excellence such as Center for Energy innovations Center for
                  Energy Environment and Center for Research and innovation.
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
