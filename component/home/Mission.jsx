import React from "react";
import Image from "next/image";
import "./css/Mission.css";
const Mission = () => {
  return (
    <>
      <section className="rs-overview-area section-space-bottom rs-overview-two mission-vission-height">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="rs-overview-wrapper d-flex gap-3 flex-lg-row flex-md-row flex-column align-items-center">
              <div
                className="rs-overview-content-wrapper col-md-6 "
                style={{ height: "fit-content" }}
              >
                <div className="rs-faq-wrapper">
                  <div className="rs-faq-content rs-accordion-two">
                    <div className="accordion-wrapper">
                      <div className="accordion" id="accordionExampleOne">
                        <div className="rs-accordion-item">
                          <h5 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Vision & Mission
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
                              <div className="rs-overview-desc-wrapper">
                                <p>
                                  NSB’s vision and mission are inspired by
                                  NEARS’s sagacity infused by its founders. NSB
                                  accordingly envisions a society that is
                                  knowledge and skill empowered on all aspects
                                  of production and use of energy to secure a
                                  sustainable future for humanity. The School’s
                                  mission is to build capacities of all
                                  concerned stakeholders to design, implement
                                  and secure integrated benefits of energy –
                                  centric development. Academic, research and
                                  technical support for policies, plans,
                                  programmes and projects will be the mainstays
                                  of interventions on all thrust areas at the
                                  interface of energy and development. Some
                                  important thrust areas include business models
                                  to define and propel transitions, mechanisms
                                  to internalize externalities, regulations,
                                  market and institutional mechanisms. The
                                  School takes note also of such emerging areas
                                  of management as geopolitics and the dynamics
                                  of transitions that will also ensure equity
                                  and nature stewardship.
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
              <div className="rs-overview-thumb col-md-6">
                <Image
                  src="/assets/images/breadcrump/4.jpeg"
                  width={650}
                  height={300}
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
