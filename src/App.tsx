import { RouterProvider } from "react-router-dom";
import CountrieProvider from "./context/CountrieContext.js";
import router from "./router/router.js";
function App() {

  return (
    <CountrieProvider>
        <RouterProvider router={router}/>
    </CountrieProvider>
  )
}

export default App
