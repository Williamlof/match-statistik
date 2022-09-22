import "./Main.scss";
import { Match } from "../../models/matchInterface";
import CardsGallery from "./Cards-Gallery/Cards-Gallery";

interface Props {
  matches: Match[];
}
const Main = ({ matches }: Props): JSX.Element => {
  return (
    <main>
      <CardsGallery matches={matches} />
    </main>
  );
};

export default Main;
