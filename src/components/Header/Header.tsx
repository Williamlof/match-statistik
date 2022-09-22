import "./Header.scss";
import logo from "../../assets/logo.svg";

interface Props {
  currentGame: string;
  setCurrentGame: (currentGame: string) => void;
}

const Header = ({ currentGame, setCurrentGame }: Props) => {
  function changeGame(e: React.ChangeEvent<HTMLInputElement>): void {
    setCurrentGame(e.target.value);
  }
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
            <a href="Sign in">Sign in </a>
            <a href="Sign up">Sign up</a>
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
            <input
              list="sort-by"
              id="sort-by-choice"
              name="sort-by-choice"
            ></input>

            <datalist id="sort-by">
              <option value="Wins">Wins</option>
              <option value="Game time">Game time</option>
              <option value="Loss">Loss</option>
              <option value="Game type">Game type</option>
              <option value="Date">Date</option>
              <option value="Map">Map</option>
            </datalist>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
