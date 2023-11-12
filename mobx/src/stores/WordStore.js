// WordStore.js
import { makeAutoObservable } from 'mobx';

class WordStore {
  words = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  // Метод для получения списка слов с сервера
  async fetchWords() {
    this.loading = true;
    try {
      const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
      const data = await response.json();
      this.words = data;
    } catch (error) {
      console.error('Failed to fetch words:', error);
    } finally {
      this.loading = false;
    }
  }

  // Метод для добавления нового слова
  async addWord(newWord) {
    try {
      const response = await fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWord),
      });

      if (response.ok) {
        const addWord = await response.json();
        this.words.push(addWord);
      }
    } catch (error) {
      console.error('Failed to add word:', error);
    }
  }

  // Метод для редактирования слова
  async updateWord(wordId, editedWord, editedTranslation) {
    try {
      const response = await fetch(`/api/words/${wordId}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ english: editedWord, russian: editedTranslation }),
      });

      if (response.ok) {
        const updatedWord = this.words.find((word) => word.id === wordId);
        if (updatedWord) {
          updatedWord.english = editedWord;
          updatedWord.russian = editedTranslation;
        }
      }
    } catch (error) {
      console.error('Failed to edit word:', error);
    }
  }

  // Метод для удаления слова
   async deleteWord(wordId) {
    try {
      const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${wordId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        this.words = this.words.filter(word => word.id !== wordId);
      }
    } catch (error) {
      console.error('Failed to delete word:', error);
    }
  }
}

const wordStore = new WordStore();

export { wordStore };
