import { Button as MuiButton, styled } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

interface CustomButtonProps {
  bgColor?: string;
  hoverBgColor?: string;
  width?: string;
}

type ButtonProps = CustomButtonProps &
  MuiButtonProps & {
    size?: "small" | "medium" | "large";
  };

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    !["bgColor", "hoverBgColor"].includes(prop as string),
})<ButtonProps>(({ theme, bgColor, hoverBgColor, width, size = "medium" }) => ({
  backgroundColor: bgColor || theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: width || "auto",
  padding:
    size === "small"
      ? "8px 12px"
      : size === "large"
      ? "14px 24px"
      : "10px 16px",
  fontSize:
    size === "small"
      ? "0.8125rem"
      : size === "large"
      ? "1.0625rem"
      : "0.9375rem",
  textTransform: "none",
  transition: theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.short,
  }),
  "&:hover": {
    backgroundColor: hoverBgColor || bgColor || theme.palette.primary.dark,
    transform: "translateY(-1px)",
    "@media (hover: hover)": {
      "&:disabled": {
        transform: "none",
      },
    },
  },
  "&:disabled": {
    opacity: 0.6,
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
  },
}));

export default function Button({
  bgColor,
  hoverBgColor,
  width,
  size = "medium",
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      width={width}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
