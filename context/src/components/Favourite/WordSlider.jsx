// WordSlider.jsx
import WordCard from "../Card/WordCard";
import styles from "./Slider.module.css";

const WordSlider = ({
  words,
  favoriteWords,
  onFavoriteToggle,
  onCloseSlider,
  onRemoveFromFavorites,
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
            isFavorite={favoriteWords.some((favWord) => favWord.id === word.id)}
            onFavoriteToggle={() => onFavoriteToggle(word.id)}
            onRemoveFromFavorites={onRemoveFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default WordSlider;
