import React from "react";
import WordCard from "./WordCard";
import styles from "../style/Slider.module.css";

const WordSlider = ({
  words,
  favoriteWords,
  onFavoriteToggle,
  onCloseSlider,
}) => {
  return (
    <div className={styles["slider-container"]}>
      <button className={styles["close-button"]} onClick={onCloseSlider}>
        &#10005;
      </button>
      <div className={styles["word-slider"]}>
        {words.map((word) => (
          <WordCard
            key={word.id}
            word={word.english}
            translation={word.russian}
            transcription={word.transcription}
            isFavorite={favoriteWords.includes(word.english)}
            onFavoriteToggle={onFavoriteToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default WordSlider;
