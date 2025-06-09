import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

interface CountdownTimerProps {
  initialTime: string;
  onCountdownEnd?: () => void;
  showIcon?: boolean;
  variant?: "caption" | "body1" | "body2" | "subtitle1";
  sx?: object;
}

export default function CountdownTimer({
  initialTime,
  onCountdownEnd,
  showIcon = true,
  variant = "caption",
  sx = {},
}: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<string>(initialTime);

  useEffect(() => {
    if (initialTime.includes(":")) {
      const [hours, minutes, seconds] = initialTime.split(":").map(Number);
      let totalSeconds = hours * 3600 + minutes * 60 + seconds;

      const timer = setInterval(() => {
        if (totalSeconds <= 0) {
          clearInterval(timer);
          onCountdownEnd?.();
          return;
        }

        totalSeconds--;

        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        setTimeRemaining(
          `${hrs.toString().padStart(2, "0")}:${mins
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
        );
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [initialTime, onCountdownEnd]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", ...sx }}>
      {showIcon && <AccessTime fontSize="small" sx={{ mr: 0.5 }} />}
      <Typography variant={variant} typography="body2">{timeRemaining}</Typography>
    </Box>
  );
}
