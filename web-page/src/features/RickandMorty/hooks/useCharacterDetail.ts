import { useCallback, useEffect, useRef, useState } from "react";
import { getCharacterById } from "../services/rick-and-morty.service";
import type { Character } from "../types/rick-and-morty";

export function useCharacterDetail(id: number) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isMountedRef = useRef<boolean>(true);

  const handleSuccess = useCallback((data: Character) => {
    if (!isMountedRef.current) {
      return;
    }

    setCharacter(data);
  }, []);

  const handleError = useCallback((error: unknown) => {
    if (!isMountedRef.current) {
      return;
    }

    setCharacter(null);
    const message = error instanceof Error ? error.message : "Unexpected error while loading character details";
    setErrorMessage(message);
  }, []);

  const stopLoading = useCallback(() => {
    if (!isMountedRef.current) {
      return;
    }

    setIsLoading(false);
  }, []);

  const fetchCharacter = useCallback(async (characterId: number) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const data = await getCharacterById(characterId);
      handleSuccess(data);
    } catch (error: unknown) {
      handleError(error);
    } finally {
      stopLoading();
    }
  }, [handleError, handleSuccess, stopLoading]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchCharacter(id);
  }, [fetchCharacter, id]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return {
    character,
    isLoading,
    errorMessage,
  };
}
