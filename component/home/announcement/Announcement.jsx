import Image from "next/image";
import styles from "./Announcement.module.css";

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
        <a href="https://drive.google.com/file/d/1ekHbWdnFPyIn-2Iw2AtZvWHyBFe0SehK/view?usp=sharing" target="_blank">
        Information for students requesting duplicate or certified true copies of Transcript & Certificate.
            
        </a>
      </li>

      <li className={styles.missionLiContent}>
        <a href="https://drive.google.com/file/d/15x_kEBrx6zG3JLiyzUCPIgBWXnuWJs0r/view?usp=sharing/" target="_blank">
  NSB Scholarship Result Notification 2024 - 2025 
            
        </a>
      </li>

      {/* Duplicate items for seamless scrolling */}
      <li className={styles.missionLiContent}>
        <a href="#">
       
        NTPC School of Business, Noida has ranked 38th in IIRF 2024, among Top 50 B-School in India 
        
        </a>
      </li>

      <li className={styles.missionLiContent}>
        <a href="https://iirfranking.com/ranking/top-mba-colleges-in-india" target="_blank">
          The Power Management Institute is committed to be a leading institute
          in developing world-class competencies by providing state-of-the-art
          training.
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