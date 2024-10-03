import { ReactNode } from "react";
import type { CountryLoading } from "../../types/types";
import ButtonBack from "../ButtonBack/ButtonBack";


function CountryLoading({ theme }: CountryLoading): ReactNode {
    return (
        <div className={(theme === "Claro" ? "bg-ModoClaro " : "bg-ModoEscuro ")
            + " flex flex-col justify-start h-screen gap-5 px-2 py-4 z-9 sm:px-5"}>
                <ButtonBack theme={theme}/>

            <div className="flex flex-wrap items-start justify-center w-full h-screen gap-5 sm:gap-12 sm:px-8">
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ") + "flex flex-col w-full h-full animate-pulse rounded-lg"}></div>
            </div>
        </div>
    )




}

export default CountryLoading;
