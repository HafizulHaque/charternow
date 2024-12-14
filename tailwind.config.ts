import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cstmTeal: '#007B8A'
      },
      backgroundImage: {
        "carousel-img-1": "url('/carousel-image-car.svg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
