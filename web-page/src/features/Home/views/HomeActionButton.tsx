import { Button } from "@chakra-ui/react";
import type { HomeButtonVariant } from "../types/home-option";

interface HomeActionButtonProps {
  label: string;
  variant: HomeButtonVariant;
  onClick: () => void;
}

const buttonPaletteByVariant: Record<
  HomeButtonVariant,
  {
    bg?: string;
    color: string;
    borderColor?: string;
    hoverBackground: string;
    type: "solid" | "outline";
  }
> = {
  primary: {
    type: "solid",
    bg: "#97ce4c",
    color: "gray.900",
    hoverBackground: "#86b946",
  },
  secondary: {
    type: "solid",
    bg: "#00b5cc",
    color: "gray.900",
    hoverBackground: "#009aae",
  },
  "outline-primary": {
    type: "outline",
    color: "#97ce4c",
    borderColor: "#97ce4c",
    hoverBackground: "rgba(151, 206, 76, 0.12)",
  },
};

function HomeActionButton({ label, variant, onClick }: HomeActionButtonProps) {
  const palette = buttonPaletteByVariant[variant];

  return (
    <Button
      onClick={onClick}
      bg={palette.bg}
      color={palette.color}
      borderColor={palette.borderColor}
      variant={palette.type === "outline" ? "outline" : "solid"}
      _hover={{ bg: palette.hoverBackground }}
    >
      {label}
    </Button>
  );
}

export default HomeActionButton;
