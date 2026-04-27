import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import TableCards from './TableCards';
import CardDetail from './CardDetail';
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";

const URL = "https://rickandmortyapi.com/api/character/?";

function RickandMorty({ goToThePage }) {

    const [character, setCharacter] = useState('Morty');
    const [result, setResult] = useState([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    async function fetchData(name) {
        let url_characteres = `${URL}name=${name}`;
        try {
            const response = await fetch(url_characteres);
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            const data = await response.json();
            setResult(data);
        } catch (error) {
            setResult([]);
            console.log("Error en la peticion ", error);
        }
    }

    useEffect(
        () => {
            fetchData(character)
        },
        [character]
    );

    const getData = (character) => {
        setCharacter(character);
    }

    const showCardDetail = (id) => {
        setSelectedCharacterId(id);
    }

    const backToCards = () => {
        setSelectedCharacterId(null);
    }

    return (
        <Box maxW="7xl" mx="auto" px={{ base: "2", md: "4" }} py={{ base: "4", md: "6" }}>
            <Flex
                justify="space-between"
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }}
                gap="3"
                mb="6"
            >
                <Heading size={{ base: "xl", md: "2xl" }}>Rick and Morty API</Heading>
                <Button onClick={() => goToThePage('home')} variant="outline" colorPalette="dark" size="sm">
                    {"<- Back"}
                </Button>
            </Flex>

            {selectedCharacterId ? (
                <CardDetail id={selectedCharacterId} back={backToCards} />
            ) : (
                <Stack gap="6">
                    <SearchBar getData={getData} />
                    <TableCards data={result} onShowDetails={showCardDetail} />
                </Stack>
            )}
        </Box>
    );
}
export default RickandMorty;
