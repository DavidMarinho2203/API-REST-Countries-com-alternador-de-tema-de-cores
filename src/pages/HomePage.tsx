
import { useContext } from "react";
// import { Country } from "../api/api";
import { CountrieContext } from "../context/CountrieContext";
import SearchforName from "../components/Search/SearchforName";
import SearchforContinent from "../components/Search/SearchforContinent";
import CardforCountries from "../components/CardforCountries/CardforCountries";
import HomePageLoading from "../components/Loaders/HomePageLoading";
import { TypeuseCountries } from "../types/types";

const HomePage = (): JSX.Element => {
  const context = useContext(CountrieContext)
  const { theme, countries, search, setSearch, filter, setFilter, loading } = context as TypeuseCountries

  return (
    <>
      {/* Caso a api não tenha sido carrega */}
      {loading && <HomePageLoading theme={theme} />}
      {/* Caso a api tenha sido carregada  */}
      {!loading && (
        <div className={(theme === "Claro" ? "bg-ModoClaro " : "bg-ModoEscuro ") + " flex flex-col justify-between items-center px-2 py-4 z-9 sm:px-5"}>
          <div className="flex flex-wrap items-center justify-center w-full gap-5 mb-8 md:justify-between ">
            <SearchforName theme={theme} search={search} setSearch={setSearch} />
            <SearchforContinent theme={theme} filter={filter} setFilter={setFilter} />
          </div>

          <CardforCountries theme={theme} countries={countries} />
        </div>
      )}


    </>
  );


}

export default HomePage;
