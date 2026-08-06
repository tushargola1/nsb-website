import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import React from "react";
import { FacultyPublication } from "@/data/FacultyPublication";

const page = () => {
  return (
    <div>
      <Breadcrump currentPage="Faculty Publications" parentPage="Research" />
      <section className="rs-history-area section-space bg-primary rs-history-one disc-remove">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-12 col-lg-12">
              <div className="rs-history-wrapper">
                <div className="rs-faq-wrapper mt-10">
                  <div className="rs-faq-content rs-accordion-two">
                    <div className="accordion-wrapper ">
                      <div className="accordion row" id="accordionExampleOne">
                        {FacultyPublication.map((section, sectionIndex) => (
                          <div
                            className="rs-accordion-item col-lg-12 col-md-12 col-12"
                            key={section.id}
                          >
                            <h5
                              className="accordion-header"
                              id={`heading${section.id}`}
                            >
                              <button
                                className={`accordion-button ${
                                  sectionIndex !== 0 ? "collapsed" : ""
                                }`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${section.id}`}
                                aria-expanded={sectionIndex === 0}
                                aria-controls={`collapse${section.id}`}
                              >
                                {section.title}

                                <span className="accordion-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 11 15"
                                  >
                                    <path d="M0.0175781 9.56403V8.72934C2.97994 8.56955 4.53369 10.3852 4.98798 11.3026V0.54895H5.89635V11.3026C7.11473 9.10081 9.47347 8.55811 10.907 8.73049V9.55706C7.3714 9.19949 5.90086 12.8809 5.89635 14.4554H4.99641C4.46504 9.88737 1.14729 9.38262 0.0175781 9.56403Z" />
                                  </svg>
                                </span>
                              </button>
                            </h5>

                            <div
                              id={`collapse${section.id}`}
                              className={`accordion-collapse collapse ${
                                sectionIndex === 0 ? "show" : ""
                              }`}
                              data-bs-parent="#accordionExampleOne"
                            >
                              <div className="accordion-body">
                                <ol className="ps-3 mb-0">
                                  {section.data.map((publication) => (
                                    <li key={publication.id} className="mb-4">
                                      <p className="rs-history-desc mb-0">
                                        <strong>
                                          {publication.authors} (
                                          {publication.year}).
                                        </strong>{" "}
                                        {publication.title}.{" "}
                                        <em>{publication.journal}</em>
                                        {publication.volume && (
                                          <>
                                            ,{" "}
                                            <strong>
                                              {publication.volume}
                                            </strong>
                                          </>
                                        )}
                                        {publication.pages && (
                                          <>, pp. {publication.pages}</>
                                        )}
                                        {publication.status && (
                                          <>, {publication.status}</>
                                        )}
                                        {publication.publisher && (
                                          <>
                                            {" "}
                                            <strong>
                                              ({publication.publisher})
                                            </strong>
                                          </>
                                        )}
                                        {publication.doi && (
                                          <>
                                            <br />
                                            <strong>DOI:</strong>{" "}
                                            <a
                                              href={publication.doi}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="blue-color"
                                            >
                                              {publication.doi}
                                            </a>
                                          </>
                                        )}
                                      </p>
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          </div>
                        ))}
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
