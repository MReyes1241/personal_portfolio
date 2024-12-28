import styles from './Resume.module.css';

export function Resume() {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.container}>
        {/* Education */}
        <div className={styles.section}>
          <h2 className={styles.subheading}>Education</h2>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Hunter College - City University of New York</h3>
            <span className={styles.cardTime}>Aug. 2021 – May 2025</span>
            <p className={styles.cardDescription}>
              Bachelor of Arts in Computer Science, Minor in Mathematics <br />
              Relevant Coursework: Operating Systems, Data Structures, Algorithms, Computer Architecture, Software Engineering, Artificial Intelligence <br />
              <strong>GPA:</strong> 3.4
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className={styles.section}>
          <h2 className={styles.subheading}>Experience</h2>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Software Engineering Intern</h3>
            <span className={styles.cardTime}>Patina Network | Jun. 2024 – Aug. 2024</span>
            <p className={styles.cardDescription}>
              - Developed a streamlined workflow for handling images across the website using shell scripts and Google Drive to DigitalOcean Spaces S3 buckets integration. <br />
              - Added version control and multiple environment support for image handling workflows. <br />
              - Built and deployed OCI Docker images of the Spring Boot backend on DigitalOcean VMs. <br />
              - Collaborated with UI/UX designers to implement responsive designs using React, TypeScript, and Mantine UI. <br />
              - Managed tasks with Linear and engaged in CI-enforced code reviews on Gerrit.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Undergraduate Teaching Assistant</h3>
            <span className={styles.cardTime}>Hunter College | Feb. 2023 – Present</span>
            <p className={styles.cardDescription}>
              - Guided students in Python, MIPS, and C++ courses, assisting with assignments and exam preparation. <br />
              - Conducted grading, tutoring sessions, and detailed feedback to enhance student understanding.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className={styles.section}>
          <h2 className={styles.subheading}>Projects</h2>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Splitsy App</h3>
            <span className={styles.cardTime}>Feb. 2024</span>
            <p className={styles.cardDescription}>
              - Collaborated in a team to build “Splitsy,” an iOS app for simplifying bill splitting. <br />
              - Built a seamless UI using Swift and SwiftUI and implemented OCR for receipt scanning.
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className={styles.section}>
          <h2 className={styles.subheading}>Technical Skills</h2>
          <ul className={styles.skillsList}>
            <li>Languages: Python, Java, C/C++, SQL, JavaScript, TypeScript, Swift, MIPS, Shell Scripting</li>
            <li>Frontend: React, Vue, Mantine UI, HTML/CSS</li>
            <li>Backend/Cloud: Spring, Flask, PHP, Docker, DigitalOcean, AWS</li>
            <li>Tools: Git, Linear, Figma, Postman, pgAdmin</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
