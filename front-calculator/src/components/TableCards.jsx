import Card from "./Card";
import { Grid, Box, Text } from "@chakra-ui/react"

function TableCard({ data, onShowDetails }) {
    const characters = data?.results ?? [];

    if (!characters.length) {
        return (
            <Box py="10" textAlign="center">
                <Text fontSize="lg">No data found</Text>
            </Box>
        );
    }

    return (
        <>
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
                {
                    characters.map(
                        (character) =>
                            <Box key={character.id} display="flex">
                                <Card
                                    image={character.image}
                                    name={character.name}
                                    status={character.status}
                                    species={character.species}
                                    id={character.id}
                                    onShowDetails={onShowDetails} />
                            </Box>
                    )
                }
            </Grid>
        </>
    )
}
export default TableCard;
