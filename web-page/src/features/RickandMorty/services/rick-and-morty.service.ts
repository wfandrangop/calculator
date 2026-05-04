import { getJson } from "@/shared/api/http";
import type { Character, CharacterSearchResponse } from "../types/rick-and-morty";

const RICK_AND_MORTY_API_BASE_URL = "https://rickandmortyapi.com/api/character";

export async function getCharactersByName(name: string): Promise<Character[]> {
  const normalizedName = name.trim();
  const searchName = normalizedName.length > 0 ? normalizedName : "Morty";
  const url = `${RICK_AND_MORTY_API_BASE_URL}/?name=${encodeURIComponent(searchName)}`;

  const response = await getJson<CharacterSearchResponse>(url);
  return response.results ?? [];
}

export async function getCharacterById(id: number): Promise<Character> {
  return getJson<Character>(`${RICK_AND_MORTY_API_BASE_URL}/${id}`);
}
