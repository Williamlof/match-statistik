import MatchCard from "./Match-Card/Match-Card";
import { Match } from "../../../models/matchInterface";
import "./Cards-Gallery.scss";
interface Props {
  matches: Match[];
  currentGame: string;
  sortBy: string;
  userSearchResult: Match[];
}

const CardsGallery = ({
  matches,
  currentGame,
  sortBy,
  userSearchResult,
}: Props) => {
  let currentGameMatches = matches.filter(
    (match) => match.game === currentGame
  );

  function calcWins() {
    let wins = 0;
    currentGameMatches
      .sort((a, b) =>
        a.datePlayed < b.datePlayed ? 1 : b.datePlayed < a.datePlayed ? -1 : 0
      )
      .slice(0, 10)
      .forEach((match) => {
        if (match.win == true) {
          wins = wins + 1;
        }
      });
    return wins;
  }
  function calcWinRate() {
    let winRate = (calcWins() / 10) * 100;
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
      <h1>You have won {calcWins()} out of your last 10 games.</h1>
      <p>Your winrate is {calcWinRate()}%</p>
      <div className="accordion">
        {(userSearchResult.length > 0 ? userSearchResult : matches)
          .filter((match) => match.game === currentGame)
          .sort(sortFunction)
          .map((match) => (
            <MatchCard key={match.matchKey + match.game} match={match} />
          ))}
      </div>
    </div>
  );
};

export default CardsGallery;
