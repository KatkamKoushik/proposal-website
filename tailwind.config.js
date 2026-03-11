/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        romanticPink: "#F9C6D4",
        duskyLavender: "#B9A4F5",
        roseGold: "#B76E79"
      },
      backgroundImage: {
        "romantic-gradient":
          "radial-gradient(circle at top, rgba(249,198,212,0.9), transparent 55%), radial-gradient(circle at bottom, rgba(185,164,245,0.9), transparent 55%)"
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(248, 210, 224, 0.7)"
      }
    }
  },
  plugins: []
};

