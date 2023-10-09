import React, { createContext, useState, useEffect } from "react";
import { fetchWords, updateWordApi, deleteWordApi, addWordApi } from "./Api"; // Импорт функций для работы с данными на сервере

const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWords();
        setWords(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const editWord = async (editedWordId, editedWord, editedTranslation) => {
    try {
      // Отправляем запрос на сервер для обновления слова
      const updatedWord = await updateWordApi(
        editedWordId,
        editedWord,
        editedTranslation
      );

      // Обновляем состояние слов в контексте
      setWords((prevWords) =>
        prevWords.map((word) => (word.id === editedWordId ? updatedWord : word))
      );

      // Логирование
      console.log("editWord success:", updatedWord);
    } catch (error) {
      // Обрабатываем ошибку при обновлении слова
      console.error("editWord error:", error);
    }
  };

  const deleteWord = async (wordId) => {
    try {
      // Отправляем запрос на сервер для удаления слова
      await deleteWordApi(wordId);

      // Удаляем слово из состояния слов в контексте
      setWords((prevWords) => prevWords.filter((word) => word.id !== wordId));

      // Логирование
      console.log("deleteWord success:", wordId);
    } catch (error) {
      // Обрабатываем ошибку при удалении слова
      console.error("deleteWord error:", error);
    }
  };

  const addWord = async (newWord) => {
    try {
      const addedWord = await addWordApi(newWord);
      setWords((prevWords) => [...prevWords, addedWord]);

      // Логирование
      console.log("addWord success:", addedWord);
    } catch (error) {
      console.error("addWord error:", error);
    }
  };

  const contextValue = {
    words,
    setWords,
    loading,
    error,
    editWord,
    deleteWord,
    addWord,
  };

  return (
    <WordsContext.Provider value={contextValue}>
      {children}
    </WordsContext.Provider>
  );
};

export { WordsProvider, WordsContext };
