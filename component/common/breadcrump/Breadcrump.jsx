import Link from "next/link";
import React from "react";

const Breadcrump = ({ parentPage, currentPage }) => {
  return (
    <section
      className="rs-breadcrumb-area rs-breadcrumb-one p-relative"
      style={{ padding: "30px" }}
    >
      <div
        className="rs-breadcrumb-bg-thumb include-bg"
        data-background="assets/images/bg/breadcrumb-bg-thumb-01.webp"
      ></div>
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-xxl-8 col-xl-9 col-lg-10">
            <div className="rs-breadcrumb-wrapper">
              <div className="rs-breadcrumb-menu">
                <nav>
                  <ul>
                    <li className="rs-breadcumb-item">
                      <Link href="/">Home</Link>
                      <span className="rs-breadcrumb-icon">
                        <svg
                          className="e-font-icon-svg e-fas-angle-double-right"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
                        </svg>
                      </span>
                    </li>
                    <li className="rs-breadcumb-item">{parentPage}</li>
                  </ul>
                </nav>
              </div>
              <div className="rs-breadcrumb-title-wrapper">
                <h1 className="rs-breadcrumb-title">{currentPage}</h1>
                <span className="rs-breadcrumb-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrump;
