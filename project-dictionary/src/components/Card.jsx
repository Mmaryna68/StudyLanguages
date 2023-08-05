// Card.jsx
import React from "react";
import styles from "../style/WordCard.module.css";

const Card = ({
  word,
  translation,
  transcription,
  isFavorite,
  onFavoriteToggle,
  showTranslation,
  onToggleTranslation,
}) => {
  return (
    <div className={styles["word-card"]}>
      <h2>{word}</h2>
      {showTranslation && <p>Translation: {translation}</p>}
      <p>Transcription: {transcription}</p>
      {!showTranslation && (
        <button
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
