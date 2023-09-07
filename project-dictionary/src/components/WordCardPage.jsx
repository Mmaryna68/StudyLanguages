// WordCardPage.jsx
import WordCardDisplay from "./Game/WordCardDisplay";
import data from "../components/data/data.json";
import Menu from "./Menu/Menu";

const WordCardPage = () => {
  return (
    <div>
      <Menu />
      <WordCardDisplay words={data} />
    </div>
  );
};

export default WordCardPage;
