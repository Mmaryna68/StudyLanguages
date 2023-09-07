// Card.jsx
import React, { useEffect, useRef } from "react";
import styles from "./WordCard.module.css";

const Card = ({
  word,
  translation,
  transcription,
  isFavorite,
  onFavoriteToggle,
  showTranslation,
  onToggleTranslation,
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    console.log("Setting focus on button");
    // Установить фокус на кнопку после рендеринга
    buttonRef.current.focus();
  }, []); // Пустой массив зависимостей означает, что эффект будет выполнен один раз после первого рендеринга

  return (
    <div className={styles["word-card"]}>
      <h2>{word}</h2>
      {showTranslation && <p>Translation: {translation}</p>}
      <p>Transcription: {transcription}</p>
      {!showTranslation && (
        <button
          ref={buttonRef}
          onClick={onToggleTranslation}
          className={styles["show-translation-button"]}
        >
          Show
        </button>
      )}
      <button
        onClick={() => {
          onFavoriteToggle(word, !isFavorite);
        }}
        className={`${styles["favorite-button"]} ${
          isFavorite ? styles["is-favorite"] : ""
        }`}
      >
        {isFavorite ? "❤️" : "\u2661"}
      </button>
    </div>
  );
};

export default Card;
