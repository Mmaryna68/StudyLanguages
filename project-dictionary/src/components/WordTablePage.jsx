// WordTablePage.jsx
import WordTable from "./WordTable";
import data from "../components/data.json";

const WordTablePage = () => {
  return (
    <div>
      <h2>Word List</h2>
      <WordTable words={data} />
    </div>
  );
};

export default WordTablePage;
