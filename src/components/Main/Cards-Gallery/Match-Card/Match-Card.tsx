import "./Match-Card.scss";
import { Match } from "../../../../models/matchInterface";
import { useState } from "react";
interface Props {
  match: Match;
  userSearchInput: string;
}

const MatchCard = ({ match, userSearchInput }: Props) => {
  let isLoL = match.game === "League of Legends";
  let matchCardClass = "match-card ";
  if (isLoL) matchCardClass += "LOL";
  else if (match.game === "Counter Strike: Global Offensive")
    matchCardClass += "CSGO";
  else if (match.game === "Multiversus") matchCardClass += "MV";
  else if (match.game === "Scrabble") matchCardClass += "SC";
  let isWin = "";

  if (match.teamOneWin || match.teamTwoWin) {
    isWin = "victory";
    if (match.teamOne.players.includes(userSearchInput, 0)) {
      isWin = "defeat";
    }
  }
  if (!match.teamOne || !match.teamTwoWin) {
    isWin = "victory";
    if (match.teamTwo.enemyPlayers.includes(userSearchInput, 0)) {
      isWin = "defeat";
    }
  }
  let players = (
    <div className="players">
      <p>Your team: {match.teamOne.players.join(", ")}</p>
      <p>Enemy team: {match.teamTwo.enemyPlayers.join(", ")}</p>
    </div>
  );
  const [visibleClass, setVisibleClass] = useState<boolean>(false);
  let versus = (
    <p>
      {match.teamOne.teamName} VS {match.teamTwo.teamName}
    </p>
  );
  if (match.game === "Multiversus") {
    versus = (
      <p>
        {match.teamOne.teamName} VS {match.teamTwo.teamName}
      </p>
    );
    players = (
      <div className="players">
        <p>You: {match.teamOne.players[0]}</p>
        <p>Enemy: {match.teamTwo.enemyPlayers[0]}</p>
      </div>
    );
  } else if (match.game === "Scrabble") {
    {
      versus = <></>;
      players = (
        <div className="players">
          <p> You: {match.teamOne.players[0]}</p>
          <p> Enemy: {match.teamTwo.enemyPlayers[0]}</p>
        </div>
      );
    }
  }

  const btnContent = visibleClass ? "-" : "+";
  function showContent() {
    if (visibleClass) {
      setVisibleClass(false);
    } else {
      setVisibleClass(true);
    }
  }
  let displayResult;
  if (match.teamOneWin && match.teamOne.players.includes(userSearchInput, 0)) {
    displayResult = <p className={isWin}>Victory!</p>;
  } else if (
    match.teamTwoWin &&
    match.teamTwo.enemyPlayers.includes(userSearchInput, 0)
  ) {
    displayResult = <p className={isWin}>Victory!</p>;
  } else {
    displayResult = <p className={isWin}>Defeat</p>;
  }

  return (
    <article className={matchCardClass}>
      <div className="blur">
        <div className="game-stats">
          <div className="label">
            <h1>{match.game}</h1>
            {displayResult}
            <button className="btn" onClick={showContent}>
              {btnContent}
            </button>
          </div>
          {visibleClass ? (
            <div className="content visible">
              {versus}

              {match.teamOneWin ? (
                <p>Winner: {match.teamOne.teamName}</p>
              ) : (
                <p>Winner: {match.teamTwo.teamName}</p>
              )}
              <p>Final score: {match.finalResult}</p>
              <p>Match length: {match.matchLength}</p>

              {players}
              <p>{match.datePlayed}</p>
            </div>
          ) : (
            <div className="content">
              {versus}

              {match.teamOneWin ? (
                <p>Winner: {match.teamOne.teamName}</p>
              ) : (
                <p>Winner: {match.teamTwo.teamName}</p>
              )}

              <p>Final score: {match.finalResult}</p>
              <p>Match length: {match.matchLength}</p>

              {players}
              <p>{match.datePlayed}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default MatchCard;
