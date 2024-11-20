/** @type {import('tailwindcss').Config} */
const fs = require("fs");
const path = require("path");

const themePath = path.resolve(__dirname, "theme.js");

const externalTheme = fs.existsSync(themePath)
  ? require(themePath).theme
  : undefined;

/**
 * Checks if an external theme is present and if the values being checked for are valid
 * @param {Object} theme
 * @param {string} themeCategory
 * @param {string} themeValue
 * @returns {boolean}
 */
const externalThemeChecker = (theme, themeCategory, themeValue) => {
  if (theme !== undefined) {
    if (Object.hasOwn(theme, themeCategory)) {
      if (Object.hasOwn(theme[themeCategory], themeValue)) {
        if (themeValue !== undefined || themeValue.length !== 0) {
          return true;
        }
      }
    }
  }
  return false;
};

/**
 * Function to lighten or darken a color value
 * @param {string} color - Any HEX or RGB/A color
 * @param {number} amount - Provide a positive value to lighten the given color, or a negative value to darker the given color
 * @returns {string} RBG/A string
 */
const adjustColor = (color, amount) => {
  const clamp = (value) => Math.max(0, Math.min(255, value));

  if (color !== undefined) {
    // Convert HEX to RGB
    if (color.startsWith("#")) {
      let r, g, b;
      if (color.length === 4) {
        // Short hex (#RGB)
        r = parseInt(color[1] + color[1], 16);
        g = parseInt(color[2] + color[2], 16);
        b = parseInt(color[3] + color[3], 16);
      } else if (color.length === 7) {
        r = parseInt(color.slice(1, 3), 16);
        g = parseInt(color.slice(3, 5), 16);
        b = parseInt(color.slice(5, 7), 16);
      } else {
        throw new Error("Invalid HEX color.");
      }

      r = clamp(r + amount);
      g = clamp(g + amount);
      b = clamp(b + amount);

      return `rgb(${r}, ${g}, ${b})`;
    }

    // Convert RGB/A to adjusted RGB/A
    if (color.startsWith("rgb")) {
      const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/;
      const match = color.match(regex);

      if (!match) {
        throw new Error("Invalid RGB/A color");
      }

      const r = clamp(parseInt(match[1]) + amount);
      const g = clamp(parseInt(match[2]) + amount);
      const b = clamp(parseInt(match[3]) + amount);
      const a = match[4] !== undefined ? parseFloat(match[4]) : 1;

      return match[4] !== undefined
        ? `rgba(${r}, ${g}, ${b}, ${a})`
        : `rgb(${r}, ${g}, ${b})`;
    }

    throw new Error(`Unsupported color format. Use HEX or RGB/A`);
  }
};

const defaultTheme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#6366f1",
    tertiary: "#0ea5e9",
    success: "#22c55e",
    warning: "#eab308",
    danger: "#ef4444",
    dark: "#0a0a0a",
    medium: "#737373",
    light: "#fafafa",
  },
};

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      primary: externalThemeChecker(externalTheme, "colors", "primary")
        ? externalTheme.colors.primary
        : defaultTheme.colors.primary,

      primaryLight: externalThemeChecker(externalTheme, "colors", "primary")
        ? adjustColor(externalTheme.colors.primary, 50)
        : adjustColor(defaultTheme.colors.primary, 50),

      primaryDark: externalThemeChecker(externalTheme, "colors", "primary")
        ? adjustColor(externalTheme.colors.primary, -50)
        : adjustColor(defaultTheme.colors.primary, -50),

      secondary: externalThemeChecker(externalTheme, "colors", "secondary")
        ? externalTheme.colors.secondary
        : defaultTheme.colors.secondary,

      secondaryLight: externalThemeChecker(externalTheme, "colors", "secondary")
        ? adjustColor(externalTheme.colors.secondary, 50)
        : adjustColor(defaultTheme.colors.secondary, 50),

      secondaryDark: externalThemeChecker(externalTheme, "colors", "secondary")
        ? adjustColor(externalTheme.colors.secondary, -50)
        : adjustColor(defaultTheme.colors.secondary, -50),

      tertiary: externalThemeChecker(externalTheme, "colors", "tertiary")
        ? externalTheme.colors.tertiary
        : defaultTheme.colors.tertiary,

      tertiaryLight: externalThemeChecker(externalTheme, "colors", "teriary")
        ? adjustColor(externalTheme.colors.tertiary, 50)
        : adjustColor(defaultTheme.colors.tertiary, 50),

      tertiaryDark: externalThemeChecker(externalTheme, "colors", "tertiary")
        ? adjustColor(externalTheme.colors.tertiary, -50)
        : adjustColor(defaultTheme.colors.tertiary, -50),

      success: externalThemeChecker(externalTheme, "colors", "success")
        ? externalTheme.colors.success
        : defaultTheme.colors.success,

      successLight: externalThemeChecker(externalTheme, "colors", "success")
        ? adjustColor(externalTheme.colors.success, 50)
        : adjustColor(defaultTheme.colors.success, 50),

      successDark: externalThemeChecker(externalTheme, "colors", "success")
        ? adjustColor(externalTheme.colors.success, -50)
        : adjustColor(defaultTheme.colors.success, -50),

      warning: externalThemeChecker(externalTheme, "colors", "warning")
        ? externalTheme.colors.warning
        : defaultTheme.colors.warning,

      warningLight: externalThemeChecker(externalTheme, "colors", "warning")
        ? adjustColor(externalTheme.colors.warning, 50)
        : adjustColor(defaultTheme.colors.warning, 50),

      warningDark: externalThemeChecker(externalTheme, "colors", "warning'")
        ? adjustColor(externalTheme.colors.warning, -50)
        : adjustColor(defaultTheme.colors.warning, -50),

      danger: externalThemeChecker(externalTheme, "colors", "danger")
        ? externalTheme.colors.danger
        : defaultTheme.colors.danger,

      dangerLight: externalThemeChecker(externalTheme, "colors", "danger")
        ? adjustColor(externalTheme.colors.danger, 50)
        : adjustColor(defaultTheme.colors.danger, 50),

      dangerDark: externalThemeChecker(externalTheme, "colors", "danger")
        ? adjustColor(externalTheme.colors.danger, -50)
        : adjustColor(defaultTheme.colors.danger, -50),

      dark: externalThemeChecker(externalTheme, "colors", "dark")
        ? externalTheme.colors.dark
        : defaultTheme.colors.dark,

      medium: externalThemeChecker(externalTheme, "colors", "medium")
        ? externalTheme.colors.medium
        : defaultTheme.colors.medium,

      light: externalThemeChecker(externalTheme, "colors", "light")
        ? externalTheme.colors.light
        : defaultTheme.colors.light,
    },
    extend: {},
  },
  plugins: [],
};
