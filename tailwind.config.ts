import type { Config } from "tailwindcss";

{
  /*
import { toneMap } from '@nextcss/color-tools';
function generateColors(color) {
    console.log(color, toneMap(color));
    return {
        DEFAULT: color,
        ...toneMap(color),
    };
}
*/
}

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        insideout: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        fadeOut: {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        scaleIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
      },
      animation: {
        insideout: "insideout 0.6s ease-in-out",
        fadeOut: "fadeOut 0.6s ease-in-out",
        scaleIn: "scaleIn 0.3s ease-in-out",
        scaleOut: "scaleOut 0.3s ease-in-out",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          250: "var(--primary-250)",
          300: "var(--primary-300)",
          350: "var(--primary-350)",
          400: "var(--primary-400)",
          450: "var(--primary-450)",
        },
        block: {
          connect: "#DF5C25",
          text: "#6EBD72",
          image: "#6FBADB",
          divide: "#8BCF42",
          video: "#8348E9",
          calendar: "#D144AD",
          event: "#EDB72A",
        },
        input: {
          line: "var(--input-color-line)",
          bg: "var(--input-color-bg)",
        },
        slate: {
          333: "var(--foreground)",
          444: "#444444",
          666: "#666666",
          999: "#999999",
          ddd: "#dddddd",
          ccc: "#cccccc",
          eee: "#eaeaea",
        },
        warning: {
          DEFAULT: "#FF5B1A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
