import { Box } from "@chakra-ui/react";
import type { NavigateToAppPage } from "@/shared/types/navigation";
import HomeNavigationCard from "./HomeNavigationCard";

interface HomeProps {
  onNavigate: NavigateToAppPage;
}

function Home({ onNavigate }: HomeProps) {
  return (
    <Box minH="100vh" bg="gray.900" px={{ base: "4", md: "6" }} py={{ base: "8", md: "12" }}>
      <HomeNavigationCard onNavigate={onNavigate} />
    </Box>
  );
}

export default Home;
