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

  const handleEdit = (wordId, word, translation) => {
    setEditedWordId(wordId);
    setEditedWord(word);
    setEditedTranslation(translation);
    setAutocompleteOptions([]); // Очистить список автозаполнения при редактировании слова
  };

  const handleSave = () => {
    onEditWord(editedWordId, editedWord, editedTranslation);
    setEditedWordId(null);
  };

  const handleCancel = () => {
    setEditedWordId(null);
    setAutocompleteOptions([]); // Очистить список автозаполнения при отмене
  };

  const handleWordChange = (e) => {
    const inputValue = e.target.value;
    setEditedWord(inputValue);

    // Обновить список опций автозаполнения
    const filteredOptions = words.filter((word) =>
      word.english.toLowerCase().startsWith(inputValue.toLowerCase())
    );

    // Update the autocomplete options list
    setAutocompleteOptions(filteredOptions);

    // Находим перевод введенного слова
    const foundTranslation = words.find(
      (word) => word.english.toLowerCase() === inputValue.toLowerCase()
    );

    // Если перевод найден, устанавливаем его, иначе сохраняем предыдущий перевод
    if (foundTranslation) {
      setEditedTranslation(foundTranslation.russian);
    }
  };

  const handleOptionClick = (option) => {
    setEditedWord(option.english);
    setEditedTranslation(option.russian);
    setAutocompleteOptions([]); // Скрыть выпадающий список после выбора опции
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
                  />
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
                word.english
              )}
            </td>
            <td>
              {editedWordId === word.id ? (
                <input
                  type="text"
                  value={editedTranslation}
                  onChange={(e) => setEditedTranslation(e.target.value)}
                />
              ) : (
                word.russian
              )}
            </td>
            <td>
              {editedWordId === word.id ? (
                <>
                  <button
                    className={`${styles.saveButton} ${styles.button}`}
                    onClick={handleSave}
                  >
                    <FontAwesomeIcon icon={faSave} />{" "}
                    {/*  иконка для сохранения */}
                  </button>
                  <button
                    className={`${styles.cancelButton} ${styles.button}`}
                    onClick={handleCancel}
                  >
                    <FontAwesomeIcon icon={faTimes} />{" "}
                    {/*  иконка для отмены */}
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
                    <FontAwesomeIcon icon={faEdit} />{" "}
                    {/*  иконка для редактирования */}
                  </button>
                  <button
                    className={`${styles.deleteButton} ${styles.button}`}
                    onClick={() => onDeleteWord(word.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />{" "}
                    {/*  иконка для удаления */}
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
