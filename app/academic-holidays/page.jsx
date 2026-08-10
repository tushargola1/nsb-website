"use client";

import { AcademicHolidaysData } from "@/data/AcademicHolidaysData";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";

export default function FacultyMembersPage() {
  const filteredData = AcademicHolidaysData.holidays;
  const gazettedHolidaysData = AcademicHolidaysData.gazettedHolidays;

  return (
    <main>
      <Breadcrump currentPage="Academic Holidays" parentPage="Academics" />

      <div className="rs-deadline-area rs-deadline-one bg-primary pb-40">
        <div className="container">
          <h3 className="section-title text has-theme-blue mb-30 mt-40">
            For Academic Year 2022
          </h3>
          <div className="row">
            <div className="col-xl-12">
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
                          {AcademicHolidaysData.tableHeaders.map(
                            (header, index) => (
                              <th key={index}>{header}</th>
                            ),
                          )}
                        </tr>
                      </thead>

                      <tbody>
                        {filteredData.map((item, index) => (
                          <tr key={item.id}>
                            {/* S.No. */}
                            <td
                              style={{
                                width: "8%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {index + 1}
                            </td>

                            {/* Events */}
                            <td
                              style={{
                                width: "42%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.event}
                            </td>

                            {/* Date of Holidays */}
                            <td
                              style={{
                                width: "25%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.date}
                            </td>

                            {/* Duration / Days */}
                            <td
                              style={{
                                width: "25%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <h3 className="section-title text has-theme-blue mb-30 mt-40">
                  Gazzeted Holidays
                </h3>
                <div className="rs-deadline-table-wrapper table-responsive mt-40">
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
                          {AcademicHolidaysData.tableHeaders.map(
                            (header, index) => (
                              <th key={index}>{header}</th>
                            ),
                          )}
                        </tr>
                      </thead>

                      <tbody>
                        {gazettedHolidaysData.map((item, index) => (
                          <tr key={item.id}>
                            {/* S.No. */}
                            <td
                              style={{
                                width: "8%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {index + 1}
                            </td>

                            {/* Events */}
                            <td
                              style={{
                                width: "42%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.event}
                            </td>

                            {/* Date of Holidays */}
                            <td
                              style={{
                                width: "25%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.date}
                            </td>

                            {/* Duration / Days */}
                            <td
                              style={{
                                width: "25%",
                                verticalAlign: "top",
                                wordBreak: "break-word",
                              }}
                            >
                              {item.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="blue-color fw-bold text-center mt-30">*Institute reserve rights to make changes in the list</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
