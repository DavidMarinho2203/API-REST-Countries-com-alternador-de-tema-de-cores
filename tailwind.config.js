/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        AzulEscuro: "hsl(209, 23%, 22%)",
        AzulMuitoEscuroTexto: "hsl(200, 15%, 8%)",
        CinzaEscuro: "hsl(0, 0%, 52%)",
        Branco: "hsl(0, 0%, 100%)",
      },
      backgroundColor: {
        AzulEscuro: "hsl(209, 23%, 22%)",
        ModoEscuro: "hsl(207, 26%, 17%)",
        ModoClaro: "hsl(0, 0%, 98%)",
      },
      fontWeight: {
        "300": "300",
        "600": "600",
        "800": "800",
      },
      screens: {
        "sm":"675px",
        "md": "768px",
        'lg': '1024px'
      },
      zIndex: {
        "9": 9,
        "99": 99,
        "999": 999
      }
    },
  },
  plugins: [],
};
