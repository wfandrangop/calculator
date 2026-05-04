import { Card, Heading, Stack, Text } from "@chakra-ui/react";
import type { NavigateToAppPage } from "@/shared/types/navigation";
import { HOME_OPTIONS } from "../utils/home-options";
import HomeActionButton from "./HomeActionButton";

interface HomeNavigationCardProps {
  onNavigate: NavigateToAppPage;
}

function HomeNavigationCard({ onNavigate }: HomeNavigationCardProps) {
  return (
    <Card.Root maxW="md" mx="auto" bg="gray.800" borderColor="teal.700">
      <Card.Body gap="6">
        <Stack gap="2" textAlign="center">
          <Heading size={{ base: "lg", md: "xl" }} color="#97ce4c">
            Calculator Apps
          </Heading>
          <Text color="gray.300">Select one app to continue</Text>
        </Stack>

        <Stack gap="3">
          {HOME_OPTIONS.map((option) => (
            <HomeActionButton
              key={option.page}
              label={option.label}
              variant={option.variant}
              onClick={() => onNavigate(option.page)}
            />
          ))}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}

export default HomeNavigationCard;
