import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import Link from "next/link";
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
                <div
                  className="position-relative overflow-hidden rounded-4"
                  style={{
                    height: "450px",
                  }}
                >
                  {/* Blurry Background Image */}
                  <Image
                    src="/assets/images/program/executive.jpeg"
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
                      src="/assets/images/program/executive.jpeg"
                      alt="PGDM Executive"
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="rs-faq-wrapper mt-40">
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
                              Programme Overview
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
                                  The 18-month PGDM (Executive) programme
                                  includes classroom learning and project work;
                                  designed for working professionals. The PGDM
                                  (Executive) programme is meant for people
                                  fresh out of graduation; with industry-based
                                  internships for hands on learning.
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
                              data-bs-target="#collapseTwo"
                              aria-expanded="true"
                              aria-controls="collapseTwo"
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
                            id="collapseTwo"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExampleOne"
                          >
                            <div className="accordion-body">
                              <div className="rs-history-list-wrapper row">
                                <p className="mb-0">
                                  A case – oriented pedagogy and other logical
                                  frameworks enhance awareness application
                                  perspectives. Lectures, seminars, management
                                  games, role plays, industrial visits, group
                                  exercises, live research projects, and
                                  simulations are part of the repertoire to
                                  build capacities.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rs-accordion-item col-lg-12 col-md-12 col-12">
                          <h5 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="true"
                              aria-controls="collapseThree"
                            >
                              Eligibility Criteria and Admission Process
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
                            id="collapseThree"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExampleOne"
                          >
                            <div className="accordion-body">
                              <div className="rs-history-list-wrapperr row">
                                <p className="rs-history-desc">
                                  For more details:{" "}
                                  <Link
                                    href="/admission"
                                    className="blue-color"
                                  >
                                    here
                                  </Link>
                                </p>
                                <p className="">
                                  The two – week <span className="fw-bold">Global Immersion Programme</span> as
                                  part of the PGDM Executive programme provides
                                  the opportunity to learn in culturally diverse
                                  contexts within a globalized inter- dependent
                                  business environment. Past destinations
                                  included such renowned institutions as the
                                  Nanyang Technical University in Singapore,
                                  Judge Business School, Cambridge University,
                                  University of Maribor, Slovenia, ESCP in
                                  Madrid and Paris; the RMIT University,
                                  Melbourne; University of Melbourne; La Trobe
                                  University and Monash University, Australia.
                                  Interaction on site and with experts provide
                                  for an enriching experience.
                                </p>
                                <h6>For Admission related queries, contact:</h6>

                                <address className="mb-0 text-muted lh-lg">
                                  <strong>Chairperson Admission</strong>
                                  <br />
                                  NTPC School of Business Plot No. 5-14, Sector
                                  16-A,
                                  <br />
                                  Noida – 201301 (U.P.)
                                  <br />
                                  <div className="mt-3">
                                    <strong>Phone:</strong>{" "}
                                    <a
                                      href="tel:+919958880671"
                                      className="text-decoration-none"
                                    >
                                      +91-9958880671
                                    </a>
                                  </div>
                                  <div>
                                    <strong>Email:</strong>{" "}
                                    <a
                                      href="mailto:admission@nsb.ac.in"
                                      className="text-decoration-none"
                                    >
                                      admission@nsb.ac.in
                                    </a>
                                  </div>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rs-accordion-item col-lg-12 col-md-12 col-12">
                          <h5 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              Programme Fee and Financial Assistance
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
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExampleOne"
                          >
                            <div className="accordion-body">
                              {/* Table */}
                              <div className="rs-deadline-table-wrapper table-responsive mb-30 rs-deadline-one">
                                <div className="rs-deadline-table-item">
                                  <table className="rs-deadline-table-inner">
                                    <thead>
                                      <tr>
                                        <th>Programme Details</th>
                                        <th>Indian Students</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          Application Form (Non-Refundable)
                                        </td>
                                        <td>
                                          INR 1,500/- <br />
                                          INR 750/- (For SC/ST & PH Category
                                          Only)
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Total Programme Fee</td>
                                        <td>INR 18,30,000/-*</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              <p className="rs-history-desc mb-10">
                                <strong>
                                  *Exclusive of Rs. 30,000 security amount
                                </strong>{" "}
                                (refundable after successful completion of the
                                course).
                              </p>

                              <p className="rs-history-desc mb-10">
                                The fees are payable directly to NTPC School of
                                Business via ICICI payment gateway or through
                                bank transfer to the following account:
                              </p>

                              <div className="mb-4">
                                <p className="mb-1">
                                  <strong>A/C No.:</strong> 62348556744
                                </p>
                                <p className="mb-1">
                                  <strong>Bank:</strong> State Bank of India
                                </p>
                                <p className="mb-0">
                                  <strong>IFSC Code:</strong> SBIN0031811
                                </p>
                              </div>

                              <h6 className="mb-3">Bank Loan Facility</h6>
                              <p className="rs-history-desc mb-10">
                                NSB aims to provide equal opportunity to all the
                                eligible candidates for pursuing PGDM
                                (Executive) program. The assistance is provided
                                to the candidates in availing loans from banks.
                              </p>

                              <h6 className="mb-3">Scholarship</h6>
                              <p className="rs-history-desc mb-10">
                                NSB offers financial assistance to the students
                                through scholarship schemes. The scholarship is
                                provided to the students under the following
                                categories:
                              </p>

                              <ul className="ps-3 mb-0">
                                <li className="mb-2">
                                  NSB Top Ranker in Admission Scholarship
                                </li>
                                <li className="mb-2">
                                  NSB Merit Based Scholarship
                                </li>
                                <li className="mb-2">
                                  NSB Scholarship for Defence Services Children
                                </li>
                                <li className="mb-2">
                                  Tuition Fee Waiver for Candidates from BPL
                                  Section
                                </li>
                                <li>
                                  Tuition Fee Waiver for Candidates from EWS
                                  Category
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="rs-accordion-item col-lg-12 col-md-12 col-12">
                          <h5 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="true"
                              aria-controls="collapseSix"
                            >
                              Course Curriculum
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
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExampleOne"
                          >
                            <div className="accordion-body">
                              <div className="rs-history-list-wrapper">
                                <p>
                                  The Course Curriculum comprises core and
                                  elective courses focused on the rapidly
                                  evolving energy sector and management
                                  disciplines that interface with it.
                                  Appropriate spread and depth of contents are
                                  ensured by NSB faculty, industry
                                  practitioners, subject matter experts from
                                  other reputed institutions, and professionals
                                  associated with leading global energy
                                  organizations.
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
