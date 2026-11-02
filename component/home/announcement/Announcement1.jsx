import Image from "next/image";
import styles from "./Announcement1.module.css";
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

      <div className={styles.marquee}>
        <ul className={styles.track}>
          <li className={styles.missionLiContent}>
            <Link href="/careers">
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