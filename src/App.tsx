import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import jsonData from "./Matches.json";
import { Match } from "./models/matchInterface";

function App() {
  const [matches, setMatches] = useState<Match[]>(jsonData.matches);
  return (
    <div className="App">
      <Header />
      <Main matches={matches} />
      <Footer />
    </div>
  );
}

export default App;
