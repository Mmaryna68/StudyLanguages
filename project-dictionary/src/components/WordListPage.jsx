// WordListPage.jsx
import WordList from "./WordList";
import styles from "../style/WordListPage.module.css"; // Создайте файл стилей для WordListPage
import Menu from "./Menu";

const WordListPage = () => {
  return (
    <div className={styles.wordListPage}>
      <Menu />
      <h2>Add new word to your list</h2>
      <WordList />
    </div>
  );
};

export default WordListPage;
