import { Outlet } from "react-router-dom"
import MainHeader from "../components/Mainheader"
import Mainfooter from "../components/Mainfooter"


const RootLayout = () => {
  return (
    <>
        <MainHeader/>
        <Outlet />
        <Mainfooter/>
    </>
  )
}

export default RootLayout