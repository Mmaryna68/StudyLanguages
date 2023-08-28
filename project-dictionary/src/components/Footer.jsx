// Footer.jsx
import { useState, useEffect } from "react";
import WordCardDisplay from "./WordCardDisplay";
import data from "../components/data.json";
import styles from "../style/Footer.module.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [isWordCardDisplayOpen, setIsWordCardDisplayOpen] = useState(false);

  const handleWordCardToggle = () => {
    setIsWordCardDisplayOpen(!isWordCardDisplayOpen);
  };

  const location = useLocation();

  const navigationLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "LANGUAGE", path: "/language" },
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      setIsWordCardDisplayOpen(false);
    }
    if (location.pathname === "/word-card") {
      setIsWordCardDisplayOpen(false);
    }
  }, [location]);

  return (
    <footer className={styles.footer}>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {navigationLinks.map((link) => (
            <li className={styles.navigationItem} key={link.label}>
              <Link to={link.path}>{link.label}</Link>
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

      {isWordCardDisplayOpen && location.pathname === "/word-card" && (
        <WordCardDisplay words={data} />
      )}
    </footer>
  );
};

export default Footer;
