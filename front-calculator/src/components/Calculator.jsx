import { useState } from "react";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@chakra-ui/react";

function CalculatorV2({ back }) {
    const [previous, setPrevious] = useState("");
    const [display, setDisplay] = useState("0");
    const [operator, setOperator] = useState("");

    const clearDisplay = () => {
        setDisplay("0");
    };

    const deleteDisplay = () => {
        if (!display || display === "0" || display === "Error") {
            return;
        }

        if (display.length === 1 || (display.charAt(0) === "-" && display.length === 2)) {
            setDisplay("0");
            return;
        }

        setDisplay(display.slice(0, -1));
    };

    const setNumber = (value) => {
        setDisplay((prev) => {
            if (prev === "0" || prev === "Error") {
                return value;
            }
            return prev + value;
        });
    };

    const handleOperator = (op) => {
        if (display === "" || display === "Error") return;
        setPrevious(display);
        setDisplay("0");
        setOperator(op);
    };

    const result = () => {
        if (!previous || !operator || display === "" || display === "Error") return;

        const prev = parseFloat(previous);
        const current = parseFloat(display);
        let calculateResult = 0;

        switch (operator) {
            case "+":
                calculateResult = prev + current;
                break;
            case "-":
                calculateResult = prev - current;
                break;
            case "x":
                calculateResult = prev * current;
                break;
            case "/":
                if (current === 0) {
                    setDisplay("Error");
                    setPrevious("");
                    setOperator("");
                    return;
                }
                calculateResult = prev / current;
                break;
            default:
                return;
        }

        setDisplay(calculateResult.toString());
        setPrevious("");
        setOperator("");
    };

    return (
        <Box minH="100vh" bg="gray.900" px={{ base: "4", md: "6" }} py={{ base: "8", md: "12" }}>
            <Card.Root maxW="420px" mx="auto" bg="gray.800" borderColor="teal.700">
                <Card.Header pb="2">
                    <Flex
                        justify="space-between"
                        align={{ base: "flex-start", sm: "center" }}
                        direction={{ base: "column", sm: "row" }}
                        gap="3"
                    >
                        <Heading size={{ base: "md", md: "lg" }} color="#97ce4c">
                            Complete Calculator
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

                <Card.Body gap="4">
                    <Box bg="gray.950" borderWidth="1px" borderColor="gray.700" rounded="md" p="4" minH="72px">
                        <Text textAlign="right" fontSize="2xl" fontWeight="semibold" color={display === "Error" ? "red.300" : "white"}>
                            {display || "0"}
                        </Text>
                    </Box>

                    <Grid templateColumns="repeat(4, minmax(0, 1fr))" gap="2">
                        <Button bg="red.500" color="white" _hover={{ bg: "red.400" }} onClick={deleteDisplay}>DEL</Button>
                        <Button bg="#00b5cc" color="gray.900" _hover={{ bg: "#009aae" }} onClick={() => handleOperator("/")}>/</Button>
                        <Button bg="#00b5cc" color="gray.900" _hover={{ bg: "#009aae" }} onClick={() => handleOperator("x")}>x</Button>
                        <Button bg="orange.400" color="gray.900" _hover={{ bg: "orange.300" }} onClick={clearDisplay}>RMV</Button>

                        <Button bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onClick={() => setNumber("7")}>7</Button>
                        <Button bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onClick={() => setNumber("8")}>8</Button>
                        <Button bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onClick={() => setNumber("9")}>9</Button>
                        <Button bg="#00b5cc" color="gray.900" _hover={{ bg: "#009aae" }} onClick={() => handleOperator("-")}>-</Button>

                        <Button bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onClick={() => setNumber("4")}>4</Button>
                        <Button bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onClick={() => setNumber("5")}>5</Button>
                        <Button bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onClick={() => setNumber("6")}>6</Button>
                        <Button bg="#00b5cc" color="gray.900" _hover={{ bg: "#009aae" }} onClick={() => handleOperator("+")}>+</Button>

                        <Button bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onClick={() => setNumber("1")}>1</Button>
                        <Button bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onClick={() => setNumber("2")}>2</Button>
                        <Button bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onClick={() => setNumber("3")}>3</Button>
                        <Button bg="#97ce4c" color="gray.900" _hover={{ bg: "#86b946" }} onClick={result}>=</Button>

                        <Button
                            gridColumn="span 4"
                            bg="gray.700"
                            color="white"
                            _hover={{ bg: "gray.600" }}
                            onClick={() => setNumber("0")}
                        >
                            0
                        </Button>
                    </Grid>
                </Card.Body>
            </Card.Root>
        </Box>
    );
}
export default CalculatorV2;
