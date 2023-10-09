import "../style/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import WordCardPage from "./WordCardPage";
import WordTablePage from "./WordTablePage";
import WordListPage from "./WordListPage";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import NoMatch from "./Error404/NoMatch";
import { WordsProvider } from "./WordsContext";

function App() {
  return (
    <WordsProvider>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/word-card" element={<WordCardPage />} />
            <Route path="/word-table" element={<WordTablePage />} />
            <Route path="/word-list" element={<WordListPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </WordsProvider>
  );
}

export default App;
