import TeamCard2 from "@/component/Cards/TeamCard2";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Maintenance from "@/component/Maintenance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const studentsDetails = [
  {
    id: "1",
    name: "Gopal Patodia",
    designation: "Sr Manager NTPC Ltd",
    image: "/assets/images/students/1.jpg",
    about:
      "I am Gopal Patodia working as Senior Manager at NTPC Ltd, with over 15 years of experience in operation and maintenance of thermal power stations.",
  },
  {
    id: "2",
    name: "Vaibhav",
    designation: "DGM (Energy and Efficiency Management Group), NTPC Kudgi",
    image: "/assets/images/students/2.jpg",
    about:
      "I have been working in EEMG for past 8 years covering all aspects of the department. Performance guarantee testing of all coal thermal power plant systems have been my most rewarding experiences.",
  },
  {
    id: "3",
    name: "Nalin Garg",
    designation: "DGM, NTPC Limited",
    image: "/assets/images/students/3.jpeg",
    about:
      "I am presently serving NTPC as DGM in Operations department. I have vast Project Engineering and Operational experience in sub-critical and super-critical thermal power plants. I also have a keen interest in Digital applications and have developed useful tools in Visual Studio, mobile Android applications and learning projects in AI/ML using Python. I wish to learn more about AI technology and how it can benefit India and NTPC in transitioning from a largely thermal power-based economy to a more diversified non-fossil clean energy ecosystem.",
  },
  {
    id: "4",
    name: "Niranjan Reddy Arachatla",
    designation: "Deputy General Manager, NTPC Ltd",
    image: "/assets/images/students/4.jpeg",
    about:
      "I am a Deputy General Manager at NTPC Limited, currently posted at NTPC Solapur. I have completed my B.E. in Electrical and Electronics Engineering and an M.Tech. in Power Electronics and Drives. Over the past 15 years, I have gained diverse experience in Main Plant Operations, Ash Handling Plant Maintenance, and Coal Handling Plant Maintenance across NTPC Simhadri, Farakka, and Solapur.",
  },
  {
    id: "5",
    name: "R.V. Kiran",
    designation: "DGM (Ash Handling), PGDM(E) Pursuing",
    image: "/assets/images/students/5.jpg",
    about:
      "I am DGM (Ash Handling Department) with experience in Operation & Ash Handling Maintenance of Thermal Power Plant. My interests include Green Hydrogen, applying quantitative methods, and programming.",
  },
  {
    id: "6",
    name: "Guru Prasad Deheri",
    designation:
      "Senior Manager, Civil Construction Department, Lara Super Thermal Power Projects, NTPC Ltd",
    image: "/assets/images/students/6.jpg",
    about:
      "I am currently working as Senior Manager in Civil Construction Department, Projects Group of NTPC Lara looking after Stage-II Township erection works and contract closing activity since May-2024. Prior to this, I worked at NTPC Darlipali for 6 years in Township construction and CSR works and 6 years in NTPC Kaniha engaged in coal coordination cell of Fuel Management group. I have expertise in civil contract execution, quality management, bill processing, correspondence, time extension, quantity deviation, contract closing procedures, and SAP systems.",
  },
  {
    id: "7",
    name: "Roshan Kumar Singh",
    designation: "Senior Manager, NTPC Ltd. | Executive Student, NSB",
    image: "/assets/images/students/7.jpg",
    about:
      "Senior Manager at NTPC Ltd. Vindhyachal, Power Manager with experience in commissioning, O&M, and commercial functions at Supercritical and sub-critical thermal units. Certified Energy Auditor and currently pursuing Executive PG Diploma from NSB.",
  },
  {
    id: "8",
    name: "Arun Tiwary",
    designation: "Deputy General Manager – Projects, NTECL Vallur (NTPC)",
    image: "/assets/images/students/8.jpg",
    about:
      "I am a Deputy General Manager – Projects at NTECL Vallur (NTPC) with 17+ years of experience in erection and commissioning of C&I systems across thermal power stations. I am PMP-certified with expertise in DCS platforms, plant commissioning, and energy management. Presently pursuing PGDM (Energy Management) at NSB.",
  },
  {
    id: "9",
    name: "Robin Singh Katariya",
    designation: "Manager (Operation), NTPC Limited",
    image: "/assets/images/students/9.jpeg",
    about:
      "I am Manager at NTPC Limited with expertise in commissioning and operation of supercritical thermal power plants. My interests include power sector transformation, sustainable energy, operational excellence, and strategic management.",
  },
  {
    id: "10",
    name: "Anuj Sankaran K",
    designation: "Sr Manager, NTPC",
    image: "/assets/images/students/10.jpeg",
    about:
      "I am a Senior Manager at NTPC with over 15 years of experience in combined cycle and solar power plant operations. My professional interests include energy system modelling, renewable energy integration, power system optimization, and application of AI and data analytics to improve operational efficiency.",
  },
  {
    id: "11",
    name: "Shivam Mishra",
    designation: "Sr Manager, O&M-MM, NTPC Farakka",
    image: "/assets/images/students/11.jpg",
    about:
      "I am a Senior Manager at NTPC-Farakka, working in the field of mechanical maintenance. In my current work profile, I am looking after mill maintenance activities.",
  },
  {
    id: "12",
    name: "A Anoop Kumar",
    designation: "DGM (Operation)",
    image: "/assets/images/students/12.jpg",
    about:
      "I am DGM Operation with experience in 500MW units of BHEL and Ansaldo once-through boilers along with certifications of BOE and Energy Auditor. My present focus after joining NSB for PGDM(E) is to learn about prospects of the electricity market undergoing energy transition and apply it for future diversified roles at NTPC.",
  },
  {
    id: "13",
    name: "Mayank Kumar Singh",
    designation: "Deputy General Manager, NTPC Ltd.",
    image: "/assets/images/students/13.jpg",
    about:
      "Mayank Kumar Singh is a Deputy General Manager (Control & Instrumentation) at NTPC with 17 years of experience in erection, commissioning, operation, and maintenance of large thermal power plants. He has led critical initiatives in plant reliability, automation, and process optimization.",
  },
  {
    id: "14",
    name: "Yoginderkumar J",
    designation: "Senior Manager, NTPC Limited",
    image: "/assets/images/students/14.jpg",
    about:
      "Senior Manager at NTPC Limited with 15 years of experience, including 12 years in thermal power plant operations, 2 years in infrastructure development, and one year of nuclear power training at NPCIL. Currently pursuing PGDM(E) at NSB to strengthen strategic management and leadership capabilities.",
  },
];

const page = () => {
  return (
    <div>
      <Breadcrump currentPage="Students" parentPage="Students" />
      <section className="rs-postbox-area section-space-top">
        <div className="container">
          <div className="row g-5 ">
            <div className=" rs-blog-two has-theme-green">
              <div className="rs-postbox-wrapper row">
                {studentsDetails.map((item, index) => {
                  return (
                    <article className="rs-postbox-item col-md-4 " key={index}>
                      {/* <div className="rs-team-four">
                          <div className="rs-team-thumb">
                        <Link href={""}>
                          <Image
                            src={item.image}
                            width={200}
                            height={50}
                            alt="NSB Logo"
                            priority
                          />
                        </Link>
                      </div>
                        </div> */}
                      <div
                        className="position-relative overflow-hidden rounded-4"
                        style={{
                          height: "200px",
                        }}
                      >
                        {/* Blurry Background Image */}
                        <Image
                          src={item.image}
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
                            src={item.image}
                            alt="PGDM Energy Management"
                            fill
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>

                      <div className="rs-postbox-content px-2 pt-10">
                        <div className="rs-postbox-meta-list flex-column justify-content-start align-items-start">
                          <span className="rs-postbox-meta-item fw-bold">
                            <i className="ri-user-3-line"></i>
                            {item.name}
                          </span>
                          <span className="rs-postbox-meta-item fw-bold align-items-start">
                            <i className="ri-briefcase-4-line"></i>
                            {item.designation}
                          </span>
                        </div>
                        {/* <h6 className="rs-postbox-title fs-3 ">
                 {item.about }
                      </h6> */}
                        <div className="rs-postbox-text mt-10">
                          <p>{item.about}</p>
                        </div>
                      </div>
                    </article>
                    // <>
                    // <div className="col-md-6 col-lg-3 col-12" key={index}>
                    //     <TeamCard2 data={item} />
                    //   </div>
                    // </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
