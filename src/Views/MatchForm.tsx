function MatchForm() {
  return (
    <main className="add-game-container">
      <section className="formSection">
        <form>
          <label htmlFor="choose-game">Choose Game:</label>
          <input list="choose-game" id="game" name="game"></input>

          <datalist id="choose-game">
            <option value="League of Legends">League of Legends</option>
            <option value="Multiversus">Multiversus</option>
            <option value="CS:GO">CS:GO</option>
            <option value="Scrabble">Scrabble</option>
            <option value="Mario Kart">Mario Kart</option>
          </datalist>
          <label htmlFor="game-result">Did you Win?</label>
          <input
            list="game-result-list"
            id="game-result"
            name="game-result"
          ></input>

          <datalist id="game-result-list">
            <option value="Yes"></option>
            <option value="No"></option>
          </datalist>

          <label htmlFor="teamSize">How long was the game?</label>
          <input className="halfWidth" type="text" name="teamSize" required />
          <label htmlFor="teamSize">How many players were in each team?</label>
          <input className="halfWidth" type="text" name="teamSize" required />
          <article>
            <button type="submit" className="buttonAdd">
              ADD NEW GAME
            </button>
          </article>
        </form>
      </section>
    </main>
  );
}

export default MatchForm;
