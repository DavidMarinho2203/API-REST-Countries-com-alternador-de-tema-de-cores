import { useContext } from "react"
import { CountrieContext } from "../context/CountrieContext";


const MainHeader = () => {
  const context = useContext(CountrieContext);
  if (!context) {
    return null;
  }
  const { theme, changeTheme } = context

  return (
    <header className={(theme === "Claro" 
    ? "bg-Branco text-AzulMuitoEscuroTexto shadow-md shadow-CinzaEscuro" 
    : "bg-AzulEscuro text-Branco") 
    + " flex justify-between h-full px-2 py-4 select-none z-99 sm:px-5   "}>
      <p className="text-md sm:text-lg font-600">Where in the world?</p>
      <i
        className={(theme === "Claro"
          ? "ri-sun-line bg-Branco text-AzulMuitoEscuroTexto"
          : "ri-moon-line bg-AzulEscuro text-Branco") 
          + " font-300 cursor-pointer select-none flex gap-1 text-md sm:text-lg "}
        onClick={changeTheme}>
        <i className=""></i>
        {theme == "Claro" ? "Light Mode" : "Dark Mode"}
      </i>
    </header>
  )
}

export default MainHeader