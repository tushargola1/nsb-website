"use client";

import React, { useState, useMemo } from "react";
import styles from "./EventsCalendar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allEventsData } from "@/data/AllEventsData";
// Mock data spanning multiple years

export default function EventsCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [filterYear, setFilterYear] = useState("All");
  const [filterMonth, setFilterMonth] = useState("All");
  const [filterDay, setFilterDay] = useState("All");
  const pathname = usePathname();
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const setToday = () => {
    const today = new Date();

    setFilterYear(today.getFullYear().toString());
    setFilterMonth(String(today.getMonth() + 1).padStart(2, "0"));
    setFilterDay(String(today.getDate()).padStart(2, "0"));
  };

  const clearFilters = () => {
    setFilterYear("All");
    setFilterMonth("All");
    setFilterDay("All");
  };

 const filteredEvents = useMemo(() => {
  return allEventsData
    .filter((event) => {
      const [year, month, day] = event.date.split("-");

      return (
        (filterYear === "All" || year === filterYear) &&
        (filterMonth === "All" || month === filterMonth) &&
        (filterDay === "All" || day === filterDay)
      );
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}, [filterYear, filterMonth, filterDay]);

  // Max 10 events to display
const isHomePage = ["/", "/executive-education"].includes(pathname);

const displayedEvents = useMemo(() => {
  return isHomePage
    ? filteredEvents.slice(0, 5)
    : filteredEvents;
}, [filteredEvents, isHomePage]);

const hasMore = isHomePage && filteredEvents.length > 5;

  // Format date helper for modal
  const formatModalDate = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const getMonthName = (monthNum) => {
    const date = new Date();
    date.setMonth(parseInt(monthNum) - 1);
    return date.toLocaleString("en-US", { month: "short" });
  };
  console.log({
    filterYear,
    filterMonth,
    filterDay,
    filteredEvents,
  });
  const years = [...new Set(allEventsData.map((e) => e.date.split("-")[0]))];
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <div className={styles.headerTop}>
          <h3 className={styles.headerTitle}>
            <i className="ri-calendar-event-fill"></i>
            Event Directory
          </h3>
          <div className={styles.headerActions}>
            <button className={styles.btnToday} onClick={setToday}>
              Today
            </button>
            {(filterYear !== "All" ||
              filterMonth !== "All" ||
              filterDay !== "All") && (
              <button className={styles.btnClear} onClick={clearFilters}>
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filters Row */}
        <div className={styles.filtersRow}>
          <div className={styles.filterGroup}>
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="All">Year</option>

              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <select
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="All">Month</option>

              {months.map((month) => (
                <option key={month} value={month}>
                  {getMonthName(month)}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <select
              value={filterDay}
              onChange={(e) => setFilterDay(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="All">Day</option>

              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className={styles.eventsList}>
        {displayedEvents.length > 0 ? (
          displayedEvents.map((event) => {
            const [, eMonth, eDay] = event.date.split("-");
            return (
              <div
                key={event.id}
                className={styles.eventCard}
                onClick={() => handleEventClick(event)}
                style={{ "--event-color": event.color }}
              >
                <div className={styles.dateBadge}>
                  <span className={styles.dateDay}>{eDay}</span>
                  <span className={styles.dateMonth}>
                    {getMonthName(eMonth)}
                  </span>
                </div>

                <div className={styles.eventInfo}>
                  <h4 className={styles.eventTitle}>{event.title}</h4>
                  {/* <div className={styles.eventMeta}>
                    <span>
                      <i className="ri-time-line"></i>
                      {event.time}
                    </span>
                  </div> */}
                </div>
                <div className={styles.eventAction}>
                  <i className="ri-arrow-right-line fs-2"></i>
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.noEvents}>
            <i className="ri-calendar-check-line"></i>
            <p>No events found for the selected dates.</p>
          </div>
        )}
      </div>

    {hasMore && (
  <div className={styles.viewMoreWrapper}>
    <Link href="/event" className={styles.viewMoreBtn}>
      View All Events <i className="ri-arrow-right-line"></i>
    </Link>
  </div>
)}

      {/* Beautiful Modal Popup */}
      {selectedEvent && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div
            className={styles.modalDialog}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={styles.modalHeader}
              style={{ backgroundColor: selectedEvent.color }}
            >
              <div className={styles.modalHeaderOverlay}></div>
              <button className={styles.modalClose} onClick={closeModal}>
                <i className="ri-close-line"></i>
              </button>
              <span className={styles.modalCategory}>
                {selectedEvent.category}
              </span>
              <h3 className={styles.modalTitle}>{selectedEvent.title}</h3>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalDetailRow}>
                <div className={styles.detailIcon}>
                  <i className="ri-calendar-2-line"></i>
                </div>
                <div className={styles.detailContent}>
                  <h6>Date & Time</h6>
                  <p>{formatModalDate(selectedEvent.date)}</p>
                  <p className="text-muted fs-6 mb-0 mt-1">
                    {selectedEvent.time}
                  </p>
                </div>
              </div>

              <div className={styles.modalDetailRow}>
                <div className={styles.detailIcon}>
                  <i className="ri-map-pin-line"></i>
                </div>
                <div className={styles.detailContent}>
                  <h6>Mode</h6>
                  <p>{selectedEvent.location}</p>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.btnPrimary}
                onClick={closeModal}
                style={{ backgroundColor: selectedEvent.color }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
