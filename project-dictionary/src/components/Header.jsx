// Header.jsx
import React, { useState } from "react";
import WordSlider from "./WordSlider";
import styles from "../style/Header.module.css";
import data from "../components/data.json";

const Header = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [favoriteWords, setFavoriteWords] = useState([]);

  const handleSliderToggle = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  const handleFavoriteToggle = (wordId) => {
    const selectedWord = data.find((word) => word.id === wordId);
    if (!selectedWord) return;

    if (favoriteWords.includes(selectedWord)) {
      setFavoriteWords(favoriteWords.filter((word) => word.id !== wordId));
    } else {
      setFavoriteWords([...favoriteWords, selectedWord]);
    }
  };

  const handleRemoveFromFavorites = (word) => {
    setFavoriteWords(favoriteWords.filter((favWord) => favWord.id !== word.id));
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>LANGUAGE</li>
          <li>
            <button onClick={handleSliderToggle}>FAVOURITE</button>
          </li>
        </ul>
      </nav>
      {isSliderOpen && (
        <WordSlider
          words={data}
          favoriteWords={favoriteWords}
          onFavoriteToggle={handleFavoriteToggle}
          onCloseSlider={handleSliderToggle}
          onRemoveFromFavorites={handleRemoveFromFavorites}
        />
      )}
    </header>
  );
};

export default Header;
