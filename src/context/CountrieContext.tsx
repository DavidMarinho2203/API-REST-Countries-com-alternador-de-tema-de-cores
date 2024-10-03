import { createContext } from "react";
import { useCountries } from "../Hooks/useCountries";
import { TypeuseCountries } from "../types/types";

// Definir um tipo específico para o contexto, caso você tenha o valor retornado de useCountries.
export const CountrieContext = createContext<TypeuseCountries | undefined>(undefined) ;

export default function CountrieProvider({ children }: { children: JSX.Element }) {
    return (
        <CountrieContext.Provider value={useCountries()}>
            {children}
        </CountrieContext.Provider>
    )
}