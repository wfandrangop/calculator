import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";
import type { NavigateToAppPage } from "@/shared/types/navigation";
import { useCharacterSearch } from "../hooks/useCharacterSearch";
import CharacterDetail from "./CharacterDetail";
import SearchBar from "./SearchBar";
import TableCards from "./TableCards";

interface RickAndMortyProps {
  onNavigate: NavigateToAppPage;
}

function RickAndMorty({ onNavigate }: RickAndMortyProps) {
  const [selectedCharacterApiId, setSelectedCharacterApiId] = useState<number | null>(null);
  const { characters, isLoading, errorMessage, searchCharacters } = useCharacterSearch();

  const handleShowCharacterDetail = (apiId: number) => {
    setSelectedCharacterApiId(apiId);
  };

  const handleBackToCharacterList = () => {
    setSelectedCharacterApiId(null);
  };

  return (
    <Box maxW="7xl" mx="auto" px={{ base: "2", md: "4" }} py={{ base: "4", md: "6" }}>
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        gap="3"
        mb="6"
      >
        <Heading size={{ base: "xl", md: "2xl" }} color="#97ce4c">
          Rick and Morty API
        </Heading>
        <Button
          onClick={() => onNavigate("home")}
          variant="outline"
          borderColor="#00b5cc"
          color="#00b5cc"
          size="sm"
          _hover={{ bg: "rgba(0, 181, 204, 0.12)" }}
        >
          {"<- Back"}
        </Button>
      </Flex>

      {selectedCharacterApiId ? (
        <CharacterDetail apiId={selectedCharacterApiId} onBack={handleBackToCharacterList} />
      ) : (
        <Stack gap="6">
          <SearchBar onSearch={searchCharacters} />
          <TableCards
            characters={characters}
            isLoading={isLoading}
            errorMessage={errorMessage}
            onShowDetails={handleShowCharacterDetail}
          />
        </Stack>
      )}
    </Box>
  );
}

export default RickAndMorty;
