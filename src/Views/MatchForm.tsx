import "./MatchForm.scss";
import { Match } from "../models/matchInterface";

interface Props {
  matches: Match;
}
function MatchForm({ matches }: Props) {
  return (
    <main className="addCardContainer">
      <section className="formSection">
        <form>
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input type="text" name="cardNumber" value="" required />

          <label htmlFor="cardName">CARDHOLDER NAME</label>
          <input type="text" name="cardName" required value="" />
          <section className="inputContainer">
            <article>
              <label htmlFor="CCV">CCV</label>
              <input
                className="halfWidth"
                type="text"
                name="CCV"
                value=""
                required
              />
            </article>
            <article>
              <label htmlFor="validThru">VALID THRU</label>
              <input
                className="halfWidth"
                type="text"
                name="validThru"
                value=""
                required
              />
            </article>
          </section>
          <article>
            <label htmlFor="cardVendor">Choose your Vendor</label>
            <select
              name="cardVendor"
              className="dropDown"
              value=""
              defaultValue={"DEFAULT"}
              required
            >
              <option disabled value="DEFAULT">
                SELECT AN OPTION
              </option>
              <option value="BITCOIN INC">BITCOIN INC</option>
              <option value="NINJA BANK">NINJA BANK</option>
              <option value="BLOCK CHAIN INC">BLOCK CHAIN INC</option>
              <option value="EVIL CORP">EVIL CORP</option>
            </select>
            <button type="submit" className="buttonAdd">
              ADD NEW CARD
            </button>
          </article>
        </form>
      </section>
    </main>
  );
}

export default MatchForm;
