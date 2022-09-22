import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MatchForm from "./Views/MatchForm";
import leagueData from "./lolMatches.json";
import csgoData from "./csgoMatches.json";
import { Match } from "./models/matchInterface";
import { Routes, Route } from "react-router-dom";
let allData = [...leagueData.leagueMatches, ...csgoData.csgoMatches];
function App() {
  const [matches, setMatches] = useState<Match[]>(allData);
  const [currentGame, setCurrentGame] = useState<string>("League of Legends");

  return (
    <div className="App">
      <Header currentGame={currentGame} setCurrentGame={setCurrentGame} />
      <Routes>
        <Route
          path="/"
          element={<Main matches={matches} currentGame={currentGame} />}
        ></Route>
        <Route path="/addgame" element={<MatchForm />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
