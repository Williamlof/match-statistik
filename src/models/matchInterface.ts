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
    characterName?: string;
  };
  teamTwo: {
    enemyPlayers: Array<string>;
    teamName?: string;
    characterName?: string;
  };
  teamThree?: { enemyPlayers?: Array<string>; characterName?: string };
  teamFour?: { enemyPlayers?: Array<string>; characterName?: string };
  teamFive?: { enemyPlayers?: Array<string>; characterName?: string };
  teamSix?: { enemyPlayers?: Array<string>; characterName?: string };
  teamSeven?: { enemyPlayers?: Array<string>; characterName?: string };
  teamEight?: { enemyPlayers?: Array<string>; characterName?: string };
  matchKey: number;
  finalResult?: string;
}
[];

export default Match;
