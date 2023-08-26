// WordTablePage.jsx
import WordTable from "./WordTable";
import data from "../components/data.json";
import styles from "../style/WordTablePage.module.css";
import Menu from "./Menu";

const WordTablePage = () => {
  return (
    <div className={styles.wordTablePage}>
      <Menu />
      <h2>Word List</h2>
      <WordTable words={data} />
    </div>
  );
};

export default WordTablePage;
