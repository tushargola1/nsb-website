import TeamCard2 from "@/component/Cards/TeamCard2";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import React from "react";

const page = () => {
  const governingBodyData = [
    {
      id: 1,
      image: "/assets/images/faculty/anil.png",
      name: "Shri Anil Kumar Jadli",
      position: "President (NEARS)",
    },
    {
      id: 2,
      image: "/assets/images/about/nears/gireesh.webp",
      name: "Dr. Gireesh Chandra Tripathi",
      position: "Secretary",
    },
    {
      id: 3,
      image: "/assets/images/faculty/Rajeev.jpeg",
      name: "Shri Rajeev Choudhary",
      position: "Treasurer",
    },
  ];
  return (
    <>
      <Breadcrump currentPage={"About NEARS"} parentPage={"About"} />
      <section className="rs-about-area section-space bg-primary rs-about-seven">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-12 col-lg-12">
              <div className="rs-about-wrapper margin-15">
                <h2 className="section-title has-theme-blue mb-20">
                  NTPC Education & Research Society{" "}
                  <span className="blue-color">NEARS</span>
                </h2>
                <p className="section-desc mb-0">
                  NTPC Education & Research Society (NEARS) has been promoted by
                  NTPC Ltd, as its permanent member, the leading power utility
                  in the country: with the purpose of promoting efficiency and
                  excellence by creating and disseminating knowledge in the
                  domain of energy and power sector. NEARS is guiding through
                  its school i.e. NTPC School of Business which is AICTE
                  recognized to achieve its fundamental objectives, which
                  include;
                </p>

                <ul className="rs-info-list ms-4 pt-10">
                  <li>
                    To promote the diffusion of useful knowledge and
                    understanding in management education in the domain of power
                    and energy.
                  </li>
                  <li>
                    To award degrees/diplomas, certificates, organize seminars/
                    conferences/ colloquia etc. in its area of expertise.
                  </li>
                  <li>
                    To help in the schemes of advancement of education and for
                    development of the character of students and to educate them
                    in physical culture.
                  </li>
                </ul>
                <h2 className="section-title has-theme-blue mb-20 ps-0 mt-30">
                  Aims And Objects: <span className="blue-color">NEARS</span>
                </h2>
                <p className="section-desc mb-0">
                  The aims and objects for which the Society is established are
                  as under:
                </p>

                <ul className="rs-info-list ms-4 pt-10">
                  <li>
                    To promote the diffusion of useful knowledge and
                    understanding in the area of education and provide
                    facilities for instruction in management education with a
                    comprehensive emphasis on the energy and power sectors.
                  </li>
                  <li>
                    To undertake and conduct study courses in management, award
                    degrees, diplomas, and certificates, organize conferences,
                    seminars, workshops, lectures, and institute medals, and
                    scholarships.
                  </li>
                  <li>
                    To organize training programmes for the extension of
                    knowledge in modern management, distance education,
                    e-learning, skill up gradation/development, seminars and
                    symposia on contemporary issues related to energy and power
                    sectors.
                  </li>
                  <li>
                    To affiliate and cooperate with any organization having
                    similar aims either at the national or international level;
                    prepare databases for benchmark-setting in different
                    domains, undertake projects for evolving systems and
                    procedures.
                  </li>
                  <li>
                    To provide facilities for the exchange of opinions and views
                    on management practices and trends and for stimulating
                    thoughts and efforts in developing an optimum solutions to
                    management problems through lectures, conferences, plant
                    visits, in-plant training, and training courses.
                  </li>
                </ul>
                <h2 className="section-title has-theme-blue mb-20 ps-0 mt-30">
                  <span className="blue-color">Governing</span> Body
                </h2>
                <div className=" row align-items-center justify-content-center gap-lg-5 gy-3">
                  {/* <div className="rs-team-details-thumb-wrapper">
                                <div className="rs-team-details-author-thumb">
                                       <Image
                                                  src="/assets/images/about/nears/shri-anil.jpeg"
                                                  width={200}
                                                  height={70}
                                                  alt="NSB Logo"
                                                  priority
                                                />
                                </div>
                                <div className="rs-team-details-author-info text-center">
                                    <h5 className="rs-team-details-author-name">Leslie Alexander</h5>
                                    <span className="rs-team-details-author-desig">Teaching Assistant (TA)</span>
                                </div>
                            </div>
                  <div className="rs-team-details-thumb-wrapper">
                                <div className="rs-team-details-author-thumb">
                                       <Image
                                                  src="/assets/images/about/nears/gireesh.webp"
                                                  width={200}
                                                  height={70}
                                                  alt="NSB Logo"
                                                  priority
                                                />
                                </div>
                                <div className="rs-team-details-author-info text-center">
                                    <h5 className="rs-team-details-author-name">Leslie Alexander</h5>
                                    <span className="rs-team-details-author-desig">Teaching Assistant (TA)</span>
                                </div>
                            </div> */}
                  {governingBodyData.map((item, id) => {
                    return (
                      <>
                        <div className="col-md-6 col-lg-3 col-12" key={id}>
                          <TeamCard2 data={item} />
                        </div>
                      </>
                    );
                  })}

                  <h2 className="section-title has-theme-blue mb-20  mt-30">
                    Important <span className="blue-color">Documents</span>
                  </h2>
                  <div className="rs-program-details-wrapper">
                    <div className="rs-program-details-tab-wrapper d-flex flex-lg-row flex-md-row flex-column gap-4">
                      <div className="rs-program-btn text-center w-100">
                        <a
                          className="rs-btn has-icon has-theme-cyan hover-cyan"
                          href="https://drive.google.com/file/d/1BsAEnWzcXiTAcIm_wkqnn52sXWv101Sv/view?usp=share_link"
                          target="_blank"
                        >
                          <span className="btn-text-wrap">
                            <span className="text-default">
                              Memorandum of Association
                            </span>
                            <span className="text-hover">
                              Memorandum of Association
                            </span>
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
                      <div className="rs-program-btn text-center w-100">
                        <a
                          className="rs-btn has-icon has-theme-cyan hover-cyan"
                          href="https://drive.google.com/file/d/1dO30fbnBlp395qpGTtfKgtjTxJufJlLh/view?usp=sharing"
                          target="_blank"
                        >
                          <span className="btn-text-wrap">
                            <span className="text-default">
                              Gender Equity Message from Secretary
                            </span>
                            <span className="text-hover">
                              Gender Equity Message from Secretary
                            </span>
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
                    <h2 className="section-title has-theme-blue mb-20 ps-0 mt-30">
                      Registered <span className="blue-color">Office</span>
                      <div className="mt-30">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.484990121438!2d77.2353080752872!3d28.585223875690616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3005b58ed6f%3A0x6e3581ff7a3296cc!2sScope%20complex%20parking!5e0!3m2!1sen!2sin!4v1785403266936!5m2!1sen!2sin"
                          width="100%"
                          height="450"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                      </div>
                    </h2>
                  </div>
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
