import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '180n': '-180px',
        330: '330px',
        '25%': '25%',
        '85%': '85%',
      },
      colors: {
        'light-fade': 'hsl(274, 4%, 16%)',
        'mint': 'hsl(316, 30%, 36%)',
        'slate-blue': '#191970',
      }
    },
  },
  plugins: [],
};
export default config;
