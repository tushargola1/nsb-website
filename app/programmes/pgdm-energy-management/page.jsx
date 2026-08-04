"use client";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import { mainImg } from "@/public/assets/images/program/energy-management.jpeg";
import Maintenance from "@/component/Maintenance";

const page = () => {
  const isShow = false;

  if (!isShow) {
    return (
      <>
        <Breadcrump
          currentPage="PGDM Energy Management"
          parentPage="Programmes"
        />
        <Maintenance />
      </>
    );
  }

  return (
    <div>
      {isShow && (
        <>
          <Breadcrump
            currentPage="PGDM Energy Management"
            parentPage="Programmes"
          />
          <section className="rs-history-area section-space bg-primary rs-history-one">
            <div className="container">
              <div className="row g-5">
                <div className="col-xl-12 col-lg-12">
                  <div className="rs-history-wrapper margin-15">
                    <h2 className="section-title has-theme-blue mb-20">
                      PGDM Energy Management
                    </h2>
                    <div
                      className="position-relative overflow-hidden rounded-4"
                      style={{
                        height: "450px",
                      }}
                    >
                      {/* Blurry Background Image */}
                      <Image
                        src="/assets/images/program/energy-management.jpeg"
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
                          src="/assets/images/program/energy-management.jpeg"
                          alt="PGDM Energy Management"
                          fill
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-20">
                      <h6 class="page-sidebar-title mb-20">
                        About PGDM (Energy Management)
                      </h6>
                      <p class="section-desc mb-10">
                        NSB’s energy management courses are designed to enrich
                        management learning and practice at all levels of
                        decision making in the energy domain with implications
                        for holistic development of the Indian economy. This
                        includes deep insights about concepts, practices and
                        skills to pursue a career in the continually evolving
                        energy sector.
                      </p>
                      <p class="section-desc">
                        It is accordingly committed to the advancement of
                        management education, research, training and consultancy
                        for the energy sector. NSB runs two AICTE approved
                        programs, namely, the Two year Post Graduate Diploma in
                        Management – Energy Management (PGDM-EM) and Eighteen
                        months Post Graduate Diploma-Executive (PGDM-E).
                      </p>
                    </div>
                    <div className="mt-20">
                      <h6 class="page-sidebar-title mb-20">
                        WHY PGDM (Energy Management)
                      </h6>
                      <p class="section-desc mb-10">
                        It recognizes the centrality of energy for inclusive
                        growth driven through interplay of regulations, market
                        instruments and institutional mechanisms. An equally
                        important opportunity is to respond to India’s call to
                        create and consolidate her niche in related areas of
                        management in the community of nations globally. This
                        includes energy and resource modelling, variety of
                        externalities, economics, trade, environmental
                        management, technology, equity, justice, law, management
                        and communication systems and community interfaces duly
                        building capacities of all related stakeholders.{" "}
                      </p>
                      <p class="section-desc">
                        The course embeds well defined and emerging learnings on
                        these and related facets of management relevant at the
                        regional, national, and global levels. It helps emerging
                        professionals with a 360 degree perspective, essential
                        to capture career opportunities and importantly fulfills
                        aspiration of businesses of the nation and humanity as a
                        whole.
                      </p>
                    </div>

                    <div className="rs-faq-wrapper mt-30">
                      <div className="rs-faq-content rs-accordion-two">
                        <div className="accordion-wrapper ">
                          <div
                            className="accordion row"
                            id="accordionExampleOne"
                          >
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
                                      NTPC limited (a Maharatna company of
                                      Government of India, and India’s largest
                                      energy conglomerate) promotes the NTPC
                                      Education and Research Society (NEARS).
                                      The NTPC School of Business (NSB) is under
                                      the aegis of the NEARS was established in
                                      2014. It has the distinction of being the
                                      pioneer in energy management education,
                                      and is positively impacting the energy
                                      sector through knowledge creation and
                                      dissemination.
                                      <br />
                                      It is accordingly committed to the
                                      advancement of management education,
                                      research, training and consultancy for the
                                      energy sector. NSB runs two AICTE approved
                                      programs, namely, the Two year Post
                                      Graduate Diploma in Management – Energy
                                      Management (PGDM-EM) and Eighteen months
                                      Post Graduate Diploma-Executive (PGDM-E).
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
                                      The major part of the course is delivered
                                      through case based pedagogy. Such pedagogy
                                      enables the students to understand the
                                      contextual insights of business scenario,
                                      and the appropriate application of
                                      theoretical knowledge to real business
                                      situations. Case discussions are
                                      supplemented with guest lectures,
                                      seminars, management games, role plays,
                                      industrial visits, group exercise, live
                                      research projects, simulation. At the end,
                                      the students are prepared to reflect the
                                      alignment between theoretical knowledge
                                      and practical scenario and bridge between
                                      classroom learning and real business
                                      challenges.
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
                                  Eligibility Critcria and Admission Process
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
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExampleOne"
                              >
                                <div className="accordion-body">
                                  <div className="rs-history-list-wrapper row">
                                    <h6 className="mb-3">
                                      Eligibility Criteria:
                                    </h6>

                                    <ul className="ps-3 mb-4 energy-management-li">
                                      <li className="mb-2 ">
                                        <p className="rs-history-desc mb-0">
                                          The applicants must have a valid
                                          CAT/XAT/GMAT/Other Management Score.
                                        </p>
                                      </li>

                                      <li className="mb-2">
                                        <p className="rs-history-desc mb-0">
                                          Graduation in any discipline with 50%
                                          and above marks (or an equivalent
                                          CGPA) from any recognized university
                                          (5% relaxation for SC/ST/DAP*).
                                        </p>
                                      </li>

                                      <li>
                                        <p className="rs-history-desc mb-0">
                                          Graduation final year students
                                          awaiting results are also eligible to
                                          apply.
                                        </p>
                                      </li>
                                    </ul>

                                    <p className="rs-history-desc mb-3">
                                      <strong>*</strong> Scheduled Castes (SC),
                                      Scheduled Tribes (ST), Differently-abled
                                      Persons (DAP).
                                    </p>

                                    <p className="rs-history-desc">
                                      For more details:{" "}
                                      <a
                                        href="https://nsb.ac.in/admissions-in-pgdm-energy-management/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="blue-color"
                                      >
                                        https://nsb.ac.in/admissions-in-pgdm-energy-management/
                                      </a>
                                    </p>

                                    <h6 className="mb-3">
                                      For Admission related queries, contact:
                                    </h6>

                                    <address className="mb-0 text-muted lh-lg">
                                      <strong>Chairperson Admission</strong>
                                      <br />
                                      NTPC School of Business
                                      <br />
                                      Plot No. 5-14, Sector 16-A,
                                      <br />
                                      Noida – 201301 (U.P.)
                                      <br />
                                      <div className="mt-3">
                                        <strong>Phone:</strong>{" "}
                                        <a
                                          href="tel:+919319888448"
                                          className="text-decoration-none"
                                        >
                                          +91-9319888448
                                        </a>
                                        ,{" "}
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
                                  Program Fee and Financial Assistance
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
                                            <th>Program Details</th>
                                            <th>Indian Students</th>
                                            <th>NRI / Foreign Students</th>
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
                                            <td>US$ 50</td>
                                          </tr>
                                          <tr>
                                            <td>Total Programme Fee</td>
                                            <td>INR 16,00,000/-*</td>
                                            <td>US$ 30,000*</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                                  <p className="rs-history-desc mb-3">
                                    <strong>
                                      *Exclusive of Rs. 30,000 security amount
                                    </strong>{" "}
                                    (refundable after successful completion of
                                    the course).
                                  </p>

                                  <p className="rs-history-desc mb-3">
                                    The fees are payable directly to NTPC School
                                    of Business via ICICI payment gateway or
                                    through bank account transfer.
                                  </p>

                                  <div className="mb-4">
                                    <p className="mb-1">
                                      <strong>A/C No.:</strong> 003105038274
                                    </p>
                                    <p className="mb-1">
                                      <strong>Bank:</strong> ICICI Bank, Sector
                                      18, Noida (U.P.) – 201301
                                    </p>
                                    <p className="mb-0">
                                      <strong>IFSC Code:</strong> ICIC0000031
                                    </p>
                                  </div>

                                  <h6 className="mb-3">Bank Loan Facility</h6>

                                  <p className="rs-history-desc mb-3">
                                    NSB aims to provide equal opportunity to all
                                    the eligible candidates for pursuing the
                                    PGDM (Energy Management) program. Assistance
                                    is provided to candidates in availing
                                    education loans from banks.
                                  </p>

                                  <p className="mb-2">
                                    <strong>Education Loan Portal:</strong>{" "}
                                    <a
                                      href="https://pmvidyalaxmi.co.in"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="blue-color"
                                    >
                                      https://pmvidyalaxmi.co.in
                                    </a>
                                  </p>

                                  <p className="mb-2">
                                    <strong>IDFC First Bank:</strong> Mr. Anuj
                                    Kumar –{" "}
                                    <a
                                      href="tel:+919718193604"
                                      className="text-decoration-none"
                                    >
                                      +91-9718193604
                                    </a>
                                  </p>

                                  <p className="mb-0">
                                    <strong>Punjab Pratibha Scheme</strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="rs-accordion-item col-lg-12 col-md-12 col-12">
                              <h5
                                className="accordion-header"
                                id="headingThree"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseSix"
                                  aria-expanded="false"
                                  aria-controls="collapseSix"
                                >
                                  Scholarship Policy
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
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExampleOne"
                              >
                                <div className="accordion-body">
                                  <div className="rs-history-list-wrapper row">
                                    <p className="rs-history-desc mb-3">
                                      NSB offers financial assistance to
                                      students through scholarship schemes.
                                      Scholarships are available under the
                                      following categories:
                                    </p>

                                    <ul className="ps-3 energy-management-li mb-0">
                                      <li className="mb-2">
                                        <p className="rs-history-desc mb-0">
                                          Top Ranker's Admission Scholarship
                                          <span className="d-block text-muted small">
                                            (Applicable for applicants having
                                            CAT/XAT/GMAT score only)
                                          </span>
                                        </p>
                                      </li>

                                      <li className="mb-2">
                                        <p className="rs-history-desc mb-0">
                                          Merit-Based Scholarships
                                        </p>
                                      </li>

                                      <li className="mb-2">
                                        <p className="rs-history-desc mb-0">
                                          Scholarships for Children of Defence
                                          Personnel
                                        </p>
                                      </li>

                                      <li className="mb-2">
                                        <p className="rs-history-desc mb-0">
                                          Candidates Belonging to BPL Category
                                        </p>
                                      </li>

                                      <li>
                                        <p className="rs-history-desc mb-0">
                                          Scholarship for EWS Category
                                        </p>
                                      </li>
                                    </ul>
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
        </>
      )}
    </div>
  );
};

export default page;
