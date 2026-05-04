import { Box, Grid, Spinner, Text } from "@chakra-ui/react";
import type { CharacterListItem } from "../types/rick-and-morty";
import CharacterCard from "./CharacterCard";

interface TableCardsProps {
  characters: CharacterListItem[];
  isLoading: boolean;
  errorMessage: string | null;
  onShowDetails: (apiId: number) => void;
}

function TableCards({ characters, isLoading, errorMessage, onShowDetails }: TableCardsProps) {
  if (isLoading) {
    return (
      <Box py="10" textAlign="center">
        <Spinner />
      </Box>
    );
  }

  if (errorMessage) {
    return (
      <Box py="10" textAlign="center">
        <Text fontSize="lg">{errorMessage}</Text>
      </Box>
    );
  }

  if (!characters.length) {
    return (
      <Box py="10" textAlign="center">
        <Text fontSize="lg">No data found</Text>
      </Box>
    );
  }

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, minmax(0, 1fr))",
        lg: "repeat(3, minmax(0, 1fr))",
        xl: "repeat(4, minmax(0, 1fr))",
      }}
      gap={{ base: "4", md: "6" }}
      alignItems="stretch"
    >
      {characters.map((character) => (
        <Box key={`character-card-${character.id}`} display="flex">
          <CharacterCard
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            id={character.id}
            apiId={character.apiId}
            onShowDetails={onShowDetails}
          />
        </Box>
      ))}
    </Grid>
  );
}

export default TableCards;
