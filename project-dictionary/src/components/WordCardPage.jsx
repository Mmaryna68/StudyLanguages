// WordCardPage.jsx
import WordCardDisplay from "./WordCardDisplay";
import data from "../components/data.json";

const WordCardPage = () => {
  return (
    <div>
      <WordCardDisplay words={data} />
    </div>
  );
};

export default WordCardPage;
