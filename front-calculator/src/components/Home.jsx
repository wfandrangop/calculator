import { Box, Button, Card, Heading, Stack, Text } from "@chakra-ui/react";

function Home({ goToThePage }) {
    return (
        <Box minH="100vh" bg="gray.900" px={{ base: "4", md: "6" }} py={{ base: "8", md: "12" }}>
            <Card.Root maxW="md" mx="auto" bg="gray.800" borderColor="teal.700">
                <Card.Body gap="6">
                    <Stack gap="2" textAlign="center">
                        <Heading size={{ base: "lg", md: "xl" }} color="#97ce4c">
                            Calculator Apps
                        </Heading>
                        <Text color="gray.300">
                            Select one app to continue
                        </Text>
                    </Stack>

                    <Stack gap="3">
                        <Button
                            onClick={() => goToThePage("basicCalculator")}
                            bg="#97ce4c"
                            color="gray.900"
                            _hover={{ bg: "#86b946" }}
                        >
                            Basic Calculator
                        </Button>
                        <Button
                            onClick={() => goToThePage("calculator")}
                            bg="#00b5cc"
                            color="gray.900"
                            _hover={{ bg: "#009aae" }}
                        >
                            Complete Calculator
                        </Button>
                        <Button
                            onClick={() => goToThePage("api")}
                            variant="outline"
                            borderColor="#97ce4c"
                            color="#97ce4c"
                            _hover={{ bg: "rgba(151, 206, 76, 0.12)" }}
                        >
                            Rick and Morty API
                        </Button>
                    </Stack>
                </Card.Body>
            </Card.Root>
        </Box>
    );
}
export default Home;
