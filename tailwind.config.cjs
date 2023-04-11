/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const responsiveTextPlugin = require("./src/utils/plugins/responsiveTextPlugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    text: {
      name: {
        DEFAULT: {
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "143%",
        },
        xs: {
          fontSize: "18px",
        },
        sm: {
          fontSize: "24px",
        },
        md: {
          fontSize: "30px",
        },
      },
      "body-7xl": {
        DEFAULT: {
          fontWeight: "400",
          fontSize: "230px",
          lineHeight: "60%",
        },
      },
      "body-6xl": {
        DEFAULT: {
          fontWeight: "700",
          fontSize: "45px",
          lineHeight: "110%",
        },
        xs: {
          fontSize: "60px",
        },
        sm: {
          fontSize: "80px",
        },
        md: {
          fontSize: "104px",
        },
      },
      "body-4xl": {
        DEFAULT: {
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "144%",
        },
        xs: {
          fontSize: "20px",
        },
        sm: {
          fontSize: "26px",
        },
        md: {
          fontSize: "32px",
        },
      },
      "span-2xl": {
        DEFAULT: {
          fontWeight: "700",
          fontSize: "10px",
          lineHeight: "144%",
        },
        xs: {
          fontSize: "12px",
        },
        sm: {
          fontSize: "14px",
        },
        md: {
          fontSize: "18px",
        },
      },
      "span-xl": {
        DEFAULT: {
          fontWeight: "400",
          fontSize: "9px",
          lineHeight: "144%",
        },
        xs: {
          fontSize: "11px",
        },
        sm: {
          fontSize: "13px",
        },
        md: {
          fontSize: "16px",
        },
      },
      "primary-button": {
        DEFAULT: {
          fontSize: "12px",
          lineHeight: "145%",
        },
        xs: {
          fontSize: "14px",
        },
        sm: {
          fontSize: "19px",
        },
        md: {
          fontSize: "24px",
        },
      },
    },
    extend: {
      colors: ({ colors }) => ({
        ...colors,
        primary: {
          DEFAULT: "#9747FF",
          gradient: "",
        },
      }),
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #9747FF 0%, #6F00FF 100%)",
      },
      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.200", "currentColor"),
      }),
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        "2sm": "0.1875rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        "2lg": "0.6875rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "12xl": "6.5rem",
        full: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0px 0px 0px 10px rgba(113, 53, 191, 0.1), inset 0px 0px 0px 10px #7135BF",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none",
        card: "4px 5px 26px rgba(217, 217, 217, 0.35)",
      },
      container: {},
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none",
      },
      fontFamily: {
        istok: ["Istok Web", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      gap: ({ theme }) => theme("spacing"),
      gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1",
      },
      gridColumnEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridColumnStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-full": "1 / -1",
      },
      gridRowStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
      gridRowEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
      gridTemplateColumns: {
        none: "none",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        none: "none",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
      },
      height: ({ theme }) => ({
        auto: "auto",
        ...theme("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        full: "100%",
        screen: "100vh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      }),
      inset: ({ theme }) => ({
        auto: "auto",
        ...theme("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
      }),
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      margin: ({ theme }) => ({
        auto: "auto",
        ...theme("spacing"),
      }),
      maxHeight: ({ theme }) => ({
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      }),
      maxWidth: ({ theme, breakpoints }) => ({
        ...theme("spacing"),
        none: "none",
        0: "0rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        prose: "65ch",
        ...breakpoints(theme("screens")),
      }),
      minHeight: {
        0: "0px",
        full: "100%",
        screen: "100vh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      },
      minWidth: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      },
      padding: ({ theme }) => theme("spacing"),
      placeholderColor: ({ theme }) => theme("colors"),
      placeholderOpacity: ({ theme }) => theme("opacity"),
      outlineColor: ({ theme }) => theme("colors"),
      outlineOffset: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      outlineWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      ringColor: ({ theme }) => ({
        DEFAULT: theme("colors.blue.500", "#3b82f6"),
        ...theme("colors"),
      }),
      ringOffsetColor: ({ theme }) => theme("colors"),
      ringOffsetWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      textColor: ({ theme }) => theme("colors"),
      textIndent: ({ theme }) => ({
        ...theme("spacing"),
      }),
      transitionDuration: {
        0: "0ms",
        18: "18ms",
        400: "400ms",
      },
      transitionDelay: {
        0: "0ms",
        18: "18ms",
        400: "400ms",
      },
      width: ({ theme }) => ({
        auto: "auto",
        ...theme("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        screen: "100vw",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      }),
      zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
      },
      spacing: {
        px: "1px",
        px2: "2px",
        3.4: "3.438rem",
        17.3: "17.313rem",
        17.5: "17.5rem",
        23.25: "23.25rem",
        31.25: "31.25rem",
      },
    },
  },
  plugins: [
    responsiveTextPlugin({
      extraFonts: [{ name: "serif", multiplicator: 1.08 }],
    }),
    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        ".flex-wrapper-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-wrapper-column": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        },
      });
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
        ".scrollbar-default": {
          /* IE and Edge */
          "-ms-overflow-style": "auto",
          /* Firefox */
          "scrollbar-width": "auto",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
      });
    }),
  ],
};
