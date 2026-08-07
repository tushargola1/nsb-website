"use client";

import { AcademicCalendarData } from "@/data/AcademicCalendarData";
import FacultyTabs from "@/component/faculty/tabs";
import { useState } from "react";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import LogoCarousel from "@/component/common/logoCarousel/LogoCarousel";

export default function FacultyMembersPage() {
  const categories = [
    "PGDM (EM) BATCH 3 - SESSION 2020 - 2022",
    "PGDM (EM) BATCH 4 - SESSION 2021 - 2023",
    "PGDM (E) BATCH 7 - SESSION 2021 - 2022",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredData =
    activeCategory === categories[0]
      ? AcademicCalendarData.batch3
      : activeCategory === categories[1]
        ? AcademicCalendarData.batch4
        : AcademicCalendarData.batch7;

  return (
    <main>
      <Breadcrump
        currentPage="Acedemic Calender"
        parentPage="Important Links"
      />

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
                          {AcademicCalendarData.tableHeaders.map(
                            (header, index) => (
                              <th key={index}>{header}</th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((item, index) => (
                          <tr key={item.id}>
                            <td
                              style={{
                                width: "8%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {index + 1}
                            </td>

                            <td
                              style={{
                                width: "42%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.event}
                            </td>

                            <td
                              style={{
                                width: "25%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.from}
                            </td>

                            <td
                              style={{
                                width: "25%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.to}
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
        </div>
      </div>
    </main>
  );
}
