// WordCardDisplay.jsx
import { useState } from "react";
import Card from "./Card";
import styles from "../style/CardDisplay.module.css";

const WordCardDisplay = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [favoriteWords, setFavoriteWords] = useState([]);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
    setShowTranslation(false);
  };

  const handlePrevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
    setShowTranslation(false);
  };

  const currentWord = words[currentIndex];

  const handleFavoriteToggle = (word, isFavorite) => {
    if (isFavorite) {
      setFavoriteWords((prevFavoriteWords) => [...prevFavoriteWords, word]);
    } else {
      setFavoriteWords((prevFavoriteWords) =>
        prevFavoriteWords.filter((favWord) => favWord !== word)
      );
    }
  };

  return (
    <div className={styles["word-card-display"]}>
      <div className={styles["card-container"]}>
        <button
          className={styles["navigation-buttons"]}
          onClick={handlePrevCard}
        >
          ←
        </button>
        <Card
          word={currentWord.english}
          translation={currentWord.russian}
          transcription={currentWord.transcription}
          isFavorite={favoriteWords.includes(currentWord.english)}
          onFavoriteToggle={handleFavoriteToggle}
          showTranslation={showTranslation}
          onToggleTranslation={() => setShowTranslation((prev) => !prev)}
        />
        <button
          className={styles["navigation-buttons"]}
          onClick={handleNextCard}
        >
          →
        </button>
      </div>
      <div>
        <span className={styles["card-index"]}>
          Card {currentIndex + 1} of {words.length}
        </span>
      </div>
    </div>
  );
};

export default WordCardDisplay;
