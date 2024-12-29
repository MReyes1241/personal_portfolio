import { Link } from 'react-scroll';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="Hero" className={styles.heroSection}>
      <div className={styles.content}>
        <p className={styles.subtitle}>Manuel Reyes</p>
        <h1 className={styles.title}>
          Crafting code to deliver <span> a more exciting</span> World.
        </h1>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className={styles.scrollIndicator}
        >
          ↓
        </Link>
      </div>
    </section>
  );
}
