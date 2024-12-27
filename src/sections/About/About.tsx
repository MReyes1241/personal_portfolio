import styles from './About.module.css';

export function About() {
  return (
    <section className={styles.aboutSection}>
      <img
        src="https://via.placeholder.com/150"
        alt="Manuel Reyes"
        className={styles.aboutImage}
      />
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutHeading}>About Me</h2>
        <p className={styles.aboutText}>
          Hi, I'm Manuel Reyes, a dedicated software engineer with expertise in
          React, TypeScript, and backend technologies. I enjoy creating
          innovative solutions and contributing to impactful projects.
        </p>
      </div>
    </section>
  );
}
