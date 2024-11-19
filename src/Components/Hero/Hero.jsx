import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import JSLogo from "./../../Assets/images/java.png";
import ReactLogo from "./../../Assets/images/kotlin.png";
import FlutterLogo from "./../../Assets/images/flutter.png";

const Hero = () => {
  const signatureRef = React.createRef(null);

  // for the signature parallax effect
  useEffect(() => {
    const signature = signatureRef.current;
    window.addEventListener("scroll", () => {
      const value = window.scrollY;
      signature.style.transform = `translate3d(-50%, calc(-50% + ${
        value * 0.5
      }px), 0)`;
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [signatureRef]);

  const logos = [
    {
      src: JSLogo,
      alt: "JS",
      info: "Who doesn't love Java?",
    },
    {
      src: ReactLogo,
      alt: "React",
      info: "Kotlin is love <3",
    },
    {
      src: FlutterLogo,
      alt: "Flutter",
      info: "Mobile Apps were never so easy.",
    },
  ];

  const handleNavAnchor = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.hero} id="home">
      <div ref={signatureRef} className={styles.signature}>
        <div>Vishal</div>
        <div>Shrivastava</div>
      </div>
      {logos.map((logo, index) => (
        <div className={styles.techlogo} key={index}>
          <img src={logo.src} alt={logo.alt} />
          <div className={styles.techinfo}>{logo.info}</div>
        </div>
      ))}
      <nav className={styles.nav}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <span>Vishal</span>
          </div>
          <ul>
            <li>
              <a href="#home" onClick={handleNavAnchor}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleNavAnchor}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleNavAnchor}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavAnchor}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>Hello, I'm</p>
          <h1 className={styles.name}>
            Vishal <span>Shrivastava</span>
          </h1>
          <h2 className={styles.title}>
            A
            <ul className={styles.typewriter}>
              <li>
                <span>Software Engineer</span>
              </li>
              <li>
                <span>Problem Solver</span>
              </li>
              <li>
                <span>Creative Thinker</span>
              </li>
              <li>
                <span>Competitive Programmer</span>
              </li>
              <li>
                <span>Application Developer</span>
              </li>
            </ul>
          </h2>
          <div className={styles.actions}>
            <a href="#contact" className={styles.btn_background}>
              Contact Me
            </a>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Hero;