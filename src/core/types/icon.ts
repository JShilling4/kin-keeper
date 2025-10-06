export const ICON_NAMES = {
  Home: "fas fa-home",
  Menu: "fas fa-bars",
  Budget: "fas fa-chart-pie",
  Close: "",
  Route: "",
  Settings: "",
} as const;
type IconNameKey = keyof typeof ICON_NAMES;
export type IconName = (typeof ICON_NAMES)[IconNameKey];
