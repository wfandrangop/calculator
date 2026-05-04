import { useCallback, useEffect, useState } from "react";
import { getCharactersByName } from "../services/rick-and-morty.service";
import type { CharacterListItem } from "../types/rick-and-morty";

const DEFAULT_CHARACTER_NAME = "Morty";

export function useCharacterSearch() {
  const [characters, setCharacters] = useState<CharacterListItem[]>([]);
  const [characterName, setCharacterName] = useState<string>(DEFAULT_CHARACTER_NAME);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchCharacters = useCallback(async (name: string) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const data = await getCharactersByName(name);
      const mappedCharacters = data.map((character, index) => ({
        ...character,
        id: index + 1,
        apiId: character.id,
      }));
      setCharacters(mappedCharacters);
    } catch (error: unknown) {
      setCharacters([]);
      const message = error instanceof Error ? error.message : "Unexpected error while loading characters";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchCharacters(characterName);
  }, [characterName, fetchCharacters]);

  const searchCharacters = (name: string) => {
    const normalizedName = name.trim();
    setCharacterName(normalizedName.length > 0 ? normalizedName : DEFAULT_CHARACTER_NAME);
  };

  return {
    characters,
    isLoading,
    errorMessage,
    searchCharacters,
  };
}
