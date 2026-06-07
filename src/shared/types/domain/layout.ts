import { CustomColorKey } from "./ui_component_colors";

export interface HeaderProps {
  setColor?: boolean;
  colorKey?: CustomColorKey;
  setLogo?: boolean;
  setTitle?: boolean;
  setNavMenu?: boolean;
}

export interface SidebarProps {
  setColor?: boolean;
  colorKey?: CustomColorKey;
  setLogo?: boolean;
  setSubtitle?: boolean;
  setNavMenu?: boolean;
  setText?: boolean;
}

export interface FooterProps {
  setColor?: boolean;
  colorKey?: CustomColorKey;
  setSubtitle?: boolean;
  setText?: boolean;
}