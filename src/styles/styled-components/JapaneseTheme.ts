export const japaneseTheme = {
  colors: {
    aka: {
      light: "#fecaca",
      main: "#B91C1C",
      dark: "#7F1D1D",
    },
    kuro: {
      light: "#3a3a38",
      main: "#1a1a18",
      dark: "#111111",
    },
    gold: {
      light: "#D4BC7B",
      main: "#C9A96E",
      dark: "#96733A",
    },
    washi: {
      light: "#FDFCFA",
      main: "#F5F0E8",
      dark: "#EDE5D5",
    },
    sumi: {
      light: "#6f6d67",
      main: "#4d4b47",
      dark: "#2d2c2a",
    },
  },
  fonts: {
    primary: '"Noto Sans JP", "Inter", system-ui, sans-serif',
  },
  spacing: {
    section: "6rem",
    sectionMobile: "3rem",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
  },
} as const;

export type JapaneseTheme = typeof japaneseTheme;
