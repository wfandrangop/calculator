import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backLabel?: string;
  onBack?: () => void;
}

function PageHeader({ title, subtitle, backLabel, onBack }: PageHeaderProps) {
  return (
    <Flex
      justify="space-between"
      align={{ base: "flex-start", sm: "center" }}
      direction={{ base: "column", sm: "row" }}
      gap="3"
    >
      <Box>
        <Heading size={{ base: "md", md: "lg" }} color="#97ce4c">
          {title}
        </Heading>
        {subtitle && <Text color="gray.300">{subtitle}</Text>}
      </Box>

      {onBack && backLabel && (
        <Button
          onClick={onBack}
          variant="outline"
          borderColor="#00b5cc"
          color="#00b5cc"
          size="sm"
          _hover={{ bg: "rgba(0, 181, 204, 0.12)" }}
        >
          {backLabel}
        </Button>
      )}
    </Flex>
  );
}

export default PageHeader;
