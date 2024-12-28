import { Link } from 'react-router-dom';
import styles from './Error404.module.css';

export function Error404() {
  return (
    <section className={styles.errorSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" className={styles.homeButton}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
