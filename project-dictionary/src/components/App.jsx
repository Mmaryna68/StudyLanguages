import "../style/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import WordCardPage from "./WordCardPage";
import WordTablePage from "./WordTablePage";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import NoMatch from "./NoMatch";

function App() {
  return (
    <div className="app">
      <Router>
        <Menu />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/word-card" element={<WordCardPage />} />
          <Route path="/word-table" element={<WordTablePage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
