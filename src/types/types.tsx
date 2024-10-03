export interface Country {
    name: {
        common: string;
        official: string
    };
    flags: {
        png: string;
        svg: string;
    };
    population: number;
    region: string;
    subregion: string
    capital: string[];
    continents: string[];
    cca2: string,
    ccn3: string,
    cca3: string,
    tld: string,
    currencies: { [key: string]: { name: string; } };
    languages: { [key: string]: string };
    borders: string[];
}

export interface TypeuseCountries {
    theme: string;
    changeTheme: () => void;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    countries: Country[];
    countriesOriginal: Country[],
    getBorderCountries: (borders: string[], countries: Country[]) => Country[];
    getCurrencyName: (countrie: Object) => String,
    getTheCountryLanguages: (countrie: object) => string,
    loading: boolean;
};

export interface CurrencyInfo {
    name: string;
    symbol: string;
}

// Types for Elements
export interface SearchforName {
    theme: string,
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>

}

export interface SearchforContinent {
    theme: string,
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export interface CardforCountries {
    theme: string;
    countries: Country[];
}

export interface ButtonBack {
    theme: string;
}

export interface HomePageLoading{
    theme: string;
}

export interface CountryLoading{
    theme: string;
}