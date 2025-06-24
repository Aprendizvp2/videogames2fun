import styled from "styled-components";
import appColors from "../../types/appColors";
interface ButtonProps {
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  bgColor?: string; // Cambiado de backgroundColor a bgColor
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${({ bgColor, variant }) =>
    variant === "contained"
      ? bgColor || appColors.PRIMARY_COLOR
      : "transparent"};
  color: ${({ variant }) =>
    variant === "contained" ? "white" : appColors.PRIMARY_COLOR};
  border: ${({ variant }) =>
    variant === "outlined" ? `1px solid ${appColors.PRIMARY_COLOR}` : "none"};
  border-radius: 4px;
  padding: ${({ size }) =>
    size === "small"
      ? "8px 12px"
      : size === "large"
      ? "14px 24px"
      : "10px 16px"};
  font-size: ${({ size }) =>
    size === "small"
      ? "0.8125rem"
      : size === "large"
      ? "1.0625rem"
      : "0.9375rem"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ variant }) =>
      variant === "contained"
        ? "#0056b3" // Color de hover hardcodeado
        : "#0667cf"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button = ({
  disabled = false,
  variant = "contained",
  size = "medium",
  bgColor,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      size={size}
      bgColor={bgColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
