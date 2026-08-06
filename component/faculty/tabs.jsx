"use client";

import styles from "./tabs.module.css";


export default function FacultyTabs({ activeCategory, onSelect , category }) {
  return (
    <div className={styles.facultyPillBar} >
      {category.map((cat) => (
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