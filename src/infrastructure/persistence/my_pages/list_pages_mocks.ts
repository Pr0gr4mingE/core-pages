import { PageConfig } from "@/shared/types/domain/page";

export const mockedPages: PageConfig[] = [
  {
    id: "1",
    slug: "minha-loja",
    title: "Minha Loja de Roupas",
    headerConfig: { setColor: true, colorKey: "color06", setLogo: true, setTitle: true, setNavMenu: true },
    sidebarConfig: { setColor: false, setLogo: true, setNavMenu: true },
    footerConfig: { setColor: true, colorKey: "color06", setText: true }
  },
  {
    id: "2",
    slug: "blog-pessoal",
    title: "Blog de Tecnologia",
    headerConfig: { setColor: true, colorKey: "color02", setTitle: true },
    sidebarConfig: { setColor: true, colorKey: "color02", setNavMenu: true, setText: true },
    footerConfig: { setColor: true, colorKey: "color02", setSubtitle: true }
  }
];