import React, { useState } from "react";
import styles from "../style/WordCard.module.css";

const WordCard = ({
  word,
  translation,
  transcription,
  isFavorite,
  onFavoriteToggle,
  onRemoveFromFavorites,
}) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className={styles["word-card"]}>
      <h2>{word}</h2>
      {showTranslation && <p>Translation: {translation}</p>}
      <p>Transcription: {transcription}</p>
      {showTranslation ? null : (
        <button
          onClick={handleShowTranslation}
          className={styles["show-translation-button"]}
        >
          Show
        </button>
      )}
      <button
        onClick={() => {
          onFavoriteToggle(word);
          if (isFavorite) {
            onRemoveFromFavorites(word);
          }
        }}
        className={`${styles["favorite-button"]} ${
          isFavorite ? styles["is-favorite"] : ""
        }`}
      >
        {isFavorite ? "\u2661" : "❤️"}
      </button>
    </div>
  );
};

export default WordCard;
