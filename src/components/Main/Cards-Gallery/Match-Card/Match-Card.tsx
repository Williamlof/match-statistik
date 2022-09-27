import "./Match-Card.scss";
import { Match } from "../../../../models/matchInterface";

interface Props {
  match: Match;
}
const MatchCard = ({ match }: Props) => {
  let isLoL = match.game === "League of Legends";
  let matchCardClass = "match-card ";
  if (isLoL) matchCardClass += "LOL";
  else if (match.game === "Counter Strike: Global Offensive")
    matchCardClass += "CSGO";
  else if (match.game === "Multiversus") matchCardClass += "MV";
  else if (match.game === "Mario Kart") matchCardClass += "MK";
  else if (match.game === "Scrabble") matchCardClass += "SC";
  let isWin = "";
  if (match.win) {
    isWin = "victory";
  } else {
    isWin = "defeat";
  }

  let versus = (
    <p>
      {match.teamOne.teamName} VS {match.teamTwo.teamName}
    </p>
  );
  if (match.game === "Mario Kart || Multiversus") {
    versus = (
      <p>
        {match.teamOne.characterName} VS {match.teamTwo.characterName}
      </p>
    );
  }
  let players = (
    <div className="players">
      <p>Your team: {match.teamOne.players.join(", ")}</p>
      <p>Enemy team: {match.teamTwo.enemyPlayers.join(", ")}</p>
    </div>
  );
  if (match.game === "Mario Kart") {
    players = (
      <div className="players">
        <p>Your character: {match.teamOne.characterName}</p>
        <p>
          Enemy characters: {match.teamTwo.characterName}
          {match.teamThree?.characterName}, {match.teamFour?.characterName} ,{" "}
          {match.teamFive?.characterName} , {match.teamSix?.characterName},{" "}
          {match.teamSeven?.characterName}, {match.teamEight?.characterName},{" "}
        </p>
      </div>
    );
  }

  return (
    <article className={matchCardClass}>
      <div className="blur">
        <div className="game-stats">
          <div className="label">
            <h1>{match.game}</h1>
            <p className={isWin}>{match.win ? "Victory!" : "Defeat"}</p>
          </div>
          <div className="content">
            {versus}
            <p>Final score: {match.finalResult}</p>
            <p>Match length: {match.matchLength}</p>
            {players}
            <p>{match.datePlayed}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MatchCard;
