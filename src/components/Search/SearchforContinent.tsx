import { ReactNode } from "react"
import type { SearchforContinent } from "../../types/types"

const SearchforContinent = ({theme,filter,setFilter}: SearchforContinent ): ReactNode => {


    return (
        <div
            className={(theme === "Claro" ? "bg-Branco " : "bg-AzulEscuro ") + "cursor-pointer flex max-w-[320px] w-full rounded-md "}
        >
            <select
                id="cars"
                name="cars"
                className={(theme === "Claro" ? "text-AzulEscuro bg-Branco" : "bg-AzulEscuro text-Branco") + " font-600 cursor-pointer w-full text-sm h-10 pl-2 rounded-md"
                }
                value={filter}
                onChange={(e) => setFilter(e.target.value)
                }
            >
                <option className="mt-10" value="all">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default SearchforContinent
