import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">Manuel Reyes</NavLink>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-70} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-70} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
