import { Link } from 'react-scroll';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>
        Hi, I'm <span>Manuel Reyes</span>
      </h1>
      <p className={styles.subtitle}>
        A passionate Software Engineer building modern web experiences.
      </p>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className={styles.heroButton}
      >
        Learn More
      </Link>
    </section>
  );
}
