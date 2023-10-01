// WordListPage.jsx
import React, { useState } from "react";
import WordList from "./WordList/WordList";
import WordTable from "./WordTable/WordTable";
import data from "../components/data/data.json";
import Menu from "./Menu/Menu";
import styles from "../style/WordListPage.module.css";

const WordListPage = () => {
  const [words, setWords] = useState(data); // Состояние для хранения списка слов

  const handleAddWord = (newWord) => {
    // Добавляем новое слово в список
    setWords((prevWords) => [...prevWords, newWord]);
  };

  return (
    <div className={styles.wordListPage}>
      <Menu />
      <h2>Add new word to your list</h2>
      <WordList words={words} onAddWord={handleAddWord} />
      <h2>Your Word List</h2>
      <WordTable words={words} />
    </div>
  );
};

export default WordListPage;
