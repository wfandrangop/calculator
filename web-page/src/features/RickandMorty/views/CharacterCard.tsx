import { Badge, Button, Card as ChakraCard, HStack, Image } from "@chakra-ui/react";

interface CharacterCardProps {
  image: string;
  name: string;
  status: string;
  species: string;
  id: number;
  apiId: number;
  onShowDetails: (apiId: number) => void;
}

function CharacterCard({
  image,
  name,
  status,
  species,
  id,
  apiId,
  onShowDetails,
}: CharacterCardProps) {
  return (
    <ChakraCard.Root width="full" h="full" overflow="hidden">
      <Image src={image} alt={name} h="240px" w="full" objectFit="cover" />
      <ChakraCard.Body gap="2" display="flex" flexDirection="column" flex="1">
        <ChakraCard.Title mb="2">{name}</ChakraCard.Title>
        <HStack mt="4" wrap="wrap">
          <Badge>{status}</Badge>
          <Badge>{species}</Badge>
        </HStack>
      </ChakraCard.Body>
      <ChakraCard.Footer justifyContent="flex-start" mt="auto" gap={2}>
        <Button data-card-id={id} onClick={() => onShowDetails(apiId)}>
          Details
        </Button>
      </ChakraCard.Footer>
    </ChakraCard.Root>
  );
}

export default CharacterCard;
