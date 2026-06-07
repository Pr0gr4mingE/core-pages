import { HeaderProps, SidebarProps, FooterProps } from "./layout";

export interface PageConfig {
  id: string;
  slug: string;
  title: string;
  headerConfig: HeaderProps;
  sidebarConfig: SidebarProps;
  footerConfig: FooterProps;
}