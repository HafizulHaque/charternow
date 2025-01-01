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
        "carousel-img-1": "url('/carousel-image-car.svg')",
        "car-service": "url('/range-rover.svg')",
        "bike-service": "url('/vespa.svg')",
        "boat-service": "url('/party-boat.svg')"
      },
      boxShadow: {
        "input": "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.3) 0px 18px 36px -18px inset"
      }
    },
  },
  plugins: [],
} satisfies Config;
