import React from "react";
import Image from "next/image";
import './css/Mission.css'
const Mission = () => {
  return (
    <>
      <section className="rs-overview-area section-space-bottom rs-overview-two pb-0 mission-vission-height">
        <div className="container">
          <div className="row">
            <div className="rs-overview-wrapper d-flex gap-3 flex-lg-row flex-md-row flex-column">
              <div className="rs-overview-content-wrapper col-md-6 " style={{ height:"fit-content" }}>
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
                              Vision
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
                                  To be a world class school of knowledge
                                  creation and dissemination in Power Sector.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rs-accordion-item">
                          <h5 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Mission
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
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExampleOne"
                          >
                            <div className="accordion-body">
                              <div className="rs-overview-desc-wrapper">
                                <p>To serve the sector through relevant</p>
                                <div className="rs-overview-desc-list">
                                  <div className="rs-overview-desc-list-item">
                                    Teaching
                                  </div>
                                  <div className="rs-overview-desc-list-item">
                                    Research
                                  </div>
                                  <div className="rs-overview-desc-list-item">
                                    Consultancy
                                  </div>
                                  <div className="rs-overview-desc-list-item">
                                    Ethical Management
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
              <div className="rs-overview-thumb col-md-6">
                <Image
                  src="assets/images/overview/overview-thumb-02.webp"
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
