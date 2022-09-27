import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MatchForm from "./Views/MatchForm";
import leagueData from "./lolMatches.json";
import csgoData from "./csgoMatches.json";
import scrabbleData from "./scrabbleMatches.json";
import marioKartData from "./MarioKartMatches.json";
import multiversusData from "./multiversusMatches.json";
import { Match } from "./models/matchInterface";
import { Routes, Route } from "react-router-dom";
let allData = [
  ...leagueData.leagueMatches,
  ...csgoData.csgoMatches,
  ...scrabbleData.scrabbleMatches,
  ...marioKartData.MarioKartMatches,
  ...multiversusData.multiversusMatches,
];
function App() {
  const [matches, setMatches] = useState<Match[]>(allData);
  const [currentGame, setCurrentGame] = useState<string>("League of Legends");
  const [sortBy, setSortBy] = useState<string>("Date");
  const [signedIn, setSignedIn] = useState<boolean>(false);
  return (
    <div className="App">
      <Header
        matches={matches}
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
        setSignedIn={setSignedIn}
        signedIn={signedIn}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Routes>
        <Route
          path="/user"
          element={
            <Main
              sortBy={sortBy}
              matches={matches}
              currentGame={currentGame}
              signedIn={signedIn}
            />
          }
        ></Route>
        <Route
          path="/"
          element={
            <Main
              sortBy={sortBy}
              matches={matches}
              currentGame={currentGame}
              signedIn={signedIn}
            />
          }
        ></Route>
        <Route path="/addgame" element={<MatchForm />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
