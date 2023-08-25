// Footer.jsx
import { useState } from "react";
import WordCardDisplay from "./WordCardDisplay";
import data from "../components/data.json";
import styles from "../style/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isWordCardDisplayOpen, setIsWordCardDisplayOpen] = useState(false);

  const handleWordCardToggle = () => {
    setIsWordCardDisplayOpen(!isWordCardDisplayOpen);
  };

  const navigationLinks = ["HOME", "ABOUT US", "LANGUAGE"];

  return (
    <footer className={styles.footer}>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {navigationLinks.map((link) => (
            <li className={styles.navigationItem} key={link}>
              {link}
            </li>
          ))}
          <li>
            <Link
              to="/word-card"
              className={styles.button}
              onClick={handleWordCardToggle}
            >
              GAME
            </Link>
          </li>
        </ul>
      </nav>

      {isWordCardDisplayOpen && <WordCardDisplay words={data} />}
    </footer>
  );
};

export default Footer;
