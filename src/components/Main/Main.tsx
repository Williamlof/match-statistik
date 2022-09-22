import "./Main.scss";
import { Match } from "../../models/matchInterface";
import CardsGallery from "./Cards-Gallery/Cards-Gallery";

interface Props {
  matches: Match[];
  currentGame: string;
}
const Main = ({ matches, currentGame }: Props) => {
  return (
    <main>
      <CardsGallery matches={matches} currentGame={currentGame} />
    </main>
  );
};

export default Main;
