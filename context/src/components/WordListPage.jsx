// WordListPage.jsx
import React, { useContext, useState, useEffect } from "react";
import ErrorDisplay from "./Error/ErrorDisplay";
import LoadingIndicator from "./LoadingIndicator/LoadingIndicator";
import WordTable from "./WordTable/WordTable";
import Menu from "./Menu/Menu";
import styles from "../style/WordListPage.module.css";
import { WordsContext } from "./WordsContext";
import { addWordApi } from "./Api";
import { fetchWords } from "./Api";

const WordListPage = () => {
  const { words, addWord, setWords } = useContext(WordsContext);
  const [newWord, setNewWord] = useState("");
  const [newTranslation, setNewTranslation] = useState(""); // Добавляем состояние для нового перевода
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWords();
        setLoading(false);
        setError(null);
        setWords(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, [setWords]);

  const handleAddWord = async () => {
    if (newWord.trim() === "") {
      alert("Please enter a word.");
      return;
    }

    try {
      const addedWord = await addWordApi(newWord, newTranslation); // Передаем новый перевод в функцию addWordApi

      // Вызываем функцию для добавления слова из контекста
      addWord(addedWord);

      setNewWord("");
      setNewTranslation(""); // Очищаем поле для нового перевода
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  return (
    <div className={styles.wordListPage}>
      {loading && <LoadingIndicator />}
      {error && <ErrorDisplay error={error} />}
      <Menu />
      <h2>Add new word to your list</h2>
      <div className={styles.container}>
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          className={styles["input-field"]}
          placeholder="English"
        />
        <input
          type="text"
          value={newTranslation}
          onChange={(e) => setNewTranslation(e.target.value)}
          className={styles["input-field"]}
          placeholder="Russian"
        />
        <button onClick={handleAddWord} className={styles["add-button"]}>
          Add Word
        </button>
      </div>
      <h2>Your Word Table</h2>
      <WordTable words={words} onAddWord={addWord} />
    </div>
  );
};

export default WordListPage;
