import MatchCard from "./Match-Card/Match-Card";
import { Match } from "../../../models/matchInterface";

interface Props {
  matches: Match[];
}

const CardsGallery = ({ matches }: Props): JSX.Element => (
  <div className="match-gallery">
    {matches.map((match) => (
      <MatchCard key={match.matchKey} matches={match} />
    ))}
  </div>
);

export default CardsGallery;
