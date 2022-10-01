import MatchCard from "./Match-Card/Match-Card";
import { Match } from "../../../models/matchInterface";
import "./Cards-Gallery.scss";
interface Props {
  matches: Match[];
  currentGame: string;
  sortBy: string;
  userSearchResult: Match[];
  userSearchInput: string;
}

const CardsGallery = ({
  matches,
  currentGame,
  sortBy,
  userSearchResult,
  userSearchInput,
}: Props) => {
  let currentGameMatches = matches.filter(
    (match) => match.game === currentGame
  );
  userSearchResult.length > 0 ? userSearchResult : currentGameMatches;

  function calcWins() {
    if (userSearchResult.length > 0) {
      let winner = 0;

      currentGameMatches
        .sort((a, b) =>
          a.datePlayed < b.datePlayed ? 1 : b.datePlayed < a.datePlayed ? -1 : 0
        )
        .forEach((match) => {
          if (
            match.teamOne.players.includes(userSearchInput, 0) &&
            match.game == currentGame &&
            match.teamOneWin
          ) {
            winner += 1;
          } else if (
            match.teamTwo.enemyPlayers.includes(userSearchInput, 0) &&
            match.game == currentGame &&
            match.teamTwoWin
          ) {
            winner += 1;
          }
        }, currentGameMatches.slice(0, 10));
      return winner;
    } else {
      let winner = 0;
      currentGameMatches
        .sort((a, b) =>
          a.datePlayed < b.datePlayed ? 1 : b.datePlayed < a.datePlayed ? -1 : 0
        )
        .slice(0, 10)
        .forEach((match) => {
          if (
            match.teamOne.players.includes(userSearchInput, 0) &&
            match.game == currentGame &&
            match.teamOneWin
          ) {
            winner += 1;
          } else if (
            match.teamTwo.enemyPlayers.includes(userSearchInput, 0) &&
            match.game == currentGame &&
            match.teamTwoWin
          ) {
            winner += 1;
          }
        }, currentGameMatches.slice(0, 10));
      return winner;
    }
  }
  function calcUserGames() {
    let userMatches = 0;
    userSearchResult
      .sort((a, b) =>
        a.datePlayed < b.datePlayed ? 1 : b.datePlayed < a.datePlayed ? -1 : 0
      )
      .forEach((match) => {
        if (match.game === currentGame) {
          userMatches = userMatches + 1;
        }
      });
    if (userMatches > 10) {
      userMatches = 10;
    }
    return userMatches;
  }
  function calcWinRate() {
    let winRate = (calcWins() / calcUserGames()) * 100;
    return winRate;
  }
  let sortFunction: (a: Match, b: Match) => number;
  if (sortBy == "Date") {
    sortFunction = (a, b) =>
      a.datePlayed < b.datePlayed ? 1 : b.datePlayed < a.datePlayed ? -1 : 0;
  } else if (sortBy == "Game time") {
    sortFunction = (a, b) =>
      a.matchLength < b.matchLength
        ? 1
        : b.matchLength < a.matchLength
        ? -1
        : 0;
  } else {
    sortFunction = (a, b) =>
      a.datePlayed < b.datePlayed ? 1 : b.datePlayed < a.datePlayed ? -1 : 0;
  }

  return (
    <div className="match-gallery accordion-body">
      {userSearchResult.length > 0 ? (
        <>
          <h1>
            You have won {calcWins()} out of your last {calcUserGames()} games.
          </h1>
          <p>Your winrate is {calcWinRate()}%</p>
        </>
      ) : (
        ""
      )}
      {userSearchResult.length > 0 ? (
        <div className="accordion">
          {(userSearchResult.length > 0 ? userSearchResult : matches)
            .filter((match) => match.game === currentGame)
            .sort(sortFunction)
            .map((match) => (
              <MatchCard
                key={match.matchKey + match.game}
                match={match}
                userSearchInput={userSearchInput}
              />
            ))}
        </div>
      ) : (
        <h1>No games found for user "{userSearchInput}"</h1>
      )}
    </div>
  );
};

export default CardsGallery;
