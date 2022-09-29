export interface Match {
  game: string;
  datePlayed: string;
  matchLength: string;
  teamSize: number;
  teamAmount: number;
  win: boolean;
  teamOne: {
    players: Array<string>;
    teamName?: string;
  };
  teamTwo: {
    enemyPlayers: Array<string>;
    teamName?: string;
  };
  matchKey: number;
  finalResult?: string;
}
[];

export default Match;
