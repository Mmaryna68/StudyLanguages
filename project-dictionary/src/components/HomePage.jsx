// HomePage
import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/HomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.imageContainer}>
        <img
          src="https://englex.ru/app/uploads/5-free-websites-to-learn-words-1.png"
          alt="Language Learning"
          className={styles.homeImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Welcome to our Language Learning App!</h2>
        <p className={styles.description}>
          Start your journey to learning new words.
        </p>
        <Link to="/word-table" className={styles.startButton}>
          <div className={styles.iconCircle}>
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </div>
          Start
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
