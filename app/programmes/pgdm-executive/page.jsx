import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrump currentPage="PGDM Executive" parentPage="Programmes" />
      <section className="rs-history-area section-space bg-primary rs-history-one">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-12 col-lg-12">
              <div className="rs-history-wrapper margin-15">
                <h2 className="section-title has-theme-blue mb-20">
                  PGDM (Executive)
                </h2>

                <div className="rs-faq-wrapper">
                  <div className="rs-faq-content rs-accordion-two">
                    <div className="accordion-wrapper ">
                      <div className="accordion row" id="accordionExampleOne">
                        <div className="rs-accordion-item col-lg-6 col-md-12 col-12">
                          <h5 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Program Overview
                              <span className="accordion-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 11 15"
                                >
                                  <path d="M0.0175781 9.56403V8.72934C2.97994 8.56955 4.53369 10.3852 4.98798 11.3026V0.54895H5.89635V11.3026C7.11473 9.10081 9.47347 8.55811 10.907 8.73049V9.55706C7.3714 9.19949 5.90086 12.8809 5.89635 14.4554H4.99641C4.46504 9.88737 1.14729 9.38262 0.0175781 9.56403Z"></path>
                                </svg>
                              </span>
                            </button>
                          </h5>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExampleOne"
                          >
                            <div className="accordion-body">
                              <div className="rs-history-list-wrapper">
                                <p>
                                  PGDM (Executive) program includes twelve
                                  months of classroom learning and six months of
                                  project work. The PGDM (Executive) program is
                                  best suited for working professionals to add
                                  value to their career and prepare visionary
                                  leaders for the energy sector. Experience
                                  sharing seminars for peer learning and live
                                  industry projects under expert guidance
                                  enhance learning outcomes. These activities
                                  help analyze situations and apply skills to
                                  real business situations. PGDM (Executive)
                                  program enhances awareness and skill levels to
                                  comprehend enactments, related market and
                                  institutional dynamics, and devise
                                  interventions related to the energy sector.
                                  Advantages of learning theoretical and
                                  practical aspects of management from
                                  professors of IIMA and NSB, experienced
                                  professionals and peer group learning. The
                                  programme includes rigorous course work and
                                  enriches learning through project work.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rs-accordion-item col-lg-6 col-md-12 col-12">
                          <h5 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Pedagogy
                              <span className="accordion-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 11 15"
                                >
                                  <path d="M0.0175781 9.56403V8.72934C2.97994 8.56955 4.53369 10.3852 4.98798 11.3026V0.54895H5.89635V11.3026C7.11473 9.10081 9.47347 8.55811 10.907 8.73049V9.55706C7.3714 9.19949 5.90086 12.8809 5.89635 14.4554H4.99641C4.46504 9.88737 1.14729 9.38262 0.0175781 9.56403Z"></path>
                                </svg>
                              </span>
                            </button>
                          </h5>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExampleOne"
                          >
                            <div className="accordion-body">
                              <div className="rs-history-list-wrapper row">
                                <p className="mb-0">
                                  The major part of the course is delivered
                                  through case-based pedagogy. This pedagogy
                                  enables students to understand the contextual
                                  insights of business scenarios and the
                                  appropriate application of theoretical
                                  knowledge to real business situations.
                                </p>
                                <p className="mb-0">
                                  Case discussions are supplemented with guest
                                  lectures, seminars, management games, role
                                  plays, industrial visits, group exercises,
                                  live research projects, and simulations.
                                </p>
                                <p className="mb-0">
                                  At the end, students are prepared to reflect
                                  on the alignment between theoretical knowledge
                                  and practical scenarios and bridge the gap
                                  between classroom learning and real business
                                  challenges.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
