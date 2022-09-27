import "./Header.scss";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { Match } from "../../models/matchInterface";

interface Props {
  matches: Match[];
  currentGame: string;
  setCurrentGame: (currentGame: string) => void;
  setSignedIn: (signedIn: boolean) => void;
  signedIn: boolean;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const Header = ({
  matches,
  currentGame,
  setCurrentGame,
  setSignedIn,
  signedIn,
  sortBy,
  setSortBy,
}: Props) => {
  function changeGame(e: React.ChangeEvent<HTMLInputElement>): void {
    setCurrentGame(e.target.value);
  }
  function changeSortBy(e: React.ChangeEvent<HTMLSelectElement>): void {
    setSortBy(e.target.value);
  }

  function byDate() {
    setSortBy("Date");
  }
  const navigate = useNavigate();
  if (!signedIn) {
    return (
      <header>
        <div className="header-container">
          <div className="header-top">
            <div className="header-logo">
              <img className="logo" src={logo} alt="" />
              <h1>Match-stats.gg</h1>
            </div>
            <div className="links-container">
              <a href="addgame">Add game </a>
              <a
                onClick={() => {
                  setSignedIn(true);
                  navigate("/user");
                }}
              >
                Sign in
              </a>
              <a href="Sign up">Sign up</a>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <div className="header-container">
          <div className="header-top">
            <div className="header-logo">
              <img className="logo" src={logo} alt="" />
              <h1>Match-stats.gg</h1>
            </div>
            <div className="links-container">
              <a href="addgame">Add game </a>
              <a
                onClick={() => {
                  setSignedIn(true);
                  navigate("/user");
                }}
              >
                Signed in as William
              </a>
              <a
                onClick={() => {
                  setSignedIn(false);
                  navigate("/");
                }}
              >
                Sign Out
              </a>
            </div>
          </div>
          <div className="sorting-container">
            <div>
              <label htmlFor="choose-game">Choose Game:</label>
              <input
                list="choose-game"
                id="game"
                name="game"
                value={currentGame}
                onChange={changeGame}
              ></input>

              <datalist id="choose-game">
                <option value="League of Legends">League of Legends</option>
                <option value="Multiversus">Multiversus</option>
                <option value="Counter Strike: Global Offensive">
                  Counter Strike: Global Offensive
                </option>
                <option value="Scrabble">Scrabble</option>
                <option value="Mario Kart">Mario Kart</option>
              </datalist>
            </div>
            <div>
              <label htmlFor="sort-by">Sort by:</label>

              <select id="sort-by" value={sortBy} onChange={changeSortBy}>
                <option value="Game time">Game time</option>
                <option
                  value="Date"
                  onSelect={() => {
                    byDate;
                  }}
                >
                  Date
                </option>
              </select>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
