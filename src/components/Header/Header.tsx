import "./Header.scss";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
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
    let newSearchValue = e.target.value;
    const searchResult = matches.filter(
      (match) =>
        match.teamOne.players.find((player) => player === newSearchValue) ||
        match.teamTwo.enemyPlayers.find((player) => player === newSearchValue)
    );
    console.log(searchResult);
    setUserSearchResult(searchResult);

    // for (let i = 0; i < matches.length; i++) {
    //   const match = matches[i];
    //   for (let i = 0; i < match.teamOne.players.length; i++) {
    //     let searchResult = match.teamOne.players.filter(
    //       (i) => i === newSearchValue
    //     );
    //     match.teamTwo.enemyPlayers.filter((i) => i === newSearchValue);
    //     if (match.teamOne.players[i] === newSearchValue) {
    //       const searchArr = [];
    //       searchArr.push(searchResult);
    //       console.log(searchArr);
    //     }
    //   }
    // }
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
              <label htmlFor="game">Choose Game:</label>
              <select name="game" value={currentGame} onChange={changeGame}>
                <option value="League of Legends">League of Legends</option>
                <option value="Multiversus">Multiversus</option>
                <option value="Counter Strike: Global Offensive">
                  Counter Strike: Global Offensive
                </option>
                <option value="Scrabble">Scrabble</option>
              </select>
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
            <div>
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
      </header>
    );
  }
};

export default Header;
