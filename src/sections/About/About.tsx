import styles from './About.module.css';
import { imageUrls } from '../../assets/images.ts'

export function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.textContainer}>
        <h2>About Me</h2>
        <p>
          I'm a senior Computer Science student, just a few steps away from graduation,
          and I'm excited to begin my journey in the tech industry. Over the years, I’ve built
          a solid foundation in programming, working with languages like Python, C++, Java, and
          JavaScript, and I’ve particularly grown to love the challenges and possibilities that
          come with software development.
        </p>
        <p>
          On the frontend, I enjoy creating sleek, user-friendly designs with HTML, CSS, React,
          and Mantine UI. On the backend, I’ve dived into building robust systems using
          technologies like Spring, Flask, and Docker, and I’ve explored the power of
          cloud platforms like AWS and DigitalOcean. Beyond that, tools like Git, Postman,
          and IntelliJ have become second nature to me, helping me bring ideas to life efficiently.
        </p>
        <p>
          What excites me most about this field is the chance to solve real-world problems
          through technology. Whether it’s collaborating with a team to develop innovative
          solutions or learning a new tool or language, I’m always eager to grow and take on
          new challenges. My ultimate goal is to contribute to meaningful projects that make a
          positive impact and continue pushing the boundaries of what I can create as a software
          engineer.
        </p>
      </div>
      <div
        className={styles.imageContainer}
        style={{backgroundImage: `url(${imageUrls.manuel.src})`}}
      ></div>
    </section>
  );
}
