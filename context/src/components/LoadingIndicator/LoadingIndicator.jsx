// LoadingIndicator.jsx
import React from "react";
import styles from "./LoadingIndicator.module.css";

const LoadingIndicator = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default LoadingIndicator;
