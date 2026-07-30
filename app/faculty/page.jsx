"use client";

import facultyData from "@/component/data/facultyData";
import TeamCard from "@/component/Cards/TeamCard";
import FacultyTabs from "@/component/faculty/tabs";
import { useState } from "react";

export default function FacultyMembersPage() {

  const [activeCategory, setActiveCategory] = useState("NSB Faculty");

  const filteredFaculty =
  activeCategory === "All"
    ? facultyData
    : facultyData.filter((member) => member.category === activeCategory);
  console.log(filteredFaculty)
  return (
    <main>
      {/* Breadcrumb */}
      <section className="rs-breadcrumb-area rs-breadcrumb-one p-relative section-space">
        <div
          className="rs-breadcrumb-bg-thumb include-bg"
          style={{ backgroundImage: "url(/assets/images/bg/breadcrumb-bg-thumb-01.webp)" }}
        ></div>
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col-xl-6 col-lg-10">
              <div className="rs-breadcrumb-wrapper">
                <div className="rs-breadcrumb-title-wrapper">
                  <h1 className="rs-breadcrumb-title">Faculty Members</h1>
                  <span className="rs-breadcrumb-line"></span>
                </div>
                <p className="rs-breadcrumb-desc">
                  Education goes beyond textbooks and classrooms. We believe in
                  empowering students to explore their passions and challenge conventions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FacultyTabs activeCategory={activeCategory} onSelect={setActiveCategory} />

      {/* Team grid */}
      <section className="rs-team-area section-space rs-team-one has-theme-blue">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="rs-team-wrapper">
                {filteredFaculty.map((member) => (
                  <TeamCard key={member.slug} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}