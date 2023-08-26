// WordCardPage.jsx
import WordCardDisplay from "./WordCardDisplay";
import data from "../components/data.json";
import Menu from "./Menu";

const WordCardPage = () => {
  return (
    <div>
      <Menu />
      <WordCardDisplay words={data} />
    </div>
  );
};

export default WordCardPage;
