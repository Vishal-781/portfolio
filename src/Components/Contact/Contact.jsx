import React from "react";
import styles from "./Contact.module.css";
import Map from "./../../Assets/images/map.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import Resume from "./../../Assets/images/Resume.png";

const Contact = () => {
  const nameRef = React.useRef(null);
  const messageRef = React.useRef(null);
  const [error, setError] = React.useState("");

  const handleContactSend = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const message = messageRef.current.value;
    if (name && message) {
      setError("");
      window.open(
        `mailto:officialworkvishal91@gmail.com?subject=Message from ${name}&body=${message}`
      );
    } else if (!name) {
      setError("Without a name, I won't know who to reply to :(");
    } else if (!message) {
      setError("Without a message, I won't know what to reply :(");
    }
  };

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/15hpDK2QfPxrDGPitqzAYFrZY2Hwt-i-V/view?usp=sharings"
    );
  };

  const handleMapEvents = () => {
    window.open("https://www.google.com/maps/place/%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A5%8D%E0%A4%A3%E0%A4%BE+%E0%A4%AC%E0%A4%B8+%E0%A4%AC%E0%A5%89%E0%A4%A1%E0%A5%80+%E0%A4%AC%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%A1%E0%A4%B0%E0%A5%8D%E0%A4%B8+%E0%A4%8F%E0%A4%A3%E0%A5%8D%E0%A4%A1+%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A5%87%E0%A4%AF%E0%A4%B0%E0%A5%8D%E0%A4%B8/@25.6600206,78.4718514,21z/data=!4m9!1m2!2m1!1sdatia!3m5!1s0x397712097bb0e9a1:0x75b23468075059db!8m2!3d25.6600461!4d78.4718785!16s%2Fg%2F11krps80d8?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D");
  };

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.map} onClick={handleMapEvents}>
            <img src={Map} alt="Map" />
            <FaMapMarkerAlt className={styles.mapMarker} />
          </div>
          <div className={styles.address}>
            <IoLocationOutline className={styles.icon} />
            <span>
              27/33 - Near Bus body (Hamirpur road) unnao road, Datia, Madhya
              Pradesh, India (475661).
            </span>
          </div>
          <div className={styles.callToActions}>
            <button
              className={styles.resumeDownloadButton}
              onClick={handleResumeDownload}
            >
              Download Resume
              <div className={styles.resumePreviewPopup}>
                <img src={Resume} alt="Resume" />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>Let's Work Together</h2>
          <form target="blank" className={styles.form}>
            <div className={styles.formInput} style={{ gridArea: "message" }}>
              <label htmlFor="message">Your Messsage</label>
              <textarea
                ref={messageRef}
                id="message"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>
            <div className={styles.formInput} style={{ gridArea: "name" }}>
              <label htmlFor="name">Name</label>
              <input
                ref={nameRef}
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <button
              type="submit"
              onClick={handleContactSend}
              style={{ gridArea: "send" }}
            >
              Mail Me
            </button>
            <p className={styles.formError} style={{ gridArea: "error" }}>
              {error}
            </p>
          </form>
          <h2 className={styles.title} style={{ marginTop: "1rem" }}>
            I'm Social Too
          </h2>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/vishal-shrivastava-aa93a1239/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoLinkedin className={styles.icon} />
            </a>
            <a
              href="
                    https://www.github.com/Vishal-781/"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className={styles.icon} />
            </a>
            <a
              href="mailto:
                            officialworkvishal91@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGmail className={styles.icon} />
            </a>
            <a href="tel:+91 7999819086" target="_blank" rel="noreferrer">
              <AiTwotonePhone className={styles.icon} />
            </a>
            <a
              href="https://codeforces.com/profile/vishal_781"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodeforces className={styles.icon} />
            </a>
            <a
              href="https://www.codechef.com/users/vishal_781"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodechef className={styles.icon} />
            </a>
            <a
              href="https://www.leetcode.com/vishal_781/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;