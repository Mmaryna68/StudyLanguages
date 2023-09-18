// WordTablePage.jsx
import React, { useState } from "react";
import WordTable from "./WordTable/WordTable";
import data from "../components/data/data.json";
import styles from "../style/WordTablePage.module.css";
import Menu from "./Menu/Menu";

const WordTablePage = () => {
  const [words, setWords] = useState(data); // Состояние для хранения списка слов

  const handleEditWord = (editedWordId, editedWord, editedTranslation) => {
    // Обновляем слово с указанным id
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === editedWordId
          ? { ...word, english: editedWord, russian: editedTranslation }
          : word
      )
    );
  };

  const handleDeleteWord = (wordId) => {
    // Удаляем слово с указанным id
    setWords((prevWords) => prevWords.filter((word) => word.id !== wordId));
  };

  return (
    <div className={styles.wordTablePage}>
      <Menu />
      <h2>Word List</h2>
      <WordTable
        words={words}
        onEditWord={handleEditWord}
        onDeleteWord={handleDeleteWord}
      />
    </div>
  );
};

export default WordTablePage;
