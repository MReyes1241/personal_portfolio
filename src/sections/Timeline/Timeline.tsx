import styles from './Timeline.module.css';
import { IconBriefcase, IconSchool, IconCode } from '@tabler/icons-react';

export function TimelineSection() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.title}>My Journey</h2>
      <div className={styles.timeline}>
        {/* Timeline Event 1 */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <IconSchool size={24} />
          </div>
          <div className={styles.timelineContent}>
            <h3 className={styles.eventTitle}>Started Computer Science Degree</h3>
            <p className={styles.eventTime}>Aug. 2021</p>
            <p className={styles.eventDescription}>
              Enrolled at Hunter College, CUNY, pursuing a Bachelor's in Computer Science.
            </p>
          </div>
        </div>

        {/* Timeline Event 2 */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <IconBriefcase size={24} />
          </div>
          <div className={styles.timelineContent}>
            <h3 className={styles.eventTitle}>Undergraduate Teaching Assistant</h3>
            <p className={styles.eventTime}>Feb. 2023</p>
            <p className={styles.eventDescription}>
              Began assisting students with programming and concepts in Python, MIPS, and C++ courses.
            </p>
          </div>
        </div>

        {/* Timeline Event 3 */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <IconCode size={24} />
          </div>
          <div className={styles.timelineContent}>
            <h3 className={styles.eventTitle}>Software Engineering Internship</h3>
            <p className={styles.eventTime}>Jun. 2024</p>
            <p className={styles.eventDescription}>
              Developed workflows, responsive designs, and backend APIs at Patina Network.
            </p>
          </div>
        </div>

        {/* Timeline Event 4 */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <IconSchool size={24} />
          </div>
          <div className={styles.timelineContent}>
            <h3 className={styles.eventTitle}>Expected Graduation</h3>
            <p className={styles.eventTime}>May 2025</p>
            <p className={styles.eventDescription}>
              Earn a Bachelor's in Computer Science with a minor in Mathematics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
