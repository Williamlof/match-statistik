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
  setUserSearchResult: (userSearchResult: Match[]) => void;
  userSearchInput: string;
  setUserSearchInput: (userSearchInput: string) => void;
}

const Header = ({
  matches,
  currentGame,
  setCurrentGame,
  setSignedIn,
  signedIn,
  sortBy,
  setSortBy,
  setUserSearchResult,
  userSearchInput,
  setUserSearchInput,
}: Props) => {
  function changeGame(e: React.ChangeEvent<HTMLSelectElement>): void {
    setCurrentGame(e.target.value);
  }
  function changeSortBy(e: React.ChangeEvent<HTMLSelectElement>): void {
    setSortBy(e.target.value);
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    let newSearchValue = e.target.value.toLowerCase();
    let searchString = newSearchValue;
    const searchResult = matches.filter(
      (match) =>
        match.teamOne.players.find(
          (player) => player.toLowerCase() === newSearchValue
        ) ||
        match.teamTwo.enemyPlayers.find(
          (player) => player.toLowerCase() === newSearchValue
        )
    );

    console.log(searchResult);
    setUserSearchResult(searchResult);
    setUserSearchInput(searchString);
  }

  function handleLogIn() {
    let newSearchValue = "William";
    const searchResult = matches.filter(
      (match) =>
        match.teamOne.players.find((player) => player === newSearchValue) ||
        match.teamTwo.enemyPlayers.find((player) => player === newSearchValue)
    );
    setUserSearchResult(searchResult);
    setUserSearchInput(newSearchValue);
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
              <a
                onClick={(e: any) => {
                  if (signedIn) {
                    e.preventDefault();
                    navigate("/addgame");
                  }
                }}
              >
                Add game
              </a>
              <a
                onClick={() => {
                  setSignedIn(true);
                  handleLogIn();
                  navigate("/user");
                }}
              >
                Sign in
              </a>
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
              <a
                onClick={(e: any) => {
                  if (signedIn) {
                    e.preventDefault();
                    navigate("/addgame");
                  }
                }}
              >
                Add game
              </a>
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
              <div className="choose-game">
                <label htmlFor="game">Choose Game:</label>
                <select
                  name="game"
                  className="select-position1"
                  value={currentGame}
                  onChange={changeGame}
                >
                  <option value="League of Legends">League of Legends</option>
                  <option value="Multiversus">Multiversus</option>
                  <option value="Counter Strike: Global Offensive">
                    Counter Strike: Global Offensive
                  </option>
                  <option value="Scrabble">Scrabble</option>
                </select>
              </div>
            </div>
            <div>
              <div className="sort-by">
                <label htmlFor="sort-by">Sort by:</label>
                <select
                  className="select-position"
                  name="sort-by"
                  value={sortBy}
                  onChange={changeSortBy}
                >
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
            <div>
              <div className="search-user">
                <label htmlFor="searchUser">Search for a user:</label>
                <input
                  name="searchUser"
                  placeholder="eg. Tim"
                  value={userSearchInput}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearch(e)
                  }
                ></input>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
