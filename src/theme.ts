import {
  extendTheme,
  ThemeConfig,
  defineStyleConfig,
  defineStyle,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};
const customVariant = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: `tranparent`,
    fontWeight: "500 !important",
    color: `${c}.500`,
    border: "1px solid",
    _dark: {
      bg: `${c}.100`,
      color: "gray.800",
    },
    _disabled: {
      pointerEvents: "none",
    },
    _hover: {
      fontWeight: "500 !important",
      transform: "scale(1.05, 1.05)",
      bg: ` ${c}.600`,
      color: "white",
      border: "none",
      _dark: {
        bg: `${c}.500`,
      },
    },

    _active: {
      fontWeight: "500 !important",
      bg: `${c}`,
      transform: "scale(1, 1)",

      _dark: {
        bg: `${c}.400`,
      },
    },
  };
});
export const buttonTheme = defineStyleConfig({
  variants: {
    custom: customVariant,
  },

  defaultProps: {
    colorScheme: "red", // set the default color scheme to purple
  },
});
const theme = extendTheme({
  config,
  components: {
    Button: buttonTheme,
  },
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    themeRed: "#DF1600",
  },
});

export default theme;
