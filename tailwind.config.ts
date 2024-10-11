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
        text: {
          333: "var(--foreground)",
          444: "#444444",
          666: "#666666",
          999: "#999999",
          ddd: "#dddddd",
          ccc: "#cccccc",
        },
      },
    },
  },
  plugins: [],
};
export default config;
