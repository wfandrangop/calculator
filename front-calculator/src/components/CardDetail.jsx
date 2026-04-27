import { useEffect, useState } from "react";
import { Box, Button, Card, DataList, Flex, Heading, Image, Link, Spinner, Stack, Table, Text } from "@chakra-ui/react";

const URL = "https://rickandmortyapi.com/api/character/";

function CardDetail({ id, back }) {
    const [result, setResult] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const url_character = `${URL}${id}`;
            try {
                const response = await fetch(url_character);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}`);
                }
                const data = await response.json();
                setResult(data);
            } catch (error) {
                setResult(null);
                console.log(id);
                console.log("Error en la peticion ", error);
            }
        }

        fetchData();
    }, [id]);

    const getEpisodeCode = (episodeUrl) => {
        const segments = episodeUrl.split("/");
        return segments[segments.length - 1];
    };

    if (!result) {
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
                    <Button onClick={back} variant="outline" colorPalette="teal" size="sm">
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
                    <Heading size={{ base: "lg", md: "xl" }}>{result.name}</Heading>
                    <Text color="fg.muted">Character details</Text>
                </Box>
                <Button onClick={back} variant="outline" colorPalette="teal" size="sm">
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
                        src={result.image}
                        alt={result.name}
                        w="full"
                        h={{ base: "260px", sm: "320px", md: "360px" }}
                        objectFit="cover"
                    />
                    <Card.Body>
                        <Heading size="md" mb="2">{result.name}</Heading>
                        <Text color="fg.muted" mb="4">{result.species} - {result.status}</Text>
                        <DataList.Root orientation="vertical">
                            <DataList.Item>
                                <DataList.ItemLabel>Name</DataList.ItemLabel>
                                <DataList.ItemValue>{result.name}</DataList.ItemValue>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.ItemLabel>Status</DataList.ItemLabel>
                                <DataList.ItemValue>{result.status}</DataList.ItemValue>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.ItemLabel>Species</DataList.ItemLabel>
                                <DataList.ItemValue>{result.species}</DataList.ItemValue>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.ItemLabel>Type</DataList.ItemLabel>
                                <DataList.ItemValue>{result.type || "Not found"}</DataList.ItemValue>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.ItemLabel>Gender</DataList.ItemLabel>
                                <DataList.ItemValue>{result.gender}</DataList.ItemValue>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.ItemLabel>Origin</DataList.ItemLabel>
                                <DataList.ItemValue>{result.origin?.name || "Unknown"}</DataList.ItemValue>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.ItemLabel>Location</DataList.ItemLabel>
                                <DataList.ItemValue>{result.location?.name || "Unknown"}</DataList.ItemValue>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.ItemLabel>Creation date</DataList.ItemLabel>
                                <DataList.ItemValue>{new Date(result.created).toLocaleString()}</DataList.ItemValue>
                            </DataList.Item>
                        </DataList.Root>
                    </Card.Body>
                </Card.Root>

                <Stack flex="1" gap={{ base: "4", md: "6" }}>
                    <Card.Root>
                        <Card.Header pb="2">
                            <Heading size="md">Episodes</Heading>
                            <Text color="fg.muted">{result.episode?.length ?? 0} episodes found</Text>
                        </Card.Header>
                        <Card.Body pt="0">
                            <Table.ScrollArea
                                borderWidth="1px"
                                rounded="md"
                                width="full"
                                maxW="full"
                                height={{ base: "280px", md: "420px" }}
                            >
                                <Table.Root stickyHeader minWidth="360px">
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.ColumnHeader whiteSpace="nowrap">Episode</Table.ColumnHeader>
                                            <Table.ColumnHeader>Link</Table.ColumnHeader>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {result.episode?.map((episode) => (
                                            <Table.Row key={episode}>
                                                <Table.Cell fontWeight="medium">#{getEpisodeCode(episode)}</Table.Cell>
                                                <Table.Cell>
                                                    <Link
                                                        href={episode}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        fontWeight="medium"
                                                    >
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
export default CardDetail;
