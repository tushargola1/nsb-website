"use client";

import styles from "./tabs.module.css";

const categories = ["All", "NSB Faculty", "IIM-A Faculty", "Adjunct Faculty", "Visiting Faculty"];

export default function FacultyTabs({ activeCategory, onSelect }) {
  return (
    <div className={styles.facultyPillBar}>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles.facultyPill} ${activeCategory === cat ? styles.facultyPillActive : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}