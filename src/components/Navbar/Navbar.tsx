import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import styles from './Navbar.module.css';

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Navigate to the home page first
      navigate('/');
      setTimeout(() => {
        // Scroll to the specific section after navigating
        scroller.scrollTo(sectionId, {
          duration: 500,
          smooth: true,
          offset: -70, // Adjust for navbar height if needed
        });
      }, 500); // Delay to ensure the page has loaded
    } else {
      // If already on the home page, scroll directly
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }
  };

  // Determine navbar position based on the current route
  const navbarClass =
    location.pathname === '/' ? `${styles.navbar} ${styles.sticky}` : `${styles.navbar} ${styles.relative}`;

  return (
    <nav className={navbarClass}>
      <div className={styles.logo}>
        <a href="/" className={styles.navButton}>
          Manuel Reyes
        </a>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="/" className={styles.navButton}>
            Home
          </a>
        </li>
        <li>
          <a href="/resume" className={styles.navButton}>
            Resume
          </a>
        </li>
        <li>
          <button onClick={() => handleScrollNavigation('projects')} className={styles.navButton}>
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => handleScrollNavigation('contact')} className={styles.navButton}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
