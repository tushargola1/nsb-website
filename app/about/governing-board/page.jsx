import TeamCard2 from "@/component/Cards/TeamCard2";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import ChairmenMessage from "@/component/common/message/ChairmenMessage";
import Image from "next/image";
import React from "react";

const page = () => {
  const governingBodyData = [
    {
      id: 1,
      image: "/assets/images/about/gurdeep.webp",
      name: "Shri Gurdeep Singh",
      position: "Chairman and Managing Director",
      organization: "NTPC Limited",
    },
    {
      id: 2,
      image: "/assets/images/about/governingBoard/gauri.jpg",
      name: "Dr Gauri Trivedi",
      position: "Former Independent Director",
      organization: "NTPC Limited IAS",
    },
    {
      id: 3,
      image: "/assets/images/about/governingBoard/dillip.jpg",
      name: "Shri Dilip Kumar Patel",
      position: "Former Director (HR)",
      organization: "NTPC Limited",
    },
    {
      id: 4,
      image: "/assets/images/about/nears/shri-anil.jpeg",
      name: "Shri Anil Kumar Jadli",
      position: "Director (HR)",
      organization: "NTPC Limited",
    },
    {
      id: 5,
      image: "/assets/images/about/governingBoard/sunil.jpg",
      name: "Prof Sunil Maheshwari",
      position: "Professor",
      organization: "IIM Ahmedabad",
    },
  ];
  return (
    <>
      <Breadcrump currentPage={"Governing Board"} parentPage={"About"} />
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
                <h2 className="section-title has-theme-blue mb-20 ps-0">
                  Governing Board
                </h2>
                <div className="row align-items-center justify-content-center gap-5">
                  {governingBodyData.map((item, id) => {
                    return (                  <div className="col-lg-3 col-md-5 col-12" key={id}>
                       <TeamCard2 data={item}/>
                  </div>
                 )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
