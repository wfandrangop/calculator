import { useState } from "react";
import { Box, Button, Card, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";

function BasicCalculator({ back }) {
    const [firstnumber, setFirstnumber] = useState(0);
    const [secondnumber, setSecondnumber] = useState(0);
    const [result, setResult] = useState(0);

    function sum(e) {
        e.preventDefault();
        const sum = firstnumber + secondnumber;
        setResult(sum);
    }

    function reset() {
        setResult(0);
        setFirstnumber(0);
        setSecondnumber(0);
    }

    return (
        <Box minH="100vh" bg="gray.900" px={{ base: "4", md: "6" }} py={{ base: "8", md: "12" }}>
            <Card.Root maxW="xl" mx="auto" bg="gray.800" borderColor="teal.700">
                <Card.Header pb="2">
                    <Flex
                        justify="space-between"
                        align={{ base: "flex-start", sm: "center" }}
                        direction={{ base: "column", sm: "row" }}
                        gap="3"
                    >
                        <Heading size={{ base: "md", md: "lg" }} color="#97ce4c">
                            Basic Calculator
                        </Heading>
                        <Button
                            onClick={() => back("home")}
                            variant="outline"
                            borderColor="#00b5cc"
                            color="#00b5cc"
                            size="sm"
                            _hover={{ bg: "rgba(0, 181, 204, 0.12)" }}
                        >
                            {"<- Back"}
                        </Button>
                    </Flex>
                </Card.Header>

                <Card.Body>
                    <form onSubmit={sum}>
                        <Stack gap="4">
                            <Box>
                                <Text mb="2" color="gray.300">Number 1</Text>
                                <Input
                                    type="number"
                                    placeholder="0"
                                    value={firstnumber}
                                    onChange={(e) => setFirstnumber(Number(e.target.value))}
                                    bg="gray.950"
                                    borderColor="gray.700"
                                    color="white"
                                />
                            </Box>

                            <Box>
                                <Text mb="2" color="gray.300">Number 2</Text>
                                <Input
                                    type="number"
                                    placeholder="0"
                                    value={secondnumber}
                                    onChange={(e) => setSecondnumber(Number(e.target.value))}
                                    bg="gray.950"
                                    borderColor="gray.700"
                                    color="white"
                                />
                            </Box>

                            <Flex gap="3" direction={{ base: "column", sm: "row" }}>
                                <Button
                                    type="submit"
                                    flex="1"
                                    bg="#97ce4c"
                                    color="gray.900"
                                    _hover={{ bg: "#86b946" }}
                                >
                                    Sum
                                </Button>
                                <Button
                                    type="button"
                                    flex="1"
                                    variant="outline"
                                    borderColor="#00b5cc"
                                    color="#00b5cc"
                                    _hover={{ bg: "rgba(0, 181, 204, 0.12)" }}
                                    onClick={reset}
                                >
                                    Reset
                                </Button>
                            </Flex>

                            <Box bg="gray.950" borderWidth="1px" borderColor="gray.700" rounded="md" p="4">
                                <Text fontSize="sm" color="gray.400">Result</Text>
                                <Heading size="md" color="white">{result}</Heading>
                            </Box>
                        </Stack>
                    </form>
                </Card.Body>
            </Card.Root>
        </Box>
    );
}
export default BasicCalculator;
