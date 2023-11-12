// WordList.jsx
import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import styles from "./WordList.module.css";

const WordList = inject("wordStore")(
  observer(({ wordStore }) => {
    const [newWord, setNewWord] = useState("");
    const [newTranslation, setNewTranslation] = useState("");

    const handleAddNewWord = () => {
      if (newWord.trim() === "") {
        alert("Please enter a word.");
        return;
      }

      // Use MobX store to add a new word
      wordStore.addWord(newWord, newTranslation);

      // Clear the input fields
      setNewWord("");
      setNewTranslation("");
    };

    return (
      <div className={styles.container}>
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          className={styles["input-field"]}
        />
        <input
          type="text"
          value={newTranslation}
          onChange={(e) => setNewTranslation(e.target.value)}
          className={styles["input-field"]}
        />
        <button onClick={handleAddNewWord} className={styles["add-button"]}>
          Add Word
        </button>
      </div>
    );
  })
);

export default WordList;
