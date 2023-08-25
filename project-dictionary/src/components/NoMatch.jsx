//NoMatch.jsx
import { Link } from "react-router-dom";
import styles from "../style/NoMatch.module.css";

const NoMatch = () => {
  return (
    <div className={styles.noMatch}>
      <div className={styles.content}>
        <h1 className={styles.errorText}>Oops! Something went wrong.</h1>
        <p className={styles.errorMessage}>
          The page you are looking for might have been removed or doesn't exist.
        </p>
        <p className={styles.goBack}>
          Go back to the{" "}
          <Link to="/" className={styles.link}>
            Home page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
