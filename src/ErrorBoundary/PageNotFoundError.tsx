import { useContext } from "react";
import { Link } from "react-router-dom";
import { CountrieContext } from "../context/CountrieContext";
import { TypeuseCountries } from "../types/types";

const PageNotFoundError = ({ frase }: { frase: string }) => {
    const context = useContext(CountrieContext);
    const { theme } = context as TypeuseCountries;

    return (
        <>
            <section className={(theme == "Claro"
                ? "bg-ModoClaro text-AzulEscuro "
                : "bg-ModoEscuro text-Branco ")
                + "flex flex-col p-4 z-9 sm:px-5 min-h-screen lg:h-screen gap-10 "}>
                <Link to={"/"}>
                    <button className={(theme == "Claro" ? "bg-Branco text-AzulEscuro opacity-70 hover:opacity-100" : "bg-AzulEscuro text-Branco opacity-70 hover:opacity-100") + " h-fit w-fit py-2 px-7 rounded-md flex gap-3 font-300 shadow-AzulMuitoEscuroTexto shadow-md cursor-pointer "}>
                        <i className="ri-arrow-left-line"></i>
                        Back
                    </button>
                </Link>

                <div className="relative flex items-center justify-center h-screen">
                    <p className="absolute top-[-30px] left-0"><i className="ri-arrow-up-line"></i>Click here to return</p>
                    <p className="text-lg text-center sm:text-2xl md:text-3xl font-800">{frase}</p>
                </div>
            </section>
        </>
    )
}

export default PageNotFoundError