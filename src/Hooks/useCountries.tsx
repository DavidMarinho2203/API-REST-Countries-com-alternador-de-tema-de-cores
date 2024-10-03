import { useEffect, useState } from "react";
import api from "../api/api";
import type { Country, TypeuseCountries } from "../types/types";

export function useCountries(): TypeuseCountries {
  // Estados
  const [countriesOriginal, setCountriesOriginal] = useState<Country[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme).replace(/[^a-zA-Z0-9]/g, "") : "Claro";
  });
  const [loading, setLoading] = useState<boolean>(true)

  // Funções
  const changeTheme = () => {
    setTheme(state => state == "Escuro" ? "Claro" : "Escuro");
  };


  function sortCountriesByName(countries: Country[]): Country[] {
    return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }

  function sortListOfNames(lista: string[]): string[] {
    return lista.sort((a, b) => a.localeCompare(b))
  }

  function getBorderCountries(borders: string[], countries: Country[]): Country[] {
    return borders ? countries.filter((country: Country) => borders.includes(country.cca3)) : []
  }

  function getCurrencyName(countrie: object): string {
    return Object.values(countrie).map((currency: Country) => currency.name).join(", ")
  }

  function getTheCountryLanguages(countrie: object): string {
    return sortListOfNames(Object.values(countrie)).join(", ")
  }

  // Efeitos 
  useEffect(() => {
    const fetchCountries = async () => {
      const result = await api();
      if (typeof result === "object") {
        setCountriesOriginal(sortCountriesByName(result));
        setCountries(sortCountriesByName(result));
        setLoading(false);
      }
    };
    
    fetchCountries();
  }, []);
  


  useEffect(() => {
    const filteredCountries = countriesOriginal.filter((country: Country) => {
      const searchDataByName = country.name.common.toLowerCase().includes(search?.toLowerCase());
      const searchDataByContinent = (filter === "all") || (country.continents[0]?.toLowerCase().includes(filter.toLowerCase()));
      return searchDataByName && searchDataByContinent;
    })

    setCountries(filteredCountries);
  }, [search, filter, countriesOriginal]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return {
    theme,
    changeTheme,
    search,
    setSearch,
    filter,
    setFilter,
    countries,
    countriesOriginal,
    getBorderCountries,
    getCurrencyName,
    getTheCountryLanguages,
    loading
  };
}

