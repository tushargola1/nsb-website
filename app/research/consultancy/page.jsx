"use client";

import { ConsultancyData } from "@/data/ConsultancyData";
import { ConsultancyLogo } from "@/data/ConsultancyLogo";
import FacultyTabs from "@/component/faculty/tabs";
import { useState } from "react";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import LogoCarousel from "@/component/common/logoCarousel/LogoCarousel";


export default function FacultyMembersPage() {
  const categories = ["Ongoing Projects", "Completed Projects"];

  const [activeCategory, setActiveCategory] = useState("Ongoing Projects");

  const filteredProjects =
    activeCategory === "Completed Projects"
      ? ConsultancyData.completedProjects
      : ConsultancyData.ongoingProjects;

  return (
    <main>
      <Breadcrump currentPage="Consultancy" parentPage="Research" />

      <div className="mt-40 mb-40">
        <FacultyTabs
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          category={categories}
        />
      </div>

      <div className="rs-deadline-area rs-deadline-one bg-primary pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="rs-deadline-wrapper">
                <div className="rs-deadline-table-wrapper table-responsive">
                  <div className="rs-deadline-table-item">
                    <table
                      className="rs-deadline-table-inner responsive-table-code"
                      style={{ tableLayout: "fixed", width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th style={{ width: "7%" }}>S.No.</th>
                          <th style={{ width: "18%" }}>Title</th>
                          <th style={{ width: "33%" }}>Project Detail</th>
                          <th style={{ width: "18%" }}>Funding Agency</th>
                          <th style={{ width: "14%" }}>Name of PI/Co-PI</th>
                          <th style={{ width: "15%" }}>Duration</th>
                        </tr>
                      </thead>

                      <tbody>
                        {filteredProjects.map((project, index) => (
                          <tr key={project.id}>
                            <td>{index + 1}</td>

                            <td
                              style={{
                                wordBreak: "break-word",
                                verticalAlign: "top",
                              }}
                            >
                              {Array.isArray(project.title) ? (
                                <ul className="mb-0 ps-3">
                                  {project.title.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              ) : (
                                project.title
                              )}
                            </td>

                            <td
                              style={{
                                wordBreak: "break-word",
                                verticalAlign: "top",
                              }}
                            >
                              {Array.isArray(project.projectDetail) ? (
                                <ul className="mb-0 ps-3">
                                  {project.projectDetail.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              ) : (
                                project.projectDetail
                              )}
                            </td>

                            <td
                              style={{
                                wordBreak: "break-word",
                                verticalAlign: "top",
                              }}
                            >
                              {project.fundingAgency}
                            </td>

                            <td
                              style={{
                                wordBreak: "break-word",
                                verticalAlign: "top",
                              }}
                            >
                              {project.investigators.map((person, i) => (
                                <div key={i} className="mb-2">
                                  <strong>{person.designation}:</strong>{" "}
                                  {person.name}
                                </div>
                              ))}
                            </td>

                            <td
                              style={{
                                wordBreak: "break-word",
                                verticalAlign: "top",
                              }}
                            >
                              {project.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
           <div className="mt-40">
      <LogoCarousel data={ConsultancyLogo} />

        </div>
        </div>
       
      </div>
    </main>
  );
}
