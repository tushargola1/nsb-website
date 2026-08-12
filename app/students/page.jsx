"use client";

import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import React, { useState } from "react";
import { studentsDetails } from "@/data/StudentsDetails";

const page = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openStudentModal = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div>
      <Breadcrump currentPage="Students" parentPage="Students" />

      <section className="rs-postbox-area section-space-top">
        <div className="container">
          <div className="row g-5 align-items-center justify-content-center">
            <div className="rs-blog-two has-theme-green">
              <div className="rs-postbox-wrapper row">
                {studentsDetails.map((item) => {
                  return (
                    <article
                      className="rs-postbox-item col-xl-4 col-lg-4 col-md-6 col-12"
                      key={item.id}
                    >
                      {/* Image */}
                      <div
                        className="position-relative overflow-hidden rounded-4"
                        style={{
                          height: "200px",
                        }}
                      >
                        {/* Blurry Background Image */}
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{
                            objectFit: "cover",
                            filter: "blur(20px)",
                            transform: "scale(1.1)",
                            opacity: 0.7,
                          }}
                        />

                        {/* Main Image */}
                        <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="rs-postbox-content px-2 pt-10">
                        <div className="rs-postbox-meta-list flex-column justify-content-start align-items-start">
                          <span className="rs-postbox-meta-item fw-bold">
                            <i className="ri-user-3-line"></i>
                            {item.name}
                          </span>

                          <span className="rs-postbox-meta-item fw-bold align-items-start">
                            <i className="ri-briefcase-4-line"></i>
                            {item.designation}
                          </span>
                        </div>

                        {/* About */}
                        <div
                          className="rs-postbox-text mt-10"
                          style={{
                            minHeight: "75px",
                          }}
                        >
                          <p
                            className="mb-0"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {item.about}
                          </p>
                        </div>

                        {/* View More */}
                        <div className="mt-10">
                          <span
                            className="blue-color"
                            style={{
                              cursor: "pointer",
                              fontWeight: 600,
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#studentDetailsModal"
                            onClick={() => openStudentModal(item)}
                          >
                            View More
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          STUDENT DETAILS MODAL
      ========================================= */}

      <div
        className="modal fade"
        id="studentDetailsModal"
        tabIndex="-1"
        aria-labelledby="studentDetailsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 rounded-4 overflow-hidden">
            {/* Header */}
            <div className="modal-header">
              <h5
                className="modal-title"
                id="studentDetailsModalLabel"
              >
                Student Details
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Body */}
            {selectedStudent && (
              <div className="modal-body p-4">
                <div className="row align-items-center g-4">
                  {/* Image */}
                  <div className="col-md-5 col-12">
                    <div
                      className="position-relative overflow-hidden rounded-4"
                      style={{
                        height: "300px",
                        background: "#f5f5f5",
                      }}
                    >
                      <Image
                        src={selectedStudent.image}
                        alt={selectedStudent.name}
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="col-md-7 col-12">
                    <div className="student-modal-details">
                      <h4 className="mb-15">
                        {selectedStudent.name}
                      </h4>

                      <div className="mb-15">
                        <span className="d-block fw-bold mb-5">
                          <i className="ri-briefcase-4-line me-2"></i>
                          Designation
                        </span>

                        <p className="mb-0">
                          {selectedStudent.designation}
                        </p>
                      </div>

                      <div>
                        <span className="d-block fw-bold mb-5">
                          About
                        </span>

                        <p className="mb-0">
                          {selectedStudent.about}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;