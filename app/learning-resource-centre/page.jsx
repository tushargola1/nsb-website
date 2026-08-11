"use client";

import React, { useState } from "react";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import FacultyTabs from "@/component/faculty/tabs";
import { OpenAccessData } from "@/data/OpenAccessData";
import { ResearchSupportData } from "@/data/ResearchSupportData";
import LogoCarousel from "@/component/common/logoCarousel/LogoCarousel";
import { ServicesFacilitiesData } from "@/data/ServicesFacilitiesData";
import { SubscribeDatabaseData } from "@/data/SubscribeDatabaseData";
import { TrailDatabaseData } from "@/data/TrailDatabaseData";

const LibraryPage = () => {
  const categories = [
    "About Library",
    "Services and Facilities",
    "E- Resources",
    "Rules and Regulations",
    "Open Access",
    "Research Support",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <main>
      <Breadcrump currentPage="Library" parentPage="Campus Life" />

      <div className="mt-40 mb-40">
        <FacultyTabs
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          category={categories}
        />
      </div>

      <section className="rs-history-area bg-primary">
        <div className="container">
          {/* ABOUT LIBRARY */}
          {activeCategory === "About Library" && (
            <>
              <h3 className="mb-10 mt-40">
                About <span className="blue-color">Library</span>
              </h3>

              <div className="rs-postbox-text ">
                <p className="mb-10">
                  The library is open from 9:00 AM to 6:00 PM (Monday to
                  Friday). Our mission is to facilitate convenient and user
                  friendly access to current, global and relevant information by
                  identifying, acquiring, organizing and retrieving information
                  in various formats (print & non print) to serve the
                  information needs the academic fraternity of IIMA to meet
                  their teaching, research, consulting, training and learning
                  requirements.
                </p>

                <p className="mb-10">
                  The strength of the library is its digital collection of 8
                  databases.
                </p>
              </div>

              <h3 className=" mb-10 mt-40">
                Our <span className="blue-color">Vision</span>
              </h3>

              <div className="rs-scholarships-item-wrapper">
                <div className="rs-scholarships-item">
                  <div className="rs-scholarships-list-wrapper">
                    <div className="rs-scholarships-list">
                      Create e-learning portal to access 24*7 digital knowledge
                      sources for NSB fraternity.
                    </div>

                    <div className="rs-scholarships-list">
                      To provide the right information to the right person at
                      the right time into the digital environment.
                    </div>

                    <div className="rs-scholarships-list">
                      To maintain copyright protection & IT Act for access to
                      digital content.
                    </div>

                    <div className="rs-scholarships-list">
                      To optimum utilization of the Library resources.
                    </div>

                    <div className="rs-scholarships-list">
                      To empower faculty, staff and students to create new
                      knowledge.
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* SERVICES AND FACILITIES */}
          {activeCategory === "Services and Facilities" && (
            <>
              <div className="mt-40">
                <LogoCarousel data={ServicesFacilitiesData} />
              </div>
            </>
          )}

          {/* E-RESOURCES */}
          {activeCategory === "E- Resources" && (
            <>
             <div>
                 <h3 className="mb-20 mt-40">
                Subscribed <span className="blue-color">Databases</span>
              </h3>

            <div className="mt-40">
                <LogoCarousel data={SubscribeDatabaseData} />
              </div>
                 <h3 className="mb-20 mt-40">
                Trail <span className="blue-color">Databases</span>
              </h3>

            <div className="mt-40">
                <LogoCarousel data={TrailDatabaseData} />
              </div>
             </div>
            </>
          )}

          {/* RULES AND REGULATIONS */}
          {activeCategory === "Rules and Regulations" && (
            <>
              <div className="rs-postbox-text ">
                <h6 className="blue-color mb-10">Book Circulation</h6>

                <div className="rs-scholarships-item-wrapper">
                  <div className="rs-scholarships-item">
                    <div className="rs-scholarships-list-wrapper">
                      <div className="rs-scholarships-list">
                        Books will be issued on presentation of the library card
                        along with the ID card.
                      </div>

                      <div className="rs-scholarships-list">
                        Students are instructed to check the books while
                        borrowing and they will be responsible for any type of
                        damage or mutilation noticed at the time of return.
                      </div>
                    </div>
                  </div>
                </div>

                <h6 className="blue-color mb-10 mt-20">Book care:</h6>

                <div className="rs-scholarships-item-wrapper">
                  <div className="rs-scholarships-item">
                    <div className="rs-scholarships-list-wrapper">
                      <div className="rs-scholarships-list mb-10">
                        <strong>Overdue Charges:</strong>
                        <br />
                        Materials borrowed should be returned on or before the
                        due date, if returned late overdue, ₹10/Day fine will be
                        charged for the delayed period.
                      </div>

                      <div className="rs-scholarships-list  mb-10">
                        <strong>Book Lost:</strong>
                        <br />
                        If the books are lost, then the borrower shall replace
                        the books of the same edition or latest edition or pay
                        actual cost of the book after getting permission from
                        the librarian.
                      </div>

                      <div className="rs-scholarships-list  mb-10">
                        <strong>Care of Library Books:</strong>
                        <br />
                        Students are require to handle the books/ Journal very
                        carefully; marking with pencil, writing or highlighting,
                        tearing the pages or mutilating the same in any other
                        way will be viewed very seriously.
                      </div>

                      <div className="rs-scholarships-list">
                        In such case reader shall be held responsible unless
                        these are brought to the notice of the library staff at
                        the time of issue.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* OPEN ACCESS */}
          {activeCategory === "Open Access" && (
            <div className="rs-deadline-area rs-deadline-one bg-primary pb-40">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    {OpenAccessData.map((section) => (
                      <div key={section.id} className="mb-40">
                        <h3 className="mb-20">{section.title}</h3>

                        <div className="rs-deadline-wrapper">
                          <div className="rs-deadline-table-wrapper table-responsive">
                            <div className="rs-deadline-table-item">
                              <table
                                className="rs-deadline-table-inner responsive-table-code"
                                style={{
                                  tableLayout: "fixed",
                                  width: "100%",
                                }}
                              >
                                <thead>
                                  <tr>
                                    <th style={{ width: "7%" }}>S.No.</th>

                                    <th style={{ width: "93%" }}>
                                      Name of Database
                                    </th>
                                  </tr>
                                </thead>

                                <tbody>
                                  {section.data.map((item, index) => (
                                    <tr key={item.id}>
                                      <td
                                        style={{
                                          wordBreak: "break-word",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        {index + 1}
                                      </td>

                                      <td
                                        style={{
                                          wordBreak: "break-word",
                                          verticalAlign: "top",
                                        }}
                                      >
                                        <a
                                          href={item.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="blue-color"
                                        >
                                          {item.name}
                                        </a>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* RESEARCH SUPPORT */}
          {activeCategory === "Research Support" && (
            <div className="rs-postbox-text mt-40">
              <h3 className="mb-20 mt-40">
                Research <span className="blue-color">Support</span>
              </h3>

              {ResearchSupportData.map((section) => {
                if (section.type === "paragraph") {
                  return (
                    <p key={section.id} className="mb-20">
                      {section.text}
                    </p>
                  );
                }

                if (section.type === "heading") {
                  return (
                    <h6 key={section.id} className="mb-10 mt-10">
                      {section.title}
                    </h6>
                  );
                }

                if (section.type === "blueHeading") {
                  return (
                    <h5 key={section.id} className="blue-color mb-10 mt-20">
                      {section.title}
                    </h5>
                  );
                }

                if (section.type === "italic") {
                  return (
                    <p key={section.id} className="mb-20">
                      <em>
                        <strong>{section.text}</strong>
                      </em>
                    </p>
                  );
                }

                if (section.type === "boldParagraph") {
                  return (
                    <p key={section.id} className="mb-20">
                      <strong>{section.text}</strong>
                    </p>
                  );
                }

                if (section.type === "list") {
                  return (
                    <div
                      key={section.id}
                      className="rs-scholarships-item-wrapper"
                    >
                      <div className="rs-scholarships-item">
                        <div className="rs-scholarships-list-wrapper">
                          {section.items.map((item, index) => (
                            <div key={index} className="rs-scholarships-list">
                              • {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (section.type === "numberedList") {
                  return (
                    <div
                      key={section.id}
                      className="rs-scholarships-item-wrapper"
                    >
                      <div className="rs-scholarships-item">
                        <div className="rs-scholarships-list-wrapper">
                          {section.items.map((item, index) => (
                            <div key={index} className="rs-scholarships-list">
                              {index + 1}. {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (section.type === "links") {
                  return (
                    <div
                      key={section.id}
                      className="rs-scholarships-item-wrapper"
                    >
                      <div className="rs-scholarships-item">
                        <div className="rs-scholarships-list-wrapper">
                          {section.items.map((item, index) => (
                            <div key={index} className="rs-scholarships-list">
                              •{" "}
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blue-color"
                              >
                                {item.text}
                              </a>
                              {item.suffix && item.suffix}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (section.type === "paragraphWithLink") {
                  return (
                    <p key={section.id} className="mb-20">
                      {section.text}{" "}
                      <a
                        href={section.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blue-color"
                      >
                        {section.linkText}
                      </a>
                    </p>
                  );
                }

                return null;
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default LibraryPage;
