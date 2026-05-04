export interface CharacterLocation {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  created: string;
}

export interface CharacterListItem extends Omit<Character, "id"> {
  id: number;
  apiId: number;
}

export interface CharacterSearchResponse {
  results: Character[];
}
