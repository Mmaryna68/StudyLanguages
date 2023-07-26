// WordList.jsx
import React, { useState } from "react";
import styles from "../style/WordList.module.css";

const WordList = ({ words, onAddWord }) => {
  const [newWord, setNewWord] = useState(""); // Состояние для хранения нового слова

  const handleWordChange = (e) => {
    setNewWord(e.target.value);
  };

  const handleAddNewWord = () => {
    // Создаем новый объект слова и добавляем его в список слов
    const newWordObject = {
      id: Math.floor(Math.random() * 1000), // Генерируем случайный id для нового слова (просто для примера)
      english: newWord,
      russian: "", // Можно добавить поле для перевода и вводить его аналогично
      theme: "", // Можно добавить поле для темы и вводить его аналогично
    };

    onAddWord(newWordObject);
    setNewWord(""); // Сбрасываем состояние нового слова
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={newWord}
        onChange={handleWordChange}
        className={styles["input-field"]}
      />
      <button onClick={handleAddNewWord} className={styles["add-button"]}>
        Add Word
      </button>
    </div>
  );
};

export default WordList;
