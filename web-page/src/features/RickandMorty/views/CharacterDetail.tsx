import {
  Box,
  Button,
  Card,
  DataList,
  Flex,
  Heading,
  Image,
  Link,
  Spinner,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import { useCharacterDetail } from "../hooks/useCharacterDetail";
import { getEpisodeCode } from "../utils/get-episode-code";

interface CharacterDetailProps {
  apiId: number;
  onBack: () => void;
}

function CharacterDetail({ apiId, onBack }: CharacterDetailProps) {
  const { character, isLoading, errorMessage } = useCharacterDetail(apiId);

  if (isLoading) {
    return (
      <Box py={{ base: "4", md: "6" }}>
        <Flex
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          direction={{ base: "column", md: "row" }}
          gap="3"
          mb="4"
        >
          <Heading size={{ base: "md", md: "lg" }}>Character details</Heading>
          <Button onClick={onBack} variant="outline" borderColor="#00b5cc" color="#00b5cc" size="sm" _hover={{ bg: "rgba(0, 181, 204, 0.12)" }}>
            {"<- Back to cards"}
          </Button>
        </Flex>
        <Flex align="center" gap="3">
          <Spinner size="sm" />
          <Text color="fg.muted">Loading character details...</Text>
        </Flex>
      </Box>
    );
  }

  if (!character) {
    return (
      <Box py={{ base: "4", md: "6" }}>
        <Flex justify="space-between" align="center" mb="4">
          <Heading size={{ base: "md", md: "lg" }}>Character details</Heading>
          <Button onClick={onBack} variant="outline" borderColor="#00b5cc" color="#00b5cc" size="sm" _hover={{ bg: "rgba(0, 181, 204, 0.12)" }}>
            {"<- Back to cards"}
          </Button>
        </Flex>
        <Text>{errorMessage ?? "Character not found."}</Text>
      </Box>
    );
  }

  const shouldConstrainEpisodesHeight = character.episode.length > 6;

  return (
    <Box py={{ base: "4", md: "6" }}>
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        gap="3"
        mb="6"
      >
        <Box>
          <Heading size={{ base: "lg", md: "xl" }}>{character.name}</Heading>
          <Text color="fg.muted">Character details</Text>
        </Box>
        <Button onClick={onBack} variant="outline" borderColor="#00b5cc" color="#00b5cc" size="sm" _hover={{ bg: "rgba(0, 181, 204, 0.12)" }}>
          {"<- Back to cards"}
        </Button>
      </Flex>

      <Stack direction={{ base: "column", lg: "row" }} gap={{ base: "4", md: "6" }} align="stretch">
        <Card.Root
          flex={{ base: "1", lg: "0 0 320px" }}
          maxW={{ base: "full", lg: "360px" }}
          alignSelf={{ base: "stretch", lg: "flex-start" }}
          overflow="hidden"
        >
          <Image
            src={character.image}
            alt={character.name}
            w="full"
            h={{ base: "260px", sm: "320px", md: "360px" }}
            objectFit="cover"
          />
          <Card.Body>
            <Heading size="md" mb="2">
              {character.name}
            </Heading>
            <Text color="fg.muted" mb="4">
              {character.species} - {character.status}
            </Text>
            <DataList.Root orientation="vertical">
              <DataList.Item>
                <DataList.ItemLabel>Name</DataList.ItemLabel>
                <DataList.ItemValue>{character.name}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Status</DataList.ItemLabel>
                <DataList.ItemValue>{character.status}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Species</DataList.ItemLabel>
                <DataList.ItemValue>{character.species}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Type</DataList.ItemLabel>
                <DataList.ItemValue>{character.type || "Not found"}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Gender</DataList.ItemLabel>
                <DataList.ItemValue>{character.gender}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Origin</DataList.ItemLabel>
                <DataList.ItemValue>{character.origin?.name || "Unknown"}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Location</DataList.ItemLabel>
                <DataList.ItemValue>{character.location?.name || "Unknown"}</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Creation date</DataList.ItemLabel>
                <DataList.ItemValue>{new Date(character.created).toLocaleString()}</DataList.ItemValue>
              </DataList.Item>
            </DataList.Root>
          </Card.Body>
        </Card.Root>

        <Stack flex="1" gap={{ base: "4", md: "6" }}>
          <Card.Root>
            <Card.Header pb="2">
              <Heading size="md">Episodes</Heading>
              <Text color="fg.muted">{character.episode.length} episodes found</Text>
            </Card.Header>
            <Card.Body pt="0">
              <Table.ScrollArea
                borderWidth="1px"
                rounded="md"
                width="full"
                maxW="full"
                maxH={shouldConstrainEpisodesHeight ? { base: "280px", md: "420px" } : undefined}
                overflowY={shouldConstrainEpisodesHeight ? "auto" : "visible"}
              >
                <Table.Root stickyHeader minWidth={{ base: "100%", md: "360px" }}>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeader whiteSpace="nowrap">Episode</Table.ColumnHeader>
                      <Table.ColumnHeader>Link</Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {character.episode.map((episode, episodeIndex) => (
                      <Table.Row key={`episode-row-${episodeIndex}-${getEpisodeCode(episode)}`}>
                        <Table.Cell fontWeight="medium">#{getEpisodeCode(episode)}</Table.Cell>
                        <Table.Cell>
                          <Link href={episode} target="_blank" rel="noopener noreferrer" fontWeight="medium">
                            Open episode
                          </Link>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Table.ScrollArea>
            </Card.Body>
          </Card.Root>
        </Stack>
      </Stack>
    </Box>
  );
}

export default CharacterDetail;
