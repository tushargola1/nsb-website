import TeamCard2 from "@/component/Cards/TeamCard2";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import ChairmenMessage from "@/component/common/message/ChairmenMessage";
import Image from "next/image";
import React from "react";

const page = () => {
  const governingBodyData = [
    {
      id: 1,
      image: "/assets/images/faculty/gurdeep.png",
      name: "Shri Gurdeep Singh",
      position: "President",
    },
    {
      id: 2,
      image: "/assets/images/about/governingBoard/gauri.png",
      name: "Dr Gauri Trivedi",
      position: "Member",
    },
    
    {
      id: 3,
      image: "/assets/images/faculty/anil.png",
      name: "Shri Anil Kumar Jadli",
      position: "Member",
    },
    {
      id: 4,
      image: "/assets/images/faculty/faculty-details/NSB Faculty/R Gopichandran.webp",
      name: "Prof. R. Gopichandran",
      position: "Member",
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

                <h2 className="section-title has-theme-blue mb-20 ps-0" id="governing-board-section">
                  Governing Board
                </h2>
                <div className="row align-items-center justify-content-center gap-lg-0 gap-md-2 gap-4">
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
