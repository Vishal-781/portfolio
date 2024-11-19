import React from "react";
import styles from "./Technologies.module.css";
import JavaImage from "./../../Assets/images/java.png";
import HTMLImage from "./../../Assets/images/html-white.png";
import SpringImage from "./../../Assets/images/spring.png";
import PythonImage from "./../../Assets/images/python.png";
import PostgresImage from "./../../Assets/images/postgres.png";
import MyssqlImage from "./../../Assets/images/mysql.png";
import KotlinImage from "./../../Assets/images/kotlin.png";
import JiraImage from "./../../Assets/images/jira.png";
import DockerImage from "./../../Assets/images/docker.png";
import ReactImage from "./../../Assets/images/react-white.png";
import FlutterImage from "./../../Assets/images/flutter-white.png";
import JSImage from "./../../Assets/images/js-white.png";
import NodeImage from "./../../Assets/images/node-white.png";
import MongoImage from "./../../Assets/images/mongo-white.png";
import GitImage from "./../../Assets/images/git-white.png";
import CSSImage from "./../../Assets/images/css-white.png";
import PostmanImage from "./../../Assets/images/postman-white.png";
import FirebaseImage from "./../../Assets/images/firebase-white.png";
import CppImage from "./../../Assets/images/cpp-white.png";

const Technologies = () => {
  const logos = [
    {
      src: JavaImage,
      alt: "Java",
    },
    {
      src: PythonImage,
      alt: "HTML",
    },
    {
      src: KotlinImage,
      alt: "Kotlin",
    },
    {
      src: SpringImage,
      alt: "Spring",
    },
    {
      src: HTMLImage,
      alt: "HTML",
    },
    {
      src: JSImage,
      alt: "JS",
    },
    {
      src: ReactImage,
      alt: "React",
    },
    {
      src: FlutterImage,
      alt: "Flutter",
    },
    {
      src: NodeImage,
      alt: "Node",
    },
    {
      src: CppImage,
      alt: "C++",
    },
    {
      src: MongoImage,
      alt: "Mongo",
    },
    {
      src: GitImage,
      alt: "Git",
    },
    {
      src: CSSImage,
      alt: "CSS",
    },
    {
      src: PostmanImage,
      alt: "Postman",
    },
    {
      src: FirebaseImage,
      alt: "Firebase",
    },
    {
      src: PostgresImage,
      alt: "Postgres",
    },
    {
      src: MyssqlImage,
      alt: "Myssql",
    },
    
    {
      src: JiraImage,
      alt: "Jira",
    },
    {
      src: DockerImage,
      alt: "Docker",
    }
    
  ];

  return (
    <div className={styles.technologies}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>I have worked with</h2>
        </div>
        <div className={styles.techMarquee} behavior="scroll" direction="left">
          {logos.map((logo, index) => (
            <div className={styles.techlogo} key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;