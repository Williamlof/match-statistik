import "./Match-Card.scss";
import { Match } from "../../../../models/matchInterface";

interface Props {
  matches: Match;
}
const MatchCard = ({ matches }: Props) => {
  return (
    <article className="match-card">
      <div className="blur">
        <div className="game-stats">
          <h1>{matches.game}</h1>
          <p>
            {matches.teamOne.teamName} VS {matches.teamTwo.teamName}
          </p>
          <p>Final score: {matches.finalResult}</p>
          <p>Match length: {matches.matchLength}</p>
          <p className="victory">{matches.win} Victory!</p>
          <p>Your team: {matches.teamOne.players.join(", ")}</p>
          <p>Enemy team: {matches.teamTwo.enemyPlayers.join(", ")}</p>
          <p>{matches.datePlayed}</p>
        </div>
      </div>
    </article>
  );
};

export default MatchCard;
