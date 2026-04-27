import { Badge, Button, Card as CardStyle, HStack, Image } from "@chakra-ui/react"
function Card({ image, name, status, species, id, onShowDetails }) {

    return (
        <CardStyle.Root width="full" h="full" overflow="hidden">
            <Image src={image} alt={name} h="240px" w="full" objectFit="cover" />
            <CardStyle.Body gap="2" display="flex" flexDirection="column" flex="1">
                <CardStyle.Title mb="2">{name}</CardStyle.Title>
                <HStack mt="4" wrap="wrap">
                    <Badge>{status}</Badge>
                    <Badge>{species}</Badge>
                </HStack>
            </CardStyle.Body>
            <CardStyle.Footer justifyContent="flex-start" mt="auto" gap={2}>
                <Button onClick={() => onShowDetails(id)}> Details</Button>
            </CardStyle.Footer>
        </CardStyle.Root>
    )
}
export default Card;
