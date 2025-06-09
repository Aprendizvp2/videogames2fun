import { useState, ReactNode } from "react";
import { Tabs as MuiTabs, Tab, Box } from "@mui/material";

interface TabsProps<T> {
  tabs: {
    label: string;
    icon?: string | React.ReactElement;
    filterFn: (item: T) => boolean;
  }[];
  items: T[];
  children: (filteredItems: T[]) => ReactNode;
  initialTab?: number;
  sx?: object;
}

export default function Tabs<T>({
  tabs,
  items,
  children,
  initialTab = 0,
  sx = {},
}: TabsProps<T>) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const filteredItems = items.filter(tabs[activeTab].filterFn);

  return (
    <Box sx={sx}>
      <MuiTabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{ mb: 3 }}
        aria-label="Filtro de pestañas"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
          />
        ))}
      </MuiTabs>

      {children(filteredItems)}
    </Box>
  );
}