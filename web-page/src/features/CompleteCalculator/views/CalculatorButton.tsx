import { Button, type ButtonProps } from "@chakra-ui/react";

interface CalculatorButtonProps extends ButtonProps {
  label: string;
  onPress: () => void;
}

function CalculatorButton({ label, onPress, ...buttonProps }: CalculatorButtonProps) {
  return (
    <Button onClick={onPress} {...buttonProps}>
      {label}
    </Button>
  );
}

export default CalculatorButton;
