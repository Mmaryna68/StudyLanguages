import React, { useState } from "react";
import WordTable from "../WordTable";
import WordList from "../WordList/WordList";
import data from "../data/data.json";

const Main = () => {
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

  const handleAddWord = (newWord) => {
    // Добавляем новое слово в список
    setWords((prevWords) => [...prevWords, newWord]);
  };

  return (
    <main>
      <h2>Word List</h2>
      <WordTable
        words={words}
        onEditWord={handleEditWord}
        onDeleteWord={handleDeleteWord}
      />
      <WordList words={words} onAddWord={handleAddWord} />
    </main>
  );
};

export default Main;
