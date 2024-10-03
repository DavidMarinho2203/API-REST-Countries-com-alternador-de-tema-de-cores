
import { ReactNode } from "react";
import type { HomePageLoading } from "../../types/types";

function HomePageLoading({ theme }: HomePageLoading): ReactNode {
    return (
        <div className={(theme === "Claro" ? "bg-ModoClaro " : "bg-ModoEscuro ")
            + " flex flex-col justify-between items-center px-2 py-4 z-9 sm:px-5"}>

            <div className="flex flex-wrap items-center justify-center w-full gap-5 mb-8 md:justify-between">
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ")
                    + " flex max-w-[320px] w-full rounded-lg h-10  animate-pulse "}></div>
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ")
                    + " flex max-w-[320px] w-full  opacity-75 hover:opacity-100 h-10 animate-pulse "}></div>
            </div>

            <div className="flex flex-wrap items-start justify-center w-full h-full min-h-screen gap-5 border-solid sm:gap-12 sm:px-8 ">
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ") + "flex flex-col max-w-[250px] w-full h-60  animate-pulse rounded-lg"}></div>
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ") + "flex flex-col max-w-[250px] w-full h-60  animate-pulse rounded-lg"}></div>
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ") + "flex flex-col max-w-[250px] w-full h-60  animate-pulse rounded-lg"}></div>
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ") + "flex flex-col max-w-[250px] w-full h-60  animate-pulse rounded-lg"}></div>
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ") + "flex flex-col max-w-[250px] w-full h-60  animate-pulse rounded-lg"}></div>
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ") + "flex flex-col max-w-[250px] w-full h-60  animate-pulse rounded-lg"}></div>
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ") + "flex flex-col max-w-[250px] w-full h-60  animate-pulse rounded-lg"}></div>
                <div className={(theme === "Claro" ? "bg-Branco/80 " : "bg-AzulEscuro/80 ") + "flex flex-col max-w-[250px] w-full h-60  animate-pulse rounded-lg"}></div>
            </div>
        </div>
    )
}

export default HomePageLoading;
// bg-neutral-400/50 animate-pulse