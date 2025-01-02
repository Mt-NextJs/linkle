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
  darkMode: ["class", '[data-theme="dark"]'], // 다크모드 변수 활성화
  theme: {
    extend: {
      keyframes: {
        insideout: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        scaleIn: {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        scaleOut: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0)",
            opacity: "0",
          },
        },
      },
      animation: {
        insideout: "insideout 0.6s ease-in-out",
        fadeOut: "fadeOut 0.6s ease-in-out",
        scaleIn: "scaleIn 0.3s ease-in-out",
        scaleOut: "scaleOut 0.3s ease-in-out",
      },
      borderWidth: {
        "1": "1px",
      },
      colors: {
        primary: {
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "250": "var(--primary-250)",
          "300": "var(--primary-300)",
          "350": "var(--primary-350)",
          "400": "var(--primary-400)",
          "450": "var(--primary-450)",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        input: "hsl(var(--input))",
        slate: {
          "333": "var(--foreground)",
          "444": {
            DEFAULT: "#444444",
            dark: "#BBBBBB",
          },
          "666": {
            DEFAULT: "#666666",
            dark: "#999999",
          },
          "999": {
            DEFAULT: "#999999",
            dark: "#666666",
          },
          ddd: {
            DEFAULT: "#dddddd",
            dark: "#444444",
          },
          ccc: {
            DEFAULT: "#cccccc",
            dark: "#333333",
          },
          eee: {
            DEFAULT: "#eaeaea",
            dark: "#222222",
          },
        },
        warning: {
          DEFAULT: "#FF5B1A",
          dark: "#FF6B31",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
