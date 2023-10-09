// WordList.jsx

import React, { useState } from "react";
import styles from "./WordList.module.css";

const WordList = ({ words, onAddWord }) => {
  const [newWord, setNewWord] = useState(""); // Состояние для хранения нового слова

  const handleWordChange = (e) => {
    setNewWord(e.target.value);
  };

  const handleAddNewWord = () => {
    // Проверяем, что новое слово не пустое
    if (newWord.trim() === "") {
      alert("Please enter a word.");
      return;
    }

    // Создаем новый объект слова и добавляем его в список слов
    const newWordObject = {
      id: Math.floor(Math.random() * 1000), // Генерируем случайный id для нового слова
      english: newWord,
      russian: "", // добавить поле для перевода
      theme: "", // добавить поле для темы
    };

    // Вызываем функцию onAddWord и передаем ей новое слово
    onAddWord(newWordObject);

    // Сбрасываем состояние нового слова
    setNewWord("");
  };

  return (
    <div className={styles["word-list"]}>
      <input
        type="text"
        value={newWord}
        onChange={handleWordChange}
        className={styles["input-field"]}
      />
      <button onClick={handleAddNewWord} className={styles["add-button"]}>
        Add Word
      </button>
      {words.map((word) => (
        <div key={word.id}>{word.english}</div>
      ))}
    </div>
  );
};

export default WordList;
