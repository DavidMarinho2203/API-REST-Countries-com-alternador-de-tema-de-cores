import { useContext } from "react";
import { CountrieContext } from "../context/CountrieContext";

const Mainfooter = () => {
    const context = useContext(CountrieContext);
    if (!context) return null
    const { theme } = context

    return (
        <header className={(theme === "Claro"
            ? "bg-Branco text-AzulMuitoEscuroTexto shadow-md shadow-CinzaEscuro"
            : "bg-AzulEscuro text-Branco")
            + " flex justify-center h-full px-2 py-4 select-none z-99 sm:px-5 "}>
            <p className="text-md sm:text-lg font-600 ">Desenvolvido por <span className="font-800">David Beckham</span></p>
        </header>
    )
}

export default Mainfooter