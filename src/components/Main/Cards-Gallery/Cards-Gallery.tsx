import MatchCard from "./Match-Card/Match-Card";
import { Match } from "../../../models/matchInterface";

interface Props {
  matches: Match[];
  currentGame: string;
}

const CardsGallery = ({ matches, currentGame }: Props) => {
  return (
    <div className="match-gallery">
      {matches
        .filter((match) => match.game === currentGame)
        .map((match) => (
          <MatchCard key={match.matchKey + match.game} match={match} />
        ))}
    </div>
  );
};

export default CardsGallery;
