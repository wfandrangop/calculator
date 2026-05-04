import { Box, Card, Grid, Text } from "@chakra-ui/react";
import type { NavigateToAppPage } from "@/shared/types/navigation";
import PageHeader from "@/shared/components/PageHeader";
import { useCompleteCalculator } from "../hooks/useCompleteCalculator";
import CalculatorButton from "./CalculatorButton";

interface CompleteCalculatorProps {
  onNavigate: NavigateToAppPage;
}

function CompleteCalculator({ onNavigate }: CompleteCalculatorProps) {
  const {
    currentValue,
    clearCurrentValue,
    deleteLastDigit,
    appendDigit,
    setOperator,
    calculateResult,
  } = useCompleteCalculator();

  return (
    <Box minH="100vh" bg="gray.900" px={{ base: "4", md: "6" }} py={{ base: "8", md: "12" }}>
      <Card.Root maxW="420px" mx="auto" bg="gray.800" borderColor="teal.700">
        <Card.Header pb="2">
          <PageHeader
            title="Complete Calculator"
            backLabel="<- Back"
            onBack={() => onNavigate("home")}
          />
        </Card.Header>

        <Card.Body gap="4">
          <Box bg="gray.950" borderWidth="1px" borderColor="gray.700" rounded="md" p="4" minH="72px">
            <Text
              textAlign="right"
              fontSize="2xl"
              fontWeight="semibold"
              color={currentValue === "Error" ? "red.300" : "white"}
            >
              {currentValue || "0"}
            </Text>
          </Box>

          <Grid templateColumns="repeat(4, minmax(0, 1fr))" gap="2">
            <CalculatorButton
              label="DEL"
              bg="red.500"
              color="white"
              _hover={{ bg: "red.400" }}
              onPress={deleteLastDigit}
            />
            <CalculatorButton
              label="/"
              bg="#00b5cc"
              color="gray.900"
              _hover={{ bg: "#009aae" }}
              onPress={() => setOperator("/")}
            />
            <CalculatorButton
              label="x"
              bg="#00b5cc"
              color="gray.900"
              _hover={{ bg: "#009aae" }}
              onPress={() => setOperator("x")}
            />
            <CalculatorButton
              label="CLEAR"
              bg="orange.400"
              color="gray.900"
              _hover={{ bg: "orange.300" }}
              onPress={clearCurrentValue}
            />

            <CalculatorButton label="7" bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onPress={() => appendDigit("7")} />
            <CalculatorButton label="8" bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onPress={() => appendDigit("8")} />
            <CalculatorButton label="9" bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onPress={() => appendDigit("9")} />
            <CalculatorButton
              label="-"
              bg="#00b5cc"
              color="gray.900"
              _hover={{ bg: "#009aae" }}
              onPress={() => setOperator("-")}
            />

            <CalculatorButton label="4" bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onPress={() => appendDigit("4")} />
            <CalculatorButton label="5" bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onPress={() => appendDigit("5")} />
            <CalculatorButton label="6" bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onPress={() => appendDigit("6")} />
            <CalculatorButton
              label="+"
              bg="#00b5cc"
              color="gray.900"
              _hover={{ bg: "#009aae" }}
              onPress={() => setOperator("+")}
            />

            <CalculatorButton label="1" bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onPress={() => appendDigit("1")} />
            <CalculatorButton label="2" bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onPress={() => appendDigit("2")} />
            <CalculatorButton label="3" bg="gray.700" color="white" _hover={{ bg: "gray.600" }} onPress={() => appendDigit("3")} />
            <CalculatorButton
              label="="
              bg="#97ce4c"
              color="gray.900"
              _hover={{ bg: "#86b946" }}
              onPress={calculateResult}
            />

            <CalculatorButton
              label="0"
              gridColumn="span 4"
              bg="gray.700"
              color="white"
              _hover={{ bg: "gray.600" }}
              onPress={() => appendDigit("0")}
            />
          </Grid>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}

export default CompleteCalculator;
