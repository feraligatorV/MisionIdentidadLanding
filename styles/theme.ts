export const theme = {
  colors: {
    charcoal: {
      950: "#0a0b0c",
      900: "#0f1113",
      800: "#15181a",
      700: "#1b2023",
      600: "#23282c",
      500: "#2c3338",
    },
    neutral: {
      300: "#d8d6d1",
      400: "#bfbcb6",
      500: "#9e9a94",
      600: "#6f6b66",
      700: "#4f4b46",
    },
    brass: {
      300: "#d6c09a",
      400: "#c7ad7f",
      500: "#b8965a",
      600: "#9f7f49",
    },
    ivory: {
      50: "#f7f5f0",
      100: "#f1ede6",
    },
    wine: {
      600: "#5a2f2f",
    },
  },
  gradients: {
    hero: "bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950",
    accent: "bg-gradient-to-r from-amber-600 to-amber-500",
    subtle: "bg-gradient-to-br from-neutral-900 to-neutral-950",
  },
  surfaces: {
    card: "bg-neutral-900/85 backdrop-blur-md border border-neutral-800",
    panel: "bg-neutral-900/75 backdrop-blur-md border border-neutral-800",
    soft: "bg-neutral-900/60 backdrop-blur-md border border-neutral-800",
  },
  text: {
    primary: "text-white",
    secondary: "text-neutral-300",
    muted: "text-neutral-400",
    accent: "text-amber-400",
  },
  borders: {
    default: "border-neutral-800",
    accent: "border-amber-600/40",
  },
  rings: {
    accent: "ring-amber-600/40",
  },
}

export const brandHero = "bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"
export const brandPanel = "bg-neutral-900/80 backdrop-blur-md border border-neutral-800"
export const brandSoft = "bg-neutral-900/60 backdrop-blur-md border border-neutral-800"
export const brandAccentButton =
  "bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white"
export const brandOutlineButton =
  "bg-transparent border-2 border-white/25 text-white hover:bg-white hover:text-neutral-900"
export const brandDivider = "bg-gradient-to-r from-transparent via-white/20 to-transparent"
export const brandAccentText = "text-amber-400"
