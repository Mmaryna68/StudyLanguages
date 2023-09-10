// WordCardDisplay.jsx
import { useState } from "react";
import Card from "../Card/Card";
import styles from "./CardDisplay.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const WordCardDisplay = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [favoriteWords, setFavoriteWords] = useState([]);
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);

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

  // Функция для увеличения счетчика изученных слов
  const handleIncrementLearnedWords = () => {
    setLearnedWordsCount((prevCount) => prevCount + 1);
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
        <TransitionGroup component={null}>
          <CSSTransition
            key={currentIndex}
            classNames={{
              enter: styles["slideInRight-enter"],
              enterActive: styles["slideInRight-enter-active"],
              exit: styles["slideOutLeft-exit"],
              exitActive: styles["slideOutLeft-exit-active"],
            }}
            timeout={300}
          >
            <Card
              word={currentWord.english}
              translation={currentWord.russian}
              transcription={currentWord.transcription}
              isFavorite={favoriteWords.includes(currentWord.english)}
              onFavoriteToggle={handleFavoriteToggle}
              showTranslation={showTranslation}
              onToggleTranslation={() => {
                setShowTranslation((prev) => !prev);
                handleIncrementLearnedWords(); // Вызываем функцию увеличения счетчика
              }}
            />
          </CSSTransition>
        </TransitionGroup>
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
      <div>
        <p>Learned Words in This Training Session: {learnedWordsCount}</p>
      </div>
      {currentIndex === words.length - 1 && (
        <div>
          <p>No more cards to show.</p>
        </div>
      )}
    </div>
  );
};

export default WordCardDisplay;
