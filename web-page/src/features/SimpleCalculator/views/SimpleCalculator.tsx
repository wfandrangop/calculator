import { Box, Button, Card, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import type { FormEvent } from "react";
import type { NavigateToAppPage } from "@/shared/types/navigation";
import PageHeader from "@/shared/components/PageHeader";
import { useSimpleCalculator } from "../hooks/useSimpleCalculator";
import { parseNumberInput } from "../utils/parse-number";

interface SimpleCalculatorProps {
  onNavigate: NavigateToAppPage;
}

function SimpleCalculator({ onNavigate }: SimpleCalculatorProps) {
  const {
    firstInputValue,
    secondInputValue,
    sumResult,
    setFirstInputValue,
    setSecondInputValue,
    calculateSum,
    resetCalculator,
  } = useSimpleCalculator();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculateSum();
  };

  return (
    <Box minH="100vh" bg="gray.900" px={{ base: "4", md: "6" }} py={{ base: "8", md: "12" }}>
      <Card.Root maxW="xl" mx="auto" bg="gray.800" borderColor="teal.700">
        <Card.Header pb="2">
          <PageHeader
            title="Basic Calculator"
            backLabel="<- Back"
            onBack={() => onNavigate("home")}
          />
        </Card.Header>

        <Card.Body>
          <form onSubmit={handleSubmit}>
            <Stack gap="4">
              <Box>
                <Text mb="2" color="gray.300">
                  Number 1
                </Text>
                <Input
                  type="number"
                  placeholder="0"
                  value={firstInputValue}
                  onChange={(event) =>
                    setFirstInputValue(parseNumberInput(event.target.value))
                  }
                  bg="gray.950"
                  borderColor="gray.700"
                  color="white"
                />
              </Box>

              <Box>
                <Text mb="2" color="gray.300">
                  Number 2
                </Text>
                <Input
                  type="number"
                  placeholder="0"
                  value={secondInputValue}
                  onChange={(event) =>
                    setSecondInputValue(parseNumberInput(event.target.value))
                  }
                  bg="gray.950"
                  borderColor="gray.700"
                  color="white"
                />
              </Box>

              <Flex gap="3" direction={{ base: "column", sm: "row" }}>
                <Button type="submit" flex="1" bg="#97ce4c" color="gray.900" _hover={{ bg: "#86b946" }}>
                  Sum
                </Button>
                <Button
                  type="button"
                  flex="1"
                  variant="outline"
                  borderColor="#00b5cc"
                  color="#00b5cc"
                  _hover={{ bg: "rgba(0, 181, 204, 0.12)" }}
                  onClick={resetCalculator}
                >
                  Reset
                </Button>
              </Flex>

              <Box bg="gray.950" borderWidth="1px" borderColor="gray.700" rounded="md" p="4">
                <Text fontSize="sm" color="gray.400">
                  Result
                </Text>
                <Heading size="md" color="white">
                  {sumResult}
                </Heading>
              </Box>
            </Stack>
          </form>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}

export default SimpleCalculator;
