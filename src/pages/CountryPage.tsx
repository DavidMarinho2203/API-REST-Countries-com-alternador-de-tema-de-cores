import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { CountrieContext } from "../context/CountrieContext"
import { Country } from "../types/types"
import ButtonBack from "../components/ButtonBack/ButtonBack"
import PageNotFoundError from "../ErrorBoundary/PageNotFoundError"
import CountryLoading from "../components/Loaders/CountryLoading"

const CountryPage = () => {

  const context = useContext(CountrieContext)
  if (!context) throw new Error("Erro api não carregada.")
  const { theme,
    countriesOriginal,
    getBorderCountries,
    getCurrencyName,
    getTheCountryLanguages,
    loading
  } = context

  const params = useParams()

  const countrie = countriesOriginal.find((obj: Country) => obj.cca3 === params.CountrieId);

  return (
    <>
      {/* Caso não exista um país com a url digitada e o carregamento já foi feito*/}    
      {!countrie && !loading && <PageNotFoundError frase="Incorrect URL, try accessing an existing country or click the back button" />}
      {/* Caso não exista um país com a url digitada,mas o carregamento ainda não foi feito*/}
      {!countrie && loading && <CountryLoading theme={theme} />}
      {/* Caso exista um país com a url digitada e o carregamento já foi feito  */}
      {countrie && !loading && (
        <section className={(theme === "Claro" ? "bg-ModoClaro text-AzulEscuro " : "bg-ModoEscuro text-Branco ") + "flex flex-col p-4 z-9 sm:px-5 h-full  lg:h-screen gap-10"}>
          <ButtonBack theme={theme} />
          <div
            className={"flex flex-col gap-10 lg:flex-row  "}>
            <img
              className="w-fit h-fit"
              src={countrie.flags.png}
              alt="" />

            {/* Container Informações */}
            <div className={(theme === "Claro" ? "bg-Branco text-AzulEscuro " : "bg-AzulEscuro text-Branco ") + "flex flex-col gap-5 p-6 w-fit lg:w-full lg:max-w-[800px] rounded-lg "}>
              <h3 className="text-2xl font-800">{countrie.name.common}</h3>

              <div className="flex flex-col gap-8 lg:flex-row">
                <article className="">
                  <p className="flex gap-2 text-sm">
                    <span className="font-800">Native Name: </span> {countrie.name.official}</p>
                  <p className="flex gap-2 text-sm">
                    <span className="font-800">Population: </span> {countrie.population.toLocaleString()}</p>
                  <p className="flex gap-2 text-sm">
                    <span className="font-800">Region: </span> {countrie.region}</p>
                  {countrie.subregion && (
                    <p className="flex gap-2 text-sm">
                      <span className="font-800">Sub Region: </span>
                      {countrie.subregion}
                    </p>)
                  }
                  <p className="flex gap-2 text-sm"><span className="font-800">Capital: </span> {countrie.capital}</p>
                </article>

                <article className="">
                  <p className="flex gap-2 text-sm">
                    <span className="font-800">Top Level Domain: </span> {countrie.tld}</p>
                  <p className="flex gap-2 text-sm">
                    <span className="font-800">Currencies: </span> {getCurrencyName(countrie.currencies)}
                  </p>
                  <p className="flex gap-2 text-sm">
                    <span className="font-800">Languages:</span> {getTheCountryLanguages(countrie.languages)}
                  </p>
                </article>
              </div>

              <article className="flex flex-wrap gap-2">
                <p className="font-800 w-fit ">Border Countries:</p>
                <ul className="flex flex-wrap gap-2">
                  { // Verifica se o conteúdo é um array de objetos
                    (getBorderCountries(countrie.borders, countriesOriginal).length != 0
                      ? (
                        <>
                          {getBorderCountries(countrie.borders, countriesOriginal)?.map((countrie) => (
                            <Link
                              key={countrie.ccn3}
                              to={`/${countrie.cca3}`}
                              className={(theme === "Claro"
                                ? "bg-ModoClaro text-AzulEscuro "
                                : "bg-ModoEscuro text-Branco ")
                                + "text-sm py-2 px-4 rounded-md cursor-pointer opacity-80 hover:opacity-100"}>
                              {/* Conteúdo do div para o país */}
                              {countrie.name.common}
                            </Link>
                          ))}
                        </>
                      )
                      : // Caso não seja um array de objetos
                      (
                        <p>
                          There are no bordering countries
                        </p>
                      )
                    )
                  }
                </ul>
              </article>
            </div>

          </div>
        </section>
      )}
      
    </>
  )

}


export default CountryPage