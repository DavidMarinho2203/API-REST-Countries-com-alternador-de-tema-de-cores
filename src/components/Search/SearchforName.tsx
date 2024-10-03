import { ReactNode, useRef } from 'react'
import type { SearchforName } from '../../types/types'

const SearchforName = ({ theme, search, setSearch }: SearchforName): ReactNode => {

    const searchRef = useRef<HTMLInputElement>(null)
    const focusOnResearsh = () => {
        searchRef.current?.focus()
    }

    return (
        <div
            className={(theme === "Claro" ? "bg-Branco " : "bg-AzulEscuro ") + "cursor-pointer flex max-w-[320px] w-full rounded-lg opacity-75 hover:opacity-100"} onClick={focusOnResearsh}
        >
            <i
                className={(theme === "Claro" ? "text-AzulEscuro" : "text-Branco") + " ri-search-line pl-4 py-2 font-600 cursor-pointer "}></i>
            <input
                className={(theme === "Claro" ? "text-AzulEscuro " : "bg-AzulEscuro text-Branco ") + "font-600 cursor-pointer w-full text-sm ml-4 h-10 pl-2 rounded-r-lg"}
                type="text"
                name="search"
                id="search"
                ref={searchRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a Country"
            />
        </div>
    )
}

export default SearchforName
