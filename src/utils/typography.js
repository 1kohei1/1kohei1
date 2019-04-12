import Typography from "typography"
import OceanBeach from "typography-theme-ocean-beach"

OceanBeach.overrideThemeStyles = () => {
  return {
    "twitter-widget": {
      marginLeft: "auto",
      marginRight: "auto",
    },
    a: {
      backgroundImage: "none",
    },
    "a:hover": {
      backgroundImage:
        "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #950451 1px, #950451 2px, rgba(0, 0, 0, 0) 2px)",
    },
  }
}

delete OceanBeach.googleFonts

const typography = new Typography(OceanBeach)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
