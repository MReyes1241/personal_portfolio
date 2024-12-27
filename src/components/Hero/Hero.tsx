import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div>
        <h1 className={styles.heroTitle}>
          Hi, I'm <span className={styles.heroHighlight}>Manuel Reyes</span>
        </h1>
        <p className={styles.heroText}>
          A passionate <strong>Software Engineer</strong> building modern web experiences.
        </p>
        <button className={styles.heroButton}>View My Work</button>
      </div>
    </section>
  );
}
