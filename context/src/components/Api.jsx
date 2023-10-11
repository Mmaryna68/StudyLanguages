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

const updateWordApi = async (
  wordId,
  editedWord,
  editedTranslation,
  tags = "",
  tags_json = "[]"
) => {
  const url = `${BASE_URL}/${wordId}/update`;

  try {
    const response = await axios.post(url, {
      english: editedWord,
      russian: editedTranslation,
      tags: tags,
      tags_json: tags_json,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to update word with ID ${wordId}`, error);
  }
};

const deleteWordApi = async (wordId) => {
  const url = `${BASE_URL}/${wordId}/delete`;

  try {
    await axios.post(url);
  } catch (error) {
    throw new Error(`Failed to delete word with ID ${wordId}.`);
  }
};

const addWordApi = async (newWord, newTranslation) => {
  const url = `${BASE_URL}/add`;
  try {
    const response = await axios.post(url, {
      english: newWord,
      russian: newTranslation,
    });
    return response.data; // Возвращаем полный объект данных
  } catch (error) {
    throw new Error("Failed to add word.");
  }
};

export { fetchWords, updateWordApi, deleteWordApi, addWordApi };
