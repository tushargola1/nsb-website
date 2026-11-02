import Image from "next/image";
import styles from "./Announcement.module.css";
import Link from "next/link";

const Announcement1 = () => {
  return (
    <section className={styles.announce}>
      <Image
        src="/assets/images/mission.png"
        width={44}
        height={44}
        alt="Announcement"
        className={styles.updateImg}
      />

      <div
        className={styles.marquee}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul
          className={styles.track}
          style={{
            animation: "unset !important",
          }}
        >
          <li className={`${styles.missionLiContent} ${styles.missionLiContent1}`}>
            <Link href="/careers" style={{ color: "red", textDecoration: "none" }}>
             Advertisement for the post of Director, NSB
            </Link>
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

export default Announcement1;
