// WordListPage.jsx
import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import WordList from "./WordList/WordList";
import WordTable from "./WordTable/WordTable";
import Menu from "./Menu/Menu";
import styles from "../style/WordListPage.module.css";

const WordListPage = inject('wordStore')(
  observer(({ wordStore }) => {
    const { addWord } = wordStore; 

    useEffect(() => {
      wordStore.fetchWords();
    }, [wordStore]);

    const handleAddWord = (newWord) => {
      addWord(newWord);
    };

    return (
      <div className={styles.wordListPage}>
        <Menu />
        <h2>Add new word to your list</h2>
        <WordList onAddWord={handleAddWord} />
        <h2>Your Word List</h2>
        <WordTable words={wordStore.words} />
      </div>
    );
  })
);

export default WordListPage;
