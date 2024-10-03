import { Country } from "../types/types";

const api = async (): Promise<Country[]> => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        if (!response.ok) {
            let message = '';
            switch (response.status) {
                case 404:
                    message = "API not loaded, or does not exist.";
                    break;
                case 401:
                    message = "Access Denied! You do not have permission to view this page.";
                    break;
                case 400:
                    message = "There was a problem with your request. Please try again.";
                    break;
                case 500:
                    message = "There was a problem on the server. Please try again later.";
                    break;
                default:
                    message = "An unexpected error occurred.";
                    break;
            }
            throw new Error(`Error ${response.status}: ${message}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("API fetch error:", error);
        throw error; // Repassa o erro para ser tratado por quem chama a função
    }
};

export default api;

