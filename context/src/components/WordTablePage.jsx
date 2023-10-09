// WordTablePage.jsx
import React, { useContext } from "react";
import ErrorDisplay from "./Error/ErrorDisplay";
import LoadingIndicator from "./LoadingIndicator/LoadingIndicator";
import WordTable from "./WordTable/WordTable";
import { WordsContext } from "./WordsContext"; // Импортируем контекст
import styles from "../style/WordTablePage.module.css";
import Menu from "./Menu/Menu";

const WordTablePage = () => {
  const { words, editWord, deleteWord, error, loading } =
    useContext(WordsContext); // Получаем доступ к данным и методам из контекста

  return (
    <div className={styles.wordTablePage}>
      {loading && <LoadingIndicator />}
      {error && <ErrorDisplay error={error} />}
      <Menu />
      <h2>Word List</h2>
      <WordTable
        words={words}
        onEditWord={editWord} // Передаем метод для редактирования слова
        onDeleteWord={deleteWord} // Передаем метод для удаления слова
      />
    </div>
  );
};

export default WordTablePage;
