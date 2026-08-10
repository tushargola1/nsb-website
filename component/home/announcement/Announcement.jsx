import Image from "next/image";
import styles from "./Announcement.module.css";
import Link from "next/link";

const Announcement = () => {
  return (
    <section className={styles.announce}>
      <Image
        src="/assets/images/mission.png"
        width={44}
        height={44}
        alt="Announcement"
        className={styles.updateImg}
      />

      <div className={styles.marquee}>
        <ul className={styles.track}>
          <li className={styles.missionLiContent}>
            <Link href="/students">
              Meet our new students of PGDM (E) 2026-27 Batch
            </Link>
          </li>

          {/* Duplicate items for seamless scrolling */}
          <li className={styles.missionLiContent}>
            <a href="#">
              NTPC School of Business, Noida has ranked 38th in IIRF 2024, among
              Top 50 B-School in India
            </a>
          </li>

          <li className={styles.missionLiContent}>
            <a
              href="https://iirfranking.com/ranking/top-mba-colleges-in-india"
              target="_blank"
            >
              The Power Management Institute is committed to be a leading
              institute in developing world-class competencies by providing
              state-of-the-art training.
            </a>
          </li>
        </ul>
      </div>

      <Image
        src="/assets/images/mission.png"
        width={44}
        height={44}
        alt="Announcement"
        className={`${styles.updateImg} ${styles.rightImg}`}
      />
    </section>
  );
};

export default Announcement;
