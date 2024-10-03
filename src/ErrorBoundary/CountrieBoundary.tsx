// CoutrieBoundary.tsx
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import PageNotFoundError from "./PageNotFoundError";

const CoutrieBoundary = () => {
    console.log("olá")
    const error = useRouteError();
    // verifique se o erro é um erro de rota
    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            // caso o usuario digite a url errada.
            case 404:
                return <PageNotFoundError frase={"Page does not exist, click return to home page"} />
            // caso o erro seja de autorização
            case 401:
                return <PageNotFoundError frase={"Access Denied! It appears you do not have permission to view this page."} />
            // caso solicitação seja inválida
            case 400:
                return <PageNotFoundError frase={"There was a problem with your request. Please try again."} />
            // caso o erro seja de servidor
            case 500:
                return <PageNotFoundError frase={"There was a problem on the server. Please try again later."} />
        }
    }
    // caso não seja um erro de rota, seja um erro interno
    return <PageNotFoundError frase={"Internal error. Our team has been notified."} />;
};


export default CoutrieBoundary
