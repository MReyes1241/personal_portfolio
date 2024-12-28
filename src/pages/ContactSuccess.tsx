import { Link } from 'react-router-dom';
import styles from './ContactSuccess.module.css';

export function ContactSuccess() {
  return (
    <section className={styles.successSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.message}>
          Your message has been successfully sent. I’ll get back to you as soon as possible.
        </p>
        <Link to="/" className={styles.homeButton}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
