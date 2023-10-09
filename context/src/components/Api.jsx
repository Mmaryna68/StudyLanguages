// Api.jsx
import axios from "axios";

const BASE_URL = "http://itgirlschool.justmakeit.ru/api/words";

const fetchWords = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch words.");
  }
};

const updateWordApi = async (wordId, editedWord, editedTranslation) => {
  const url = `${BASE_URL}/${wordId}`;

  try {
    const response = await axios.put(url, {
      english: editedWord,
      russian: editedTranslation,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to update word with ID ${wordId}.`);
  }
};

const deleteWordApi = async (wordId) => {
  const url = `${BASE_URL}/${wordId}`;

  try {
    await axios.delete(url);
  } catch (error) {
    throw new Error(`Failed to delete word with ID ${wordId}.`);
  }
};

const addWordApi = async (newWord, newTranslation) => {
  try {
    const response = await axios.post(BASE_URL, {
      english: newWord,
      russian: newTranslation,
    });
    return response.data; // Возвращаем полный объект данных
  } catch (error) {
    throw new Error("Failed to add word.");
  }
};

export { fetchWords, updateWordApi, deleteWordApi, addWordApi };
