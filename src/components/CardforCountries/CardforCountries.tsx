import { Link } from "react-router-dom"
import type { CardforCountries, Country } from "../../types/types"

const CardforCountries = ({ theme, countries }: CardforCountries) => {
    return (
        <div className="flex flex-wrap items-center justify-center w-full h-full min-h-screen gap-5 sm:gap-12 sm:px-8">
            {countries.map((country: Country) => (
                <Link to={`/${country.cca3}`} key={country.name.common} className="flex flex-col max-w-[250px] w-full cursor-pointer" >
                    
                    <img
                        className="h-44 w-[250px] rounded-t-md"
                        src={`${country.flags.png}`}
                        alt={country.name.common}
                    />
                    <div
                        className={
                            (theme === "Claro"
                                ? "bg-Branco text-AzulMuitoEscuroTexto"
                                : "bg-AzulEscuro text-Branco") + " flex flex-col items-start justify-between px-5 py-5 h-40 rounded-b-lg text-start "
                        }
                    >
                        <h3 className="uppercase font-800">{country.name.common}</h3>
                        <ul>
                            <li>
                                <span className="font-800">Population:</span>{" "}
                                {country.population.toLocaleString()}
                            </li>
                            <li>
                                <span className="font-800">Region:</span> {country.region}
                            </li>
                            <li>
                                <span className="font-800">Capital:</span> {country.capital}
                            </li>
                        </ul>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CardforCountries
