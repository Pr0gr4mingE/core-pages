export const DEFAULT_COLOR = "bg-gray-100 text-gray-800";

export const CustomColors = {
  color01: "bg-red-500 text-white",
  color02: "bg-blue-500 text-white",
  color03: "bg-yellow-500 text-black",
  color04: "bg-purple-500 text-white",
  color05: "bg-amber-900 text-white",
  color06: "bg-black text-white",
};

export type CustomColorKey = keyof typeof CustomColors;

// Função pura que substitui o IF/ELSE do seu esquema para retornar a cor correta
export const resolveColor = (setColor?: boolean, colorKey?: CustomColorKey): string => {
  if (setColor && colorKey && CustomColors[colorKey]) {
    return CustomColors[colorKey];
  }
  return DEFAULT_COLOR;
};