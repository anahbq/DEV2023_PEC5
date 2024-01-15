export interface ListCharacters {
  data: character[];
}

export interface character {
  _id: number;
  films: string[];
  allies: string[];
  enemies: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

export interface charDisney {
  data: character;
}
