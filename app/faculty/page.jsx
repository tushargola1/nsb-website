"use client";

import facultyData from "@/component/data/facultyData";
import TeamCard from "@/component/Cards/TeamCard";
import FacultyTabs from "@/component/faculty/tabs";
import { useState } from "react";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";

export default function FacultyMembersPage() {
  const [activeCategory, setActiveCategory] = useState("NSB Faculty");
  const categories = [
    "All",
    "NSB Faculty",
    "IIM-A Faculty",
    "Adjunct Faculty",
    "Visiting Faculty",
  ];

  const filteredFaculty =
    activeCategory === "All"
      ? facultyData
      : facultyData.filter((member) => member.category === activeCategory);

  return (
    <main>
      <Breadcrump currentPage={"Faculty Members"} parentPage={"Faculty"} />
      <div className="mt-40 mb-40">
        <FacultyTabs
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          category={categories}
        />
      </div>
      {activeCategory === "IIM-A Faculty" && (
        <>
          <div className="container mb-30">
            <div className="rs-team-content-info w-100 text-center">
              <h4 className="rs-team-designation">
                IIM-A Faculty, who have taught at NSB
              </h4>
            </div>
          </div>
        </>
      )}
      {/* Team grid */}
      <section className="rs-team-area section-space-bottom rs-team-one has-theme-blue">
        <div className="container">
          <div className="row gy-4 align-items-center justify-content-center">
            {/* <div className="rs-team-wrapper"> */}
            {filteredFaculty.map((member) => (
              <div className="col-lg-3" key={member.slug}>
                <TeamCard member={member} />
              </div>
            ))}

            {/* </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
