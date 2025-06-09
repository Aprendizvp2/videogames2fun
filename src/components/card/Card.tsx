import React from "react";
import {
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  styled,
  useTheme,
  Chip,
  Box,
} from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import appColors from "../../types/appColors";

// Colores de consolas
const PLATFORM_COLORS = {
  playstation: appColors.PLAYSTATION_COLOR,
  xbox: appColors.XBOX_COLOR,
  nintendo: appColors.NINTENDO_COLOR,
  default: appColors.WHITE,
};

interface ReusableCardProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string | React.ReactNode;
  platform?: "playstation" | "xbox" | "nintendo" | "default";
  price?: string;
  actions?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  imageHeight?: string | number;
  hoverEffect?: boolean;
  actionsAlign?: "left" | "center" | "right";
  sx?: SxProps<Theme>;
  buttonVariant?: "text" | "outlined" | "contained";
  buttonColor?:
    | string
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}

interface StyledCardMediaProps {
  component?: React.ElementType;
  image?: string;
  alt?: string;
  imageheight?: string | number;
}

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => !["hoverEffect"].includes(prop as string),
})<{ hoverEffect?: boolean }>(({ theme, hoverEffect }) => ({
  transition: hoverEffect
    ? theme.transitions.create(["transform", "box-shadow"], {
        duration: theme.transitions.duration.standard,
      })
    : "none",
  position: "relative",
  overflow: "visible",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  "&:hover": {
    transform: hoverEffect ? "translateY(-5px)" : "none",
    boxShadow: hoverEffect ? theme.shadows[6] : "none",
  },
}));

const StyledCardMedia = styled(MuiCardMedia)<StyledCardMediaProps>(
  ({ theme, imageheight }) => ({
    height: imageheight,
    position: "relative",
    "&:after": {
      content: "attr(alt)",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(0, 0, 0, 0.7)",
      color: theme.palette.common.white,
      padding: theme.spacing(0.5, 1),
      fontSize: "0.8rem",
    },
  })
);

const PlatformIndicator = styled(Box)<{
  platform?: keyof typeof PLATFORM_COLORS;
}>(({ theme, platform = "default" }) => ({
  position: "absolute",
  top: theme.spacing(-1),
  height: "4px",
  width: "100%",
  backgroundColor: PLATFORM_COLORS[platform],
  borderRadius: "2px 2px 0 0",
}));

const PriceTag = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: appColors.MONEY_TEXT_COLOR,
  borderRadius: "4px",
  display: "inline-block",
  marginTop: theme.spacing(1),
}));

export default function Card({
  imageUrl,
  altText,
  title,
  description,
  platform,
  price,
  actions,
  buttonText,
  onButtonClick,
  imageHeight = 240,
  hoverEffect = true,
  actionsAlign = "left",
  sx,
  buttonVariant = "contained",
  buttonColor = "primary",
}: ReusableCardProps) {
  const theme = useTheme();

  return (
    <StyledCard hoverEffect={hoverEffect} sx={{ ...sx }}>
      <PlatformIndicator platform={platform} />

      <StyledCardMedia
        component="img"
        image={imageUrl}
        alt={altText}
        imageheight={imageHeight}
      />

      <CardContent
        sx={{
          padding: theme.spacing(2, 2, 0),
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(1),
        }}
      >
        <div>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          {platform && platform !== "default" && (
            <Chip
              label={platform.charAt(0).toUpperCase() + platform.slice(1)}
              size="small"
              sx={{
                backgroundColor: PLATFORM_COLORS[platform],
                color: "white",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            />
          )}
        </div>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            flexGrow: 1,
            marginBottom: theme.spacing(1),
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>

        {price && <PriceTag variant="body1">{price}</PriceTag>}
      </CardContent>

      <CardActions
        sx={{
          justifyContent:
            actionsAlign === "center"
              ? "center"
              : actionsAlign === "right"
              ? "flex-end"
              : "flex-start",
          padding: theme.spacing(1, 2, 2),
          marginTop: "auto",
        }}
      >
        {actions}
        {buttonText && (
          <Button
            variant={buttonVariant}
            color={
              buttonColor === "primary" || buttonColor === "secondary"
                ? buttonColor
                : undefined
            }
            size="large"
            onClick={onButtonClick}
            sx={{
              textTransform: "none",
              ...(buttonColor && !["primary", "secondary"].includes(buttonColor)
                ? { backgroundColor: buttonColor, color: "white" }
                : {}),
              "&:hover": {
                boxShadow: 3,
                ...(buttonColor &&
                !["primary", "secondary"].includes(buttonColor)
                  ? { backgroundColor: buttonColor }
                  : {}),
              },
            }}
            fullWidth
          >
            {buttonText}
          </Button>
        )}
      </CardActions>
    </StyledCard>
  );
}
