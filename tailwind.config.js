/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berkshireSwash: ["var(--font-berkshire-swash)"],
        niconne: ["var(--font-niconne)"],
        appleChancery: ["var(--font-apple-chancery)"],
        libreBaskerville: ["var(--font-libre-baskerville)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        darkPink: "#982546",
        carouselPink: "#FFD5DD",
        radicalRed: "#FF2459",
        blackPearl: "#042127",
        darkBlue: "#073F4B",
        azure: "#EDF4F5",
      },
      background: {
        intro:
          "linear-gradient(180deg, #EDF4F5 25.66%, rgba(237, 244, 245, 0.00) 195.83%)",
      },
    },
  },
  plugins: [],
};
