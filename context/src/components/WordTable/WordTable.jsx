// WordTable.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Импорт компонента для использования иконок Font Awesome
import {
  faSave,
  faTimes,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"; // Импорт иконок для кнопок
import styles from "./WordTable.module.css";

const WordTable = ({ words, onEditWord, onDeleteWord }) => {
  const [editedWordId, setEditedWordId] = useState(null);
  const [editedWord, setEditedWord] = useState("");
  const [editedTranslation, setEditedTranslation] = useState("");
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [errorWord, setErrorWord] = useState(false);
  const [errorTranslation, setErrorTranslation] = useState(false);

  const handleEdit = (wordId, word, translation) => {
    setEditedWordId(wordId);
    setEditedWord(word);
    setEditedTranslation(translation);
    setAutocompleteOptions([]);
    setErrorWord(false); // Сбрасываем ошибку при редактировании
    setErrorTranslation(false);
  };

  const handleSave = () => {
    const trimmedWord = editedWord.trim();
    const trimmedTranslation = editedTranslation.trim();

    // Проверяем, что введенное слово существует в данных (выбирает только слово из массива)
    /*const isWordValid = words.some((item) => item.english === trimmedWord);

    if (!isWordValid) {
      setErrorWord(true);
      return;
    } else {
      setErrorWord(false);
    }*/

    if (trimmedWord === "") {
      setErrorWord(true); // Устанавливаем ошибку, если поле пустое
    } else {
      setErrorWord(false); // Сбрасываем ошибку, если поле заполнено
    }

    if (trimmedTranslation === "") {
      setErrorTranslation(true);
    } else {
      setErrorTranslation(false);
    }

    if (trimmedWord === "" || trimmedTranslation === "") {
      return;
    }

    onEditWord(editedWordId, trimmedWord, trimmedTranslation);
    setEditedWordId(null);
  };

  const handleCancel = () => {
    setEditedWordId(null);
    setAutocompleteOptions([]);
    setErrorWord(false); // Сбрасываем ошибку при отмене
    setErrorTranslation(false);
  };

  const handleWordChange = (e) => {
    const inputValue = e.target.value;
    setEditedWord(inputValue);

    // Регулярное выражение для проверки на английские буквы
    const englishLettersOnly = /^[a-zA-Z\s]*$/;

    if (!englishLettersOnly.test(inputValue)) {
      setErrorWord("Enter English letters");
    } else if (inputValue.trim() === "") {
      setErrorWord("Fill in the word field");
    } else {
      setErrorWord("");
    }

    const filteredOptions = words.filter((word) =>
      word.english.toLowerCase().startsWith(inputValue.toLowerCase())
    );

    setAutocompleteOptions(filteredOptions);

    const foundTranslation = words.find(
      (word) => word.english.toLowerCase() === inputValue.toLowerCase()
    );

    if (foundTranslation) {
      setEditedTranslation(foundTranslation.russian);
    }

    // Обновляем состояние ошибки для слова
    setErrorTranslation(""); // Сбрасываем ошибку для перевода
  };

  const handleTranslationChange = (e) => {
    const inputValue = e.target.value;
    setEditedTranslation(inputValue);

    // Регулярное выражение для проверки на кириллицу
    const russianLettersOnly = /^[а-яА-Я\s]*$/;

    if (!russianLettersOnly.test(inputValue)) {
      setErrorTranslation("Enter Russian letters");
    } else if (inputValue.trim() === "") {
      setErrorTranslation("Fill in the translation field");
    } else {
      setErrorTranslation("");
    }

    // Обновляем состояние ошибки для перевода
    setErrorWord(""); // Сбрасываем ошибку для слова
  };

  const handleOptionClick = (option) => {
    setEditedWord(option.english);
    setEditedTranslation(option.russian);
    setAutocompleteOptions([]);
    setErrorWord(false);
    setErrorTranslation(false);
  };

  return (
    <table className={styles["word-table"]}>
      <thead>
        <tr>
          <th>Word</th>
          <th>Translation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <tr key={word.id}>
            <td>
              {editedWordId === word.id ? (
                <div>
                  <input
                    type="text"
                    value={editedWord}
                    onChange={handleWordChange}
                    list="autocompleteList"
                    className={errorWord ? styles.error : ""}
                    placeholder="Enter English letters"
                  />
                  {errorWord && (
                    <div className={styles.errorMessage}>{errorWord}</div>
                  )}
                  <datalist id="autocompleteList">
                    {autocompleteOptions.map((option) => (
                      <option
                        key={option.id}
                        value={option.english}
                        onClick={() => handleOptionClick(option)}
                      />
                    ))}
                  </datalist>
                </div>
              ) : (
                <span>{word.english}</span>
              )}
            </td>
            <td>
              {editedWordId === word.id ? (
                <div>
                  <input
                    type="text"
                    value={editedTranslation}
                    onChange={handleTranslationChange}
                    className={errorTranslation ? styles.error : ""}
                    placeholder="Enter Russian letters"
                  />
                  {errorTranslation && (
                    <div className={styles.errorMessage}>
                      {errorTranslation}
                    </div>
                  )}
                </div>
              ) : (
                <span>{word.russian}</span>
              )}
            </td>
            <td>
              {editedWordId === word.id ? (
                <>
                  <button
                    className={`${styles.saveButton} ${styles.button}`}
                    onClick={handleSave}
                    disabled={errorWord || errorTranslation}
                  >
                    <FontAwesomeIcon icon={faSave} /> Save
                  </button>
                  <button
                    className={`${styles.cancelButton} ${styles.button}`}
                    onClick={handleCancel}
                  >
                    <FontAwesomeIcon icon={faTimes} /> Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={`${styles.editButton} ${styles.button}`}
                    onClick={() =>
                      handleEdit(word.id, word.english, word.russian)
                    }
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className={`${styles.deleteButton} ${styles.button}`}
                    onClick={() => onDeleteWord(word.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WordTable;
