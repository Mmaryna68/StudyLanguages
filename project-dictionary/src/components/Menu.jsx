// Menu
import { Link } from "react-router-dom";
import styles from "../style/Menu.module.css";
import logo from "../images/logo.png";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Language App" />
        </Link>
      </div>
      <ul className={styles.navigation}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/word-table">WORD TABLE</Link>
        </li>
        <li>
          <Link to="/word-card">GAME</Link>
        </li>
        <li>
          <Link to="/word-list"> ADD WORD TO LIST</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
