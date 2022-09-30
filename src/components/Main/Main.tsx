import "./Main.scss";
import { Match } from "../../models/matchInterface";
import CardsGallery from "./Cards-Gallery/Cards-Gallery";

interface Props {
  matches: Match[];
  currentGame: string;
  signedIn: boolean;
  sortBy: string;
  userSearchResult: Match[];
  userSearchInput: string;
}
const Main = ({
  matches,
  currentGame,
  signedIn,
  sortBy,
  userSearchResult,
  userSearchInput,
}: Props) => {
  if (signedIn === true) {
    return (
      <main>
        <CardsGallery
          userSearchInput={userSearchInput}
          userSearchResult={userSearchResult}
          sortBy={sortBy}
          matches={matches}
          currentGame={currentGame}
        />
      </main>
    );
  } else {
    return (
      <main>
        <h1>You have to sign in before viewing your match history.</h1>
      </main>
    );
  }
};

export default Main;
