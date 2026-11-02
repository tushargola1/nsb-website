"use client";

import DownloadCard from "@/component/Cards/DownloadCard";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import { VyaptiNewsletter } from "@/data/VyaptiNewsletter";
import React, { useMemo, useState } from "react";

const Page = () => {
  const newslettersByYear = useMemo(() => {
    return VyaptiNewsletter.reduce((groups, item) => {
      const match = item.name.match(/\b20\d{2}\b/);
      const year = match ? match[0] : "Other";

      if (!groups[year]) groups[year] = [];

      groups[year].push(item);
      return groups;
    }, {});
  }, []);

  const years = Object.keys(newslettersByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  // 2026 open by default
  const [activeYear, setActiveYear] = useState("2026");

  const handleAccordion = (year) => {
    setActiveYear((previous) => (previous === year ? "" : year));
  };

  return (
    <main>
      <Breadcrump
        currentPage="Vyapti Newsletter"
        parentPage="Research"
      />

      <section className="rs-history-area section-space bg-primary">
        <div className="container">

          <div className="vyapti-heading text-center mb-40">
            <span className="vyapti-subtitle">OUR PUBLICATIONS</span>
            <h2>Vyapti Newsletter</h2>
          </div>

          <div className="accordion vyapti-bootstrap-accordion">
            {years.map((year) => {
              const isOpen = activeYear === year;
              const issues = newslettersByYear[year];

              return (
                <div
                  className={`accordion-item ${isOpen ? "active" : ""}`}
                  key={year}
                >
                  <h2 className="accordion-header" id={`heading-${year}`}>
                    <button
                      className={`accordion-button ${
                        isOpen ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => handleAccordion(year)}
                      aria-expanded={isOpen}
                      aria-controls={`collapse-${year}`}
                    >
                      <span className="vyapti-calendar-icon">
                        <i className="fa-solid fa-calendar-days"></i>
                      </span>

                      <span className="vyapti-year-info">
                        <span className="vyapti-year">{year}</span>
                        <span className="vyapti-year-description">
                          Vyapti Newsletter
                        </span>
                      </span>

                      <span className="vyapti-count">
                        {issues.length}{" "}
                        {issues.length === 1 ? "Issue" : "Issues"}
                      </span>

                      <span className="vyapti-chevron">
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </button>
                  </h2>

                  <div
                    id={`collapse-${year}`}
                    className={`accordion-collapse collapse ${
                      isOpen ? "show" : ""
                    }`}
                    aria-labelledby={`heading-${year}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="accordion-body">
                      <div className="row g-4">
                        {issues
                          .slice()
                          .reverse()
                          .map((item) => (
                            <div
                              className="col-xl-6 col-lg-6 col-md-6 col-12"
                              key={item.id}
                            >
                              <DownloadCard item={item} />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Page;