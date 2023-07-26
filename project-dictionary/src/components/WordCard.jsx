import styles from "../style/WordCard.module.css";
import React from "react";

const WordCard = ({
  word,
  translation,
  transcription,
  isFavorite,
  onFavoriteToggle,
}) => {
  return (
    <div className={styles["word-card"]}>
      <h2>{word}</h2>
      <p>Translation: {translation}</p>
      <p>Transcription: {transcription}</p>
      <button onClick={onFavoriteToggle} className={styles["favorite-button"]}>
        {isFavorite ? "🤍" : "❤️"}
      </button>
    </div>
  );
};

export default WordCard;
