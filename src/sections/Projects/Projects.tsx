import styles from './Projects.module.css';
import { imageUrls } from '../../assets/images.ts'

const mockProjects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A mock description for Project One.',
    image: imageUrls.placeholder.src ,
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A mock description for Project Two.',
    image: imageUrls.placeholder.src ,
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mock description for Project Three.',
    image: imageUrls.placeholder.src ,
    link: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className={styles.projectSection}>
      <h2 className={styles.projectHeading}>My Projects</h2>
      <div className={styles.projectGrid}>
        {mockProjects.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              <a
                href={project.link}
                className={styles.projectButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
