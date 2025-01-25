/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        shine: "shine 3s infinite linear",
      },
    },
    backgroundColor:{
      "primary": "#00b8c7",
      "secondary": "#00829a",
      "tertiary": "#005770",
      "quaternary": "#071b2a",
      "white": "#fff",
    },
    textColor:{
      "primary": "#00b8c7",
      "secondary": "#00829a",
      "tertiary": "#005770",
      "quaternary": "#071b2a",
      "white": "#fff",
      "black": "#000",
    },
  },
  plugins: [],
};
