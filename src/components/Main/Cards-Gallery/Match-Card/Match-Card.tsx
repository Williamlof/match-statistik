import "./Match-Card.scss";
import { Match } from "../../../../models/matchInterface";

interface Props {
  match: Match;
}
const MatchCard = ({ match }: Props) => {
  if (match.game === "League of Legends") {
    return (
      <article className="match-card">
        <div className="blur">
          <div className="game-stats">
            <h1>{match.game}</h1>
            <p>
              {match.teamOne.teamName} VS
              {match.teamTwo.teamName}
            </p>
            <p>Final score: {match.finalResult}</p>
            <p>Match length: {match.matchLength}</p>
            <p className="victory">{match.win} Victory!</p>
            <p>Your team: {match.teamOne.players.join(", ")}</p>
            <p>Enemy team: {match.teamTwo.enemyPlayers.join(", ")}</p>
            <p>{match.datePlayed}</p>
          </div>
        </div>
      </article>
    );
  } else if (match.game === "Counter Strike: Global Offensive") {
    return (
      <article className="match-card">
        <div className="blur">
          <div className="game-stats">
            <h1>{match.game}</h1>
            <p>
              {match.teamOne.teamName} VS {match.teamTwo.teamName}
            </p>
            <p>Final score: {match.finalResult}</p>
            <p>Match length: {match.matchLength}</p>
            <p className="victory">{match.win} Victory!</p>
            <p>Your team: {match.teamOne.players.join(", ")}</p>
            <p>Enemy team: {match.teamTwo.enemyPlayers.join(", ")}</p>
            <p>{match.datePlayed}</p>
          </div>
        </div>
      </article>
    );
  } else {
    return null;
  }
};

export default MatchCard;
