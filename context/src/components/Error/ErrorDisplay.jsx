import React from "react";
import styles from "./ErrorDisplay.module.css";

const ErrorDisplay = ({ error }) => {
  // Проверяем, есть ли ошибка, и отображаем сообщение только если есть
  if (!error) {
    return null;
  }

  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>
        Oops! An error occurred: {error.message}
      </p>
    </div>
  );
};

export default ErrorDisplay;
