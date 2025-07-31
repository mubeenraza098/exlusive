import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        serviceicon:"#2F2E30",
        starcolor:"#FFAD33",
        dollarcolor:"#DB4444",
        iconcolor:"#F5F5F5",
        semiolor:"#E07575",
        inputcolor:"#F5F5F5",
        mybg:"#FFFFFF",
        myred:"#DB4444",     
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
