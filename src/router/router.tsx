import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoutrieBoundary from "../ErrorBoundary/CountrieBoundary";
import CountryPage from "../pages/CountryPage";
import PageNotFoundError from "../ErrorBoundary/PageNotFoundError";
import RootLayout from "../pages/RootLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />, 
                errorElement: <CoutrieBoundary />, 
            },
            {
                path: ":CountrieId",
                element: <CountryPage />, 
                errorElement: <CoutrieBoundary /> 
            },
            {
                path: "*", 
                element: <PageNotFoundError frase="Incorrect URL, try accessing an existing country or click the back button" />, 
                errorElement: <CoutrieBoundary />, 
            },
        ],
    },
]);

export default router;
