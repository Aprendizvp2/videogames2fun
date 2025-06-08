import {
  FormControl,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";

interface CustomSelectProps {
  placeholder?: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { value: string; label: string }[];
  name: string;
  error?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
}

export default function Select({
  placeholder,
  value,
  onChange,
  options,
  name,
  error,
  disabled = false,
  fullWidth = true,
  backgroundColor,
  size = "medium",
  variant = "outlined",
  ...props
}: CustomSelectProps) {
  return (
    <FormControl
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      error={!!error}
      disabled={disabled}
      {...props}
    >
      <MuiSelect
        displayEmpty
        value={value}
        onChange={onChange}
        name={name}
        sx={{
          backgroundColor: backgroundColor,
          ".MuiSelect-select": {
            color: value ? "inherit" : "#757575", // Color gris para el placeholder
          },
        }}
        renderValue={(selected) => {
          if (!selected) {
            return <span style={{ color: "#757575" }}>{placeholder}</span>;
          }
          return options.find((opt) => opt.value === selected)?.label;
        }}
      >
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
