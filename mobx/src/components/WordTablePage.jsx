// WordTablePage.jsx
import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import WordTable from "./WordTable/WordTable";
import styles from "../style/WordTablePage.module.css";
import Menu from "./Menu/Menu";

const WordTablePage = inject('wordStore')(observer(({ wordStore }) => {
  useEffect(() => {
    wordStore.fetchWords();
  }, [wordStore]);

  const handleEditWord = (editedWordId, editedWord, editedTranslation) => {
    wordStore.editWord(editedWordId, editedWord, editedTranslation);
  };

  const handleDeleteWord = (wordId) => {
    wordStore.deleteWord(wordId);
  };

  

  return (
    <div className={styles.wordTablePage}>
      <Menu />
      <h2>Word List</h2>
      {wordStore.loading ? (
          <p>Loading...</p>
        ) : (
      <WordTable
        words={wordStore.words} // Используем слова из wordStore
        onEditWord={handleEditWord}
        onDeleteWord={handleDeleteWord}
      />
      )}
    </div>
  );
}));

export default observer(WordTablePage);
