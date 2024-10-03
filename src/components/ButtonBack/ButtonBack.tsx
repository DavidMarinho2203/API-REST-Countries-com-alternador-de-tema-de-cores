import { Link } from "react-router-dom"
import type { ButtonBack } from "../../types/types"

const ButtonBack = ({ theme }: ButtonBack) => {
    return (
        <Link to={"/"}>
            <button className={(theme === "Claro" ? "bg-Branco text-AzulEscuro opacity-70 hover:opacity-100" : "bg-AzulEscuro text-Branco opacity-70 hover:opacity-100") + " h-fit w-fit py-2 px-7 rounded-md flex gap-3 font-300 shadow-AzulMuitoEscuroTexto shadow-md cursor-pointer "}>
                <i className="ri-arrow-left-line"></i>
                Back
            </button>
        </Link>
    )
}

export default ButtonBack